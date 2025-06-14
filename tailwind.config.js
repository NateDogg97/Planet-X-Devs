/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nebula: {
          black: '#0A0A0B',
          purple: '#6B46C1',
          violet: '#9333EA',
          blue: '#312E81',
          gray: '#1F2937',
          white: '#FAFAFA',
          cyan: '#06B6D4',
          // Add opacity variants for common use cases
          'purple-20': 'rgba(107, 70, 193, 0.2)',
          'purple-30': 'rgba(107, 70, 193, 0.3)',
          'violet-10': 'rgba(147, 51, 234, 0.1)',
          'violet-20': 'rgba(147, 51, 234, 0.2)',
          'violet-30': 'rgba(147, 51, 234, 0.3)',
          'violet-50': 'rgba(147, 51, 234, 0.5)',
        }
      },
      backgroundImage: {
        'gradient-nebula': 'linear-gradient(135deg, #6B46C1, #9333EA, #312E81)',
        'gradient-space': 'linear-gradient(180deg, #0A0A0B, #312E81)',
        'gradient-radial-nebula': 'radial-gradient(circle, rgba(147, 51, 234, 0.1), transparent)',
        'gradient-planet': 'radial-gradient(circle, #9333EA, #312E81)',
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-up': 'floatUp 15s linear infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        orbit: {
          'from': { transform: 'rotate(0deg) translateX(60px) rotate(0deg)' },
          'to': { transform: 'rotate(360deg) translateX(60px) rotate(-360deg)' }
        },
        floatUp: {
          'from': { transform: 'translateY(100vh) scale(0)' },
          'to': { transform: 'translateY(-100vh) scale(1)' }
        }
      },
      boxShadow: {
        'nebula': '0 10px 40px rgba(147, 51, 234, 0.3)',
        'nebula-lg': '0 20px 60px rgba(147, 51, 234, 0.4)',
        'glow': '0 0 30px rgba(147, 51, 234, 0.5)',
      }
    },
  },
  plugins: [],
}