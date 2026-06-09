// Disabled heavy wake experiment.
// This file is intentionally not loaded by index.html.

export function computeWakeState(progress, { heavyWakeEnabled = false, radialRevealEnabled = false } = {}) {
  const p = Math.max(0, Math.min(1, progress));
  const smoothstep = (start, end, value) => {
    const t = Math.max(0, Math.min(1, (value - start) / (end - start)));
    return t * t * (3 - 2 * t);
  };

  const waveProgress = radialRevealEnabled ? smoothstep(0.60, 0.98, p) : 0;
  const wakeCoreRaw = smoothstep(0.61, 0.76, p) * (1 - smoothstep(0.91, 1.04, p));
  const wakeTrailRaw = smoothstep(0.68, 0.88, p) * (1 - smoothstep(0.98, 1.08, p));
  const wakeRippleRaw = smoothstep(0.76, 0.92, p) * (1 - smoothstep(0.96, 1.07, p));
  const pressureRaw = smoothstep(0.57, 0.72, p) * (1 - smoothstep(0.90, 1.03, p));

  const wakeCore = heavyWakeEnabled && radialRevealEnabled ? wakeCoreRaw : 0;
  const wakeTrail = heavyWakeEnabled && radialRevealEnabled ? wakeTrailRaw : 0;
  const wakeRipple = heavyWakeEnabled && radialRevealEnabled ? wakeRippleRaw : 0;
  const pressure = heavyWakeEnabled && radialRevealEnabled ? pressureRaw : 0;
  const shockGlow = Math.max(0, Math.min(1, wakeCore * 0.72 + wakeTrail * 0.26));

  return {
    waveProgress,
    wakeCore,
    wakeTrail,
    wakeRipple,
    pressure,
    shockGlow,
    shockPush: pressure * 0.011 + wakeCore * 0.007
  };
}
