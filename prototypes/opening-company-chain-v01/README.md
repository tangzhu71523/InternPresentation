# Opening Company Chain v01

Purpose: first static-plus-scroll prototype for the company base scene.

Scope:
- Uses the generated 2D company building as a fixed cinematic background.
- Tests Igloo-like scroll pacing with a vertical suspended-container belt on the right side.
- Adds a post-intro hook drop before the page becomes scroll-ready.
- Keeps the left building and logo area free from text.
- Does not touch the current deck or old slide worktrees.
- Shared/generated image assets are stored under `../../asset`, not inside this prototype folder.

Open:

```text
.\index.html
```

Review target:
- Containers move as one vertical belt.
- Old containers remain visible until clipped by the viewport.
- New containers enter naturally from below.
- Scroll cue appears only after the hook drop completes.
- Background motion stays subtle and does not steal attention.
