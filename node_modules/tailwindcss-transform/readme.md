# Tailwind CSS Transform Plugin

This plugin adds utilities to use transforms with Tailwind CSS.

## Installation

Add this plugin to your project:

```bash
# Install using npm
npm install --save-dev tailwindcss-transform

# Install using yarn
yarn add -D tailwindcss-transform
```

## Notes

I will be adding support for customizing the existing values as well as for creating classes for `perspective` and `transform` soon-ish. Feel free to open an issue if you need it before I get to it.

## Usage

```js
require('tailwindcss-transform')(['responsive'])
```

```css
.backface-visible { backface-visibility: visible; }
.backface-hidden { backface-visibility: hidden; }

.perspective-top { perspective-origin: top; }
.perspective-right { perspective-origin: right; }
.perspective-bottom { perspective-origin: bottom; }
.perspective-left { perspective-origin: left; }
.perspective-center { perspective-origin: center; }
.perspective-right-top { perspective-origin: right top; }
.perspective-right-bottom { perspective-origin: right bottom; }
.perspective-left-top { perspective-origin: left top; }
.perspective-left-bottom { perspective-origin: left bottom; }

.transform-border { transform-box: border-box; }
.transform-fill { transform-box: fill-box; }
.transform-view { transform-box: view-box; }

.transform-top { transform-origin: top; }
.transform-right { transform-origin: right; }
.transform-bottom { transform-origin: bottom; }
.transform-left { transform-origin: left; }
.transform-center { transform-origin: center; }
.transform-right-top { transform-origin: right top; }
.transform-right-bottom { transform-origin: right bottom; }
.transform-left-top { transform-origin: left top; }
.transform-left-bottom { transform-origin: left bottom; }

.transform-flat { transform-style: flat; }
.transform-preserve { transform-style: preserve-3d; }
```
