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
    colorType: 'primary' | 'secondary' | 'white';
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

        let primaryHex = '#00f2ff';
        let secondaryHex = '#ffca28';

        const hexToRgba = (hex: string, alpha: number) => {
            const h = hex.replace('#', '');
            if (h.length !== 6) return `rgba(0, 242, 255, ${alpha})`;
            const r = parseInt(h.substring(0, 2), 16);
            const g = parseInt(h.substring(2, 4), 16);
            const b = parseInt(h.substring(4, 6), 16);
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };

        const updateColors = () => {
            const style = getComputedStyle(document.documentElement);
            const p = style.getPropertyValue('--primary').trim();
            const s = style.getPropertyValue('--secondary').trim();
            if (p && p.startsWith('#')) primaryHex = p;
            if (s && s.startsWith('#')) secondaryHex = s;
        };
        updateColors();

        const stars: Particle[] = Array.from({ length: NUM_STARS }, () => ({
            x: (Math.random() - 0.5) * W,
            y: (Math.random() - 0.5) * H,
            z: Math.random() * W,
            pz: 0,
        }));

        const streaks: Streak[] = Array.from({ length: 18 }, () => makeStreak(H));

        function makeStreak(h: number): Streak {
            const types: ('primary' | 'secondary' | 'white')[] = ['primary', 'primary', 'primary', 'secondary', 'white'];
            return {
                x: -200,
                y: Math.random() * h,
                length: 80 + Math.random() * 200,
                speed: 4 + Math.random() * 12,
                opacity: 0.06 + Math.random() * 0.14,
                width: 0.5 + Math.random() * 1.2,
                colorType: types[Math.floor(Math.random() * types.length)],
            };
        }

        let frame = 0;
        let animId: number;

        const draw = () => {
            frame++;
            if (frame % 60 === 0) updateColors();

            ctx.fillStyle = 'rgba(5, 10, 20, 0.18)';
            ctx.fillRect(0, 0, W, H);

            const cx = W / 2;
            const cy = H / 2;

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

                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(sx, sy);
                ctx.strokeStyle = hexToRgba(primaryHex, brightness * 0.6);
                ctx.lineWidth = size * (isNearCenter ? 0.5 : 1);
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(sx, sy, size, 0, Math.PI * 2);
                ctx.fillStyle = hexToRgba('#ffffff', brightness);
                ctx.fill();
            });

            streaks.forEach(s => {
                s.x += s.speed;
                if (s.x > W + s.length) {
                    Object.assign(s, makeStreak(H));
                    s.x = -s.length;
                }

                const grad = ctx.createLinearGradient(s.x, s.y, s.x + s.length, s.y);
                grad.addColorStop(0, 'transparent');

                let hex = primaryHex;
                if (s.colorType === 'secondary') hex = secondaryHex;
                if (s.colorType === 'white') hex = '#ffffff';

                grad.addColorStop(0.3, hexToRgba(hex, s.opacity));
                grad.addColorStop(0.5, hexToRgba(hex, s.opacity * 1.5));
                grad.addColorStop(1, 'transparent');

                ctx.beginPath();
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(s.x + s.length, s.y);
                ctx.strokeStyle = grad;
                ctx.lineWidth = s.width;
                ctx.stroke();
            });

            if (frame % 3 === 0) {
                const pulse = Math.sin(frame * 0.02) * 0.5 + 0.5;
                const rg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 200 + pulse * 60);
                rg.addColorStop(0, hexToRgba(primaryHex, 0.015 + pulse * 0.01));
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
