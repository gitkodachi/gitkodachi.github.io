/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./content/**/*.{md,html}",
    "./assets/**/*.{js,css}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d9488', // teal-600
          dark: '#0f766e',    // teal-700
          light: '#14b8a6',   // teal-500
        },
        accent: '#10b981',    // emerald-500
        background: '#f8fafc', // slate-50
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.700'),
            a: { color: theme('colors.teal.600'), '&:hover': { color: theme('colors.teal.700') } },
            strong: { color: theme('colors.slate.900') },
            code: { backgroundColor: theme('colors.slate.100'), padding: '0.2rem 0.4rem', borderRadius: '0.25rem' },
            pre: {
              backgroundColor: theme('colors.slate.100'),
              color: theme('colors.slate.800'),
              borderRadius: '0.375rem',
              padding: '1rem'
            },
            blockquote: { borderLeftColor: theme('colors.teal.500'), color: theme('colors.slate.600') }
          },
        },
        dark: {
          css: {
            color: theme('colors.slate.300'),
            a: { color: theme('colors.teal.400'), '&:hover': { color: theme('colors.teal.300') } },
            strong: { color: theme('colors.white') },
            code: { backgroundColor: theme('colors.slate.800'), color: theme('colors.slate.100') },
            pre: {
              backgroundColor: theme('colors.slate.800'),
              color: theme('colors.slate.100'),
            },
            blockquote: { borderLeftColor: theme('colors.teal.400'), color: theme('colors.slate.400') }
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    ],
}
