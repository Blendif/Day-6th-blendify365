module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
@tailwind base;
@tailwind components;
@tailwind utilities;

.glass-card {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.kinetic-text {
  animation: kinetic-text 2s ease-in-out infinite;
}

@keyframes kinetic-text {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

.neumorphic-shadow {
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
}
.neumorphic-button {
  background: #e0e0e0;
  border-radius: 10px;
  padding: 10px 20px;
  box-shadow: 5px 5px 10px #bcbcbc, -5px -5px 10px #ffffff;
}

