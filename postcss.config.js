module.exports = {
  plugins: [
    // Tailwind CSS for styling
    require("tailwindcss"),

    // Autoprefixer for adding vendor prefixes
    require("autoprefixer"),

    // Production-only plugins
    ...(process.env.NODE_ENV === "production"
      ? [
          // PurgeCSS to remove unused CSS
          require("@fullhuman/postcss-purgecss")({
            content: ["./index.html", "./src/**/*.{html,css,js}"], // Recursively include files in `src`
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: {
              standard: [],
              keyframes: [], // Preserve keyframes if needed
              deep: [],
            },
          }),

          // CSSNano for minifying CSS
          require("cssnano")({
            preset: "default",
          }),
        ]
      : []),
  ],
};
