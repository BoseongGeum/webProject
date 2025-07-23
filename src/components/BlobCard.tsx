import React, { useRef } from 'react';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    clip?: boolean;
}

const BlobCard: React.FC<TiltCardProps> = ({
                                               children,
                                               className = '',
                                               clip = true,
                                           }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const maskStyles = clip
        ? {
            WebkitMaskImage: 'url(/masks/blob-mask.svg)',
            maskImage: 'url(/masks/blob-mask.svg)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: '200%',
            maskSize: 'cover',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
        }
        : {};

    return (
        <div
            ref={cardRef}
            className={`will-change-transform ${className}`}
            style={{
                transformStyle: 'preserve-3d',
                ...maskStyles,
            }}
        >
            <div className="w-full h-full">
                {children}
            </div>
        </div>
    );
};

export default BlobCard;