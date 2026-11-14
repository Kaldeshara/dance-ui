# dance-ui

The shared art direction of the troupe's apps: TRACster (planning, Next.js) and TRACostume
(costumes, SvelteKit). It is framework-agnostic: Tailwind 4 CSS and SVG path data. Each app
keeps its own thin components on top of it. [DESIGN.md](DESIGN.md) has the rules.

| File | Contains |
| --- | --- |
| `theme.css` | Design tokens (aubergine-tinted stone scale, stage, spotlight and velvet colours, motion), `font-display`, the dark-mode palette mirror, autumn and Christmas themes, sidebar widths, base rules (focus, cursor, touch), feedback motion |
| `components.css` | TRACster's controls as classes: `.btn`, `.input`, `.label`, `.card`, `.chip`, `.segmented`, `.empty-state` |
| `icons.js` | One family of line icons as path data |

## Use

Install a tagged version from its tarball. It needs no git, so it also works in slim Docker
images and on Railway:

```bash
npm install -D https://codeload.github.com/Kaldeshara/dance-ui/tar.gz/refs/tags/v0.1.0
```

```css
@import 'tailwindcss';
@import 'dance-ui/theme.css';
@import 'dance-ui/components.css'; /* optional */

@theme {
	--font-sans: 'Archivo Variable', ui-sans-serif, system-ui, sans-serif;
}
```

Change the values here, tag a version, then bump the tag in each app.

## License

[MIT](LICENSE)
