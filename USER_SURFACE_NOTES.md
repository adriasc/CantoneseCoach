# User Surface Notes

Current mode: `page` (bottom nav `User` opens `panel-user`).

## Why this file exists
The project previously used a left slide-in drawer for the user area.  
That behavior was replaced with a normal page, but legacy code is intentionally kept so rollback is easy.

## Active behavior
- User button in bottom nav uses `data-bottom-tab="user"`.
- Main tab switch shows `panel-user`.
- No drawer open/close is used in normal flow.

## Legacy retained (do not remove unless you decide permanently)
- JS functions:
  - `openUserSidePanel()`
  - `closeUserSidePanel()`
- CSS block:
  - `.side-panel`, `.side-panel-backdrop`, `.side-panel-drawer`, related states
- ID hooks still present in JS (`openUserPanel`, `closeUserPanel`, `closeUserPanelBackdrop`) for compatibility.

## Rollback to side panel (if desired later)
1. Restore side-panel wrapper markup with `#userPanel` in `index.html`.
2. Wire User button click to `openUserSidePanel()` (instead of `switchTab("user")`).
3. Hide/remove `panel-user` from navigation flow.
4. Keep or tune existing side-panel CSS.

## Permanent cleanup path (if desired later)
1. Remove side-panel CSS block.
2. Remove side-panel JS functions and related element references.
3. Remove unused IDs from markup.
