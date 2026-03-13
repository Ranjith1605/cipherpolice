export const playTechClick = () => {
    try {
        // A highly futuristic, short "blip" or "hollow click" sound
        // Synthesizing a short, high-tech oscillator beep using Web Audio API instead of loading external files
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        
        // Main frequency oscillator
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        oscillator.type = 'sine'; // Smooth futuristic tone
        oscillator.frequency.setValueAtTime(1200, audioCtx.currentTime); // Start high
        oscillator.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.05); // Rapid drop for "click" feel

        // Filter for a more "hollow/cyber" sound
        filter.type = 'bandpass';
        filter.frequency.value = 1000;
        filter.Q.value = 5;

        // Envelope (Volume control over time)
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + 0.01); // Quick fade in
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1); // Fast fade out

        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1);

    } catch (e) {
        // Silently fail if AudioContext is blocked by browser autoplay policies
        console.warn("Cyber audio engine blocked:", e);
    }
};

export const playTechHover = () => {
    try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = 'triangle'; 
        oscillator.frequency.setValueAtTime(400, audioCtx.currentTime);
        oscillator.frequency.linearRampToValueAtTime(600, audioCtx.currentTime + 0.05);

        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.02, audioCtx.currentTime + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.08);

    } catch (e) {}
};
