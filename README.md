# Colorazzo — color palette generator

An interactive web tool for generating consistent color palettes from a single base color. Create 10-step palettes (50–900), preview and copy HEX values, and export palettes to JSON.

Live: https://colorazzo.netlify.app

---

## Key features

- Generate a 10-shade palette (50–900) from one base color
- Three methods:
  - Default — a custom, one-of-a-kind algorithm created specifically for a DewXIT co‑authored project
  - HSL — lightness-based steps in the HSL space
  - LAB — perceptual blends in the LAB space
- Click any swatch to copy its HEX value
- Export the entire palette to a JSON file

## How to use

1. Pick a base color

- Use the color picker or paste a HEX value (e.g. #3498db)

2. Choose a method

- Default (custom DewXIT algorithm), HSL, or LAB

3. Generate

- Click “Generate Palette” to create the 10 shades (50–900)

4. Copy colors

- Click any swatch; the HEX is copied to the clipboard and you’ll see a short “Copied” hint

5. Export

- Click “Export Palette” to download palette.json

### Output format

The exported file is an array of objects with shade and color (HEX):

```json
[
  { "shade": "50", "color": "#f2f8ff" },
  { "shade": "100", "color": "#d9eaff" },
  { "shade": "200", "color": "#bcd8ff" },
  { "shade": "300", "color": "#9ec6ff" },
  { "shade": "400", "color": "#7fb3ff" },
  { "shade": "500", "color": "#3498db" },
  { "shade": "600", "color": "#2b7fb6" },
  { "shade": "700", "color": "#236892" },
  { "shade": "800", "color": "#1b516f" },
  { "shade": "900", "color": "#153f57" }
]
```

(Exact values depend on the chosen method and base color.)

## Getting started locally

- Install dependencies: `npm install`
- Dev server: `npm run dev` (http://localhost:3000)
- Build and run: `npm run build` then `npm start`
- Tests: `npm test`
- Lint: `npm run lint`

## License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE.md) file for details.
