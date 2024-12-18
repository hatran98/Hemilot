// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'AlibabaPuHuiTi-2-45-Light' ],
      },
      container: {
        center: true,          // Căn giữa container
        padding: '2rem',       // Padding mặc định (khoảng cách từ lề)
        screens: {
          sm: '100%',          // Kích thước container cho màn hình nhỏ
          md: '768px',         // Kích thước container cho màn hình vừa
          lg: '1024px',        // Kích thước container cho màn hình lớn
          xl: '1280px',        // Kích thước container cho màn hình extra-large
        },
      },
    },
  },
  plugins: [],
}
