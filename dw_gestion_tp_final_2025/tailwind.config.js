/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"  // Escanea todos los templates
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",  // Azul base
        secondary: "#9333EA", // Violeta
        accent: "#F59E0B",   // Amarillo
        success: "#10B981",  // Verde
        warning: "#FBBF24",  // Amarillo claro
        danger: "#EF4444",   // Rojo
      },
    },
  },
  plugins: [],
}