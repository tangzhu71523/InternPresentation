# Disabled Wake Effect Archive

This file preserves the removed heavy wake experiment. It is not loaded by `index.html`.

The experiment used:

- `.wire-pressure` for a dark pressure pass.
- `.wire-color-wake` for a layered radial wake ring.
- `heavyWakeEnabled`, `radialRevealEnabled`, `wakeCore`, `wakeTrail`, `wakeRipple`, `pressure`, `shockGlow`, and `shockPush` in `updateBlueprint()`.

It was removed from the active page because it felt like a flat 2D overlay and caused visible frame drops.
