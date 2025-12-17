import React from 'react';

interface BlendedPhotoProps {
  imageUrl: string;
  alt: string;
  blobVariant?: 1 | 2 | 3 | 4 | 5;
  accentColor?: string;
  backgroundColor?: string;
  position?: 'left' | 'right';
}

const BlendedPhoto: React.FC<BlendedPhotoProps> = ({
  imageUrl,
  alt,
  blobVariant = 1,
  accentColor = '#b8860b',
  backgroundColor = '#faf8f5',
  position = 'right',
}) => {
  const clipPaths = {
    1: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
    2: 'ellipse(45% 50% at 50% 50%)',
    3: 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 80%, 0% 20%)',
    4: 'polygon(0% 0%, 75% 0%, 100% 20%, 100% 80%, 75% 100%, 0% 100%)',
    5: 'inset(0)',
  };

  const accentPositions = {
    left: {
      blob: 'right-4 top-8',
      line: 'left-0 top-1/4',
    },
    right: {
      blob: 'left-4 top-8',
      line: 'right-0 top-1/4',
    },
  };

  const gradientDirections = {
    left: 'to left',
    right: 'to right',
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div
        className={`absolute w-32 h-32 rounded-full -z-10 ${accentPositions[position].blob}`}
        style={{
          backgroundColor: accentColor,
          opacity: 0.15,
          filter: 'blur(20px)',
        }}
      />

      <div
        className={`absolute w-px h-24 -z-10 ${accentPositions[position].line}`}
        style={{
          backgroundColor: accentColor,
          opacity: 0.4,
        }}
      />

      <div className="relative">
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-auto object-cover object-top"
          style={{
            clipPath: clipPaths[blobVariant],
            aspectRatio: '3/4',
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            clipPath: clipPaths[blobVariant],
            background: `linear-gradient(${gradientDirections[position]}, transparent 70%, ${backgroundColor} 100%)`,
          }}
        />
      </div>
    </div>
  );
};

export default BlendedPhoto;
