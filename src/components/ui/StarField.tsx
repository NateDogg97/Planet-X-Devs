interface Star {
  id: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
}

const PREDETERMINED_STARS: Star[] = [
  { id: 0, top: 5.2, left: 12.3, delay: 0.2, duration: 3.5 },
  { id: 1, top: 15.8, left: 8.7, delay: 1.4, duration: 4.2 },
  { id: 2, top: 22.1, left: 45.6, delay: 0.8, duration: 3.8 },
  { id: 3, top: 8.9, left: 67.2, delay: 2.1, duration: 4.5 },
  { id: 4, top: 35.4, left: 23.8, delay: 0.5, duration: 3.2 },
  { id: 5, top: 42.7, left: 78.1, delay: 1.9, duration: 4.8 },
  { id: 6, top: 18.3, left: 34.5, delay: 3.2, duration: 3.6 },
  { id: 7, top: 55.6, left: 15.9, delay: 0.9, duration: 4.1 },
  { id: 8, top: 67.2, left: 56.3, delay: 2.4, duration: 3.9 },
  { id: 9, top: 12.8, left: 89.4, delay: 1.2, duration: 4.3 },
  { id: 10, top: 78.5, left: 42.1, delay: 0.3, duration: 3.7 },
  { id: 11, top: 91.2, left: 27.6, delay: 1.8, duration: 4.6 },
  { id: 12, top: 33.9, left: 91.8, delay: 2.7, duration: 3.4 },
  { id: 13, top: 4.6, left: 71.2, delay: 0.6, duration: 4.9 },
  { id: 14, top: 25.3, left: 5.8, delay: 1.5, duration: 3.3 },
  { id: 15, top: 48.7, left: 38.4, delay: 2.9, duration: 4.4 },
  { id: 16, top: 61.4, left: 82.9, delay: 0.1, duration: 3.1 },
  { id: 17, top: 87.9, left: 9.3, delay: 1.7, duration: 4.7 },
  { id: 18, top: 14.2, left: 52.7, delay: 2.3, duration: 3.5 },
  { id: 19, top: 72.8, left: 65.1, delay: 0.7, duration: 4.2 },
  { id: 20, top: 39.5, left: 19.6, delay: 1.1, duration: 3.8 },
  { id: 21, top: 6.1, left: 94.2, delay: 2.6, duration: 4.5 },
  { id: 22, top: 52.4, left: 48.9, delay: 0.4, duration: 3.2 },
  { id: 23, top: 81.7, left: 73.5, delay: 1.3, duration: 4.8 },
  { id: 24, top: 29.3, left: 31.2, delay: 2.8, duration: 3.6 },
  { id: 25, top: 94.8, left: 61.7, delay: 0.8, duration: 4.1 },
  { id: 26, top: 17.6, left: 86.3, delay: 1.6, duration: 3.9 },
  { id: 27, top: 63.2, left: 12.8, delay: 2.2, duration: 4.3 },
  { id: 28, top: 45.9, left: 69.4, delay: 0.2, duration: 3.7 },
  { id: 29, top: 76.4, left: 24.9, delay: 1.9, duration: 4.6 },
  { id: 30, top: 9.7, left: 41.5, delay: 2.5, duration: 3.4 },
  { id: 31, top: 58.3, left: 96.1, delay: 0.5, duration: 4.9 },
  { id: 32, top: 36.8, left: 7.4, delay: 1.4, duration: 3.3 },
  { id: 33, top: 84.1, left: 54.8, delay: 2.1, duration: 4.4 },
  { id: 34, top: 21.5, left: 76.2, delay: 0.9, duration: 3.1 },
  { id: 35, top: 69.9, left: 35.7, delay: 1.8, duration: 4.7 },
  { id: 36, top: 2.3, left: 58.1, delay: 2.4, duration: 3.5 },
  { id: 37, top: 47.6, left: 16.4, delay: 0.3, duration: 4.2 },
  { id: 38, top: 92.2, left: 88.9, delay: 1.2, duration: 3.8 },
  { id: 39, top: 11.8, left: 22.3, delay: 2.7, duration: 4.5 },
  { id: 40, top: 74.5, left: 47.8, delay: 0.6, duration: 3.2 },
  { id: 41, top: 26.1, left: 63.2, delay: 1.5, duration: 4.8 },
  { id: 42, top: 54.7, left: 91.6, delay: 2.3, duration: 3.6 },
  { id: 43, top: 88.4, left: 4.1, delay: 0.1, duration: 4.1 },
  { id: 44, top: 31.9, left: 79.5, delay: 1.7, duration: 3.9 },
  { id: 45, top: 66.2, left: 28.9, delay: 2.6, duration: 4.3 },
  { id: 46, top: 13.5, left: 50.2, delay: 0.4, duration: 3.7 },
  { id: 47, top: 79.1, left: 85.7, delay: 1.3, duration: 4.6 },
  { id: 48, top: 41.4, left: 11.3, delay: 2.8, duration: 3.4 },
  { id: 49, top: 96.7, left: 44.6, delay: 0.7, duration: 4.9 }
];

export default function StarField() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {PREDETERMINED_STARS.map((star) => (
        <div
          key={star.id}
          className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle will-change-transform motion-reduce:animate-none"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`
          }}
        />
      ))}
    </div>
  );
}