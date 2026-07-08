/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',       // primary background (confirmed #000 from live CSS)
        ink2: '#0c0c0c',      // secondary panel background
        paper: '#ffffff',     // primary text (color_36 in the live site)
        muted: '#cecece',     // secondary/grey text (color_43)
        dim: '#404040',       // dim heading text (color_14)
        line: '#2a2a2a',      // hairline dividers
        rose: '#A26060',      // discography highlight (exact hex from live CSS)
        skyline: '#8fd2e0',   // pale cyan links (contact info)
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],       // headings (font_2..font_6 in live CSS)
        body: ['Poppins', 'sans-serif'],              // body copy (font_7..font_10 in live CSS)
        serif: ['"Playfair Display"', 'serif'],       // discography/contacts/blog serif accents
      },
    },
  },
  plugins: [],
}
