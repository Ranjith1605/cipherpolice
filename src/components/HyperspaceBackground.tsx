import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    z: number;
    pz: number;
}

interface Streak {
    x: number;
    y: number;
    length: number;
    speed: number;
    opacity: number;
    width: number;
    color: string;
}

export const HyperspaceBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let W = window.innerWidth;
        let H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;

        const NUM_STARS = 200;
        const SPEED = 0.012;

        // Warp stars (depth-based speed of light)
        const stars: Particle[] = Array.from({ length: NUM_STARS }, () => ({
            x: (Math.random() - 0.5) * W,
            y: (Math.random() - 0.5) * H,
            z: Math.random() * W,
            pz: 0,
        }));

        // Horizontal speed streaks
        const streaks: Streak[] = Array.from({ length: 18 }, () => makeStreak(W, H));

        function makeStreak(w: number, h: number): Streak {
            const colors = ['#00f2ff', '#00f2ff', '#00f2ff', '#ffca28', '#ffffff'];
            return {
                x: -200,
                y: Math.random() * h,
                length: 80 + Math.random() * 200,
                speed: 4 + Math.random() * 12,
                opacity: 0.06 + Math.random() * 0.14,
                width: 0.5 + Math.random() * 1.2,
                color: colors[Math.floor(Math.random() * colors.length)],
            };
        }

        let frame = 0;
        let animId: number;

        const draw = () => {
            frame++;

            // Dark trail (no full clear — creates motion blur effect)
            ctx.fillStyle = 'rgba(5, 10, 20, 0.18)';
            ctx.fillRect(0, 0, W, H);

            const cx = W / 2;
            const cy = H / 2;

            // Warp stars
            stars.forEach(star => {
                star.pz = star.z;
                star.z -= W * SPEED;

                if (star.z <= 0) {
                    star.x = (Math.random() - 0.5) * W;
                    star.y = (Math.random() - 0.5) * H;
                    star.z = W;
                    star.pz = W;
                }

                const sx = (star.x / star.z) * W + cx;
                const sy = (star.y / star.z) * H + cy;
                const px = (star.x / star.pz) * W + cx;
                const py = (star.y / star.pz) * H + cy;

                const size = Math.max(0.2, (1 - star.z / W) * 2.5);
                const brightness = 1 - star.z / W;
                const isNearCenter = Math.abs(sx - cx) < W * 0.1 && Math.abs(sy - cy) < H * 0.1;

                // Streak trail
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(sx, sy);
                ctx.strokeStyle = `rgba(0, 242, 255, ${brightness * 0.6})`;
                ctx.lineWidth = size * (isNearCenter ? 0.5 : 1);
                ctx.stroke();

                // Star dot
                ctx.beginPath();
                ctx.arc(sx, sy, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 240, 255, ${brightness})`;
                ctx.fill();
            });

            // Horizontal light streaks
            streaks.forEach(s => {
                s.x += s.speed;
                if (s.x > W + s.length) {
                    Object.assign(s, makeStreak(W, H));
                    s.x = -s.length;
                }

                const grad = ctx.createLinearGradient(s.x, s.y, s.x + s.length, s.y);
                grad.addColorStop(0, 'transparent');
                grad.addColorStop(0.3, s.color.replace(')', `, ${s.opacity})`).replace('rgb', 'rgba').replace('#00f2ff', `rgba(0,242,255,${s.opacity})`).replace('#ffca28', `rgba(255,202,40,${s.opacity})`).replace('#ffffff', `rgba(255,255,255,${s.opacity})`));
                grad.addColorStop(0.5, s.color === '#00f2ff'
                    ? `rgba(0,242,255,${s.opacity * 1.5})`
                    : s.color === '#ffca28'
                        ? `rgba(255,202,40,${s.opacity * 1.5})`
                        : `rgba(255,255,255,${s.opacity * 1.5})`);
                grad.addColorStop(1, 'transparent');

                ctx.beginPath();
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(s.x + s.length, s.y);
                ctx.strokeStyle = grad;
                ctx.lineWidth = s.width;
                ctx.stroke();
            });

            // Subtle center radial glow (warp core)
            if (frame % 3 === 0) {
                const pulse = Math.sin(frame * 0.02) * 0.5 + 0.5;
                const rg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 200 + pulse * 60);
                rg.addColorStop(0, `rgba(0, 242, 255, ${0.015 + pulse * 0.01})`);
                rg.addColorStop(1, 'transparent');
                ctx.fillStyle = rg;
                ctx.fillRect(0, 0, W, H);
            }

            animId = requestAnimationFrame(draw);
        };

        draw();

        const onResize = () => {
            W = window.innerWidth;
            H = window.innerHeight;
            canvas.width = W;
            canvas.height = H;
        };
        window.addEventListener('resize', onResize);
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};
