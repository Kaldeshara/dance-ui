# Design rules

The troupe's apps (TRACster for planning, TRACostume for costumes) should feel like one product.
`theme.css` holds the values; this page holds the rules behind them.

## Colour

- **Neutrals:** the `stone` scale is tinted towards aubergine. Ink is `stone-900` (#231B33) on a
  cool studio white (`stone-50`). Use it for text, primary buttons and active navigation.
- **Accents:**
  - `spotlight` (amber #FFB000, text in `spotlight-ink`): today, highlights, the thing to
    notice.
  - `velvet` (#8C2A46): destructive and admin accents.
  - `stage` (#231B33): the one dark hero block on a page ("Next up", the Scan card) and the
    floating + button.
- **Status:**
  - green: confirmed or available;
  - amber: maybe or attention;
  - red: overdue, unavailable or error.
- **Dark mode is automatic.** Write light classes only (`bg-white`, `text-stone-900`,
  `bg-amber-100`), never `dark:` variants. The theme mirrors the palette variables.
  - `black` is not mirrored. Use it for scrims (`bg-black/40` under menus, `bg-black/50`
    behind sheets) and camera or photo backgrounds.
  - Text on those must be `text-[#fff]`, because `text-white` mirrors to dark.
- **Theme choice:** set `data-theme="light"|"dark"` on `<html>` from a cookie, on the server.
  Without it, the device setting applies. Dark mode is screen only: printing stays light.

## Type

- Archivo, with the width axis. The app loads the font and sets `--font-sans`.
- `font-display` (condensed 72 %, weight 800) for page titles, big numbers, times and day
  numbers. Headings below the title: `text-lg font-semibold tracking-tight`.
- Body text 14–16 px. Nothing under 12 px, except tab labels under 360 px (11 px).

## Shape and depth

- Radius:
  - `rounded-lg`: buttons, inputs, rows;
  - `rounded-xl`: cards and segmented controls;
  - `rounded-2xl`: sheets and hero blocks;
  - `rounded-full`: chips and round buttons.
- Cards are flat: a border and no shadow. Rows that open something get `hover:shadow-md`.
  Floating things (+ button, toasts, menus) use `shadow-lg`; sheets use `shadow-xl`.

## Touch and controls

- Every control is at least 44 × 44 px. Compact desktop controls grow with
  `pointer-coarse:min-h-11`.
- One look per control, from `components.css` (or TRACster's `ui.tsx`):
  - `.btn`, `.btn-primary`, `.btn-danger`, `.btn-ghost`;
  - `.input` and `.label`;
  - `.card`;
  - `.chip`;
  - `.segmented` with `.segmented-option`, for every either/or switch (`role="radiogroup"`
    and `aria-checked`);
  - `.empty-state`.
- Visible keyboard focus everywhere (`:focus-visible` outline in ink).
- Icons: one line family, from `icons.js`. Never emoji or text characters (⌗, ▾, →) as icons.
  Icon-only buttons need an `aria-label` and a `title`.

## Navigation

- **Phones and tablets (below `lg`):**
  - a header with the app name and an initials button that opens the menu;
  - a bottom tab bar of at most 5 tabs, with the main action raised in the centre and 12 px
    labels;
  - the page's create action as the floating + (`stage`, `ring-spotlight/60`), bottom right,
    with `data-fab` so the page keeps room below its content.
- **Desktop (`lg` and up):**
  - a left sidebar (`.app-frame`, `.app-sidebar`, `.sidebar-label`, `.sidebar-heading`);
  - an icon rail between `lg` and `xl`, expanding on hover;
  - 16 rem from `xl`, collapsible, with the state in a cookie as `data-sidebar="collapsed"`.
- Detail pages have a back button on every screen size. An installed app has no browser
  back button.

## Motion

- One curve, `ease-stage`, and three durations:
  - `--duration-short` 150 ms: exits and small things;
  - `--duration-medium` 220 ms: sheets and menus;
  - `--duration-long` 320 ms: entrances.
- Sheets slide up from the bottom on phones and are centred dialogs from `md`. Their backdrop
  fades. They close with Escape, a tap outside or a swipe down.
- Feedback motion only answers an action (`chip-pop`, `row-new`). Everything is off under
  `prefers-reduced-motion`.

## Seasons

- Autumn runs from 15 October to 30 November, Christmas from 1 December to 6 January. Each
  member can turn the decorations off.
- They apply to:
  - the page (`autumn-surface` / `festive-surface`);
  - the header, tab bar and sidebar (`autumn-header` / `festive-header`);
  - a strip under the header (`autumn-strip-sky` with `autumn-leaf`; `festive-strip-sky`
    with bulbs and snow).

## Words (French first)

- Sentence case. Typographic apostrophe (’) and ellipsis (…). Non-breaking space before
  « : ; ? ! ».
- Gender-neutral wording ("Cette personne…", "danseur·ses").
- Short placeholders ("Rechercher…").
- Destructive actions ask for confirmation and name the thing. Undo is better than confirm
  when it is possible.
