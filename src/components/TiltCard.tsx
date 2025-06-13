import React, { useRef, useEffect, useState } from 'react';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    maxTilt?: number;
    disabled?: boolean;
    clip?: boolean;
}

const TiltCard: React.FC<TiltCardProps> = ({
                                               children,
                                               className = '',
                                               maxTilt = 5,
                                               disabled = false,
                                               clip = true,
                                           }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (disabled) return;

        const handleMouseMove = (e: MouseEvent) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const offsetX = (e.clientX - centerX) / centerX;
            const offsetY = (e.clientY - centerY) / centerY;

            setTilt({
                x: offsetX * maxTilt,
                y: -offsetY * maxTilt,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [maxTilt, disabled]);

    const maskStyles = clip
        ? {
            WebkitMaskImage: 'url(/masks/blob-mask.svg)',
            maskImage: 'url(/masks/blob-mask.svg)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: '115%',
            maskSize: 'cover',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
        }
        : {};

    return (
        <div
            ref={ref}
            className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
            style={{
                transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                transformStyle: 'preserve-3d',
                ...maskStyles,
            }}
        >
            {children}
        </div>
    );
};

export default TiltCard;