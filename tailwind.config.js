/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'radix-gradient': `linear-gradient(
          0deg,
          hsl(240deg 6% 7%) 0%,
          hsl(240deg 14% 7%) 13%,
          hsl(233deg 21% 7%) 25%,
          hsl(226deg 33% 8%) 37%,
          hsl(221deg 40% 8%) 50%,
          hsl(222deg 43% 10%) 63%,
          hsl(223deg 46% 13%) 75%,
          hsl(223deg 48% 16%) 87%,
          hsl(224deg 52% 19%) 100%
        )`,
        'radix-gradient-2': `linear-gradient(
          0deg,
          hsl(240deg 6% 7%) 0%,
          hsl(225deg 11% 7%) 8%,
          hsl(240deg 14% 7%) 16%,
          hsl(231deg 19% 7%) 26%,
          hsl(233deg 23% 8%) 36%,
          hsl(229deg 28% 8%) 45%,
          hsl(226deg 33% 8%) 54%,
          hsl(220deg 38% 8%) 63%,
          hsl(223deg 41% 9%) 70%,
          hsl(223deg 41% 10%) 77%,
          hsl(222deg 45% 11%) 83%,
          hsl(222deg 45% 13%) 88%,
          hsl(223deg 48% 14%) 92%,
          hsl(223deg 48% 16%) 95%,
          hsl(224deg 50% 17%) 98%,
          hsl(224deg 52% 19%) 100%
        )`
      },
    },
  },
  plugins: [],
}

