# Public Assets Folder

Place your logo and other static assets here.

## Logo Files

Place your Salama logo file(s) in this directory. Supported formats:
- PNG (recommended for logos with text)
- SVG (recommended for scalable logos)
- JPG/JPEG

### Recommended Logo File Names:
- `salama-logo.png` - Main logo (default)
- `salama-logo.svg` - SVG version
- `salama-logo-white.png` - White version for dark backgrounds
- `salama-logo-dark.png` - Dark version for light backgrounds

### Usage:
Files placed in `/public` can be referenced in your code as:
- `/salama-logo.png` (starts with `/`)
- The Logo component will automatically use `/salama-logo.png` by default

### Example:
If you place `salama-logo.png` in this folder, it will be accessible at:
`http://localhost:3000/salama-logo.png`
