module.exports = function (variants) {
  return function ({ addUtilities }) {
    addUtilities(
      {
        // Backface Visibility
        '.backface-visible': { backfaceVisibility: 'visible' },
        '.backface-hidden': { backfaceVisibility: 'hidden' },

        // Perspective
        // Perspective Origin
        '.perspective-top': { perspectiveOrigin: 'top' },
        '.perspective-right': { perspectiveOrigin: 'right' },
        '.perspective-bottom': { perspectiveOrigin: 'bottom' },
        '.perspective-left': { perspectiveOrigin: 'left' },
        '.perspective-center': { perspectiveOrigin: 'center' },

        '.perspective-right-top': { perspectiveOrigin: 'right top' },
        '.perspective-right-bottom': { perspectiveOrigin: 'right bottom' },

        '.perspective-left-top': { perspectiveOrigin: 'left top' },
        '.perspective-left-bottom': { perspectiveOrigin: 'left bottom' },

        // Transform
        // Transform Box
        '.transform-border': { transformBox: 'border-box' },
        '.transform-fill': { transformBox: 'fill-box' },
        '.transform-view': { transformBox: 'view-box' },

        // Transform Origin
        '.transform-top': { transformOrigin: 'top' },
        '.transform-right': { transformOrigin: 'right' },
        '.transform-bottom': { transformOrigin: 'bottom' },
        '.transform-left': { transformOrigin: 'left' },
        '.transform-center': { transformOrigin: 'center' },

        '.transform-right-top': { transformOrigin: 'right top' },
        '.transform-right-bottom': { transformOrigin: 'right bottom' },

        '.transform-left-top': { transformOrigin: 'left top' },
        '.transform-left-bottom': { transformOrigin: 'left bottom' },

        // Transform Style
        '.transform-flat': { transformStyle: 'flat' },
        '.transform-preserve': { transformStyle: 'preserve-3d' },

      },
      variants
    )
  }
}
