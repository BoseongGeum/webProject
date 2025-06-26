import React, { useRef, useEffect } from 'react';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    maxTilt?: number;
    maxTranslate?: number;
    maxImageTranslate?: number;
    disabled?: boolean;
    clip?: boolean;
}

const BlobCard: React.FC<TiltCardProps> = ({
                                               children,
                                               className = '',
                                               maxTilt = 1,
                                               maxTranslate = 15,
                                               maxImageTranslate = 30,
                                               disabled = false,
                                               clip = true,
                                           }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const imageLayerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (disabled) return;

        const card = cardRef.current;
        const imageLayer = imageLayerRef.current;
        if (!card || !imageLayer) return;

        let animationFrame: number;
        let lastTime = performance.now();
        let hasMoved = false;

        const duration = 1000; // ms
        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
        const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);

        // 카드 위치
        let currentX = 0, currentY = 0, currentRotX = 0, currentRotY = 0;
        let startX = 0, startY = 0, startRotX = 0, startRotY = 0;
        let targetX = 0, targetY = 0, targetRotX = 0, targetRotY = 0;
        let progress = 1;

        // 이미지 위치
        let imgX = 0, imgY = 0;
        let startImgX = 0, startImgY = 0;
        let targetImgX = 0, targetImgY = 0;
        let imgProgress = 1;

        const animate = (now: number) => {
            const dt = now - lastTime;
            lastTime = now;

            if (hasMoved) {
                progress = Math.min(progress + dt / duration, 1);
                imgProgress = Math.min(imgProgress + dt / duration, 1);
                const ease = easeOutQuad(progress);
                const imgEase = easeOutQuad(imgProgress);

                currentX = lerp(startX, targetX, ease);
                currentY = lerp(startY, targetY, ease);
                currentRotX = lerp(startRotX, targetRotX, ease);
                currentRotY = lerp(startRotY, targetRotY, ease);

                imgX = lerp(startImgX, targetImgX, imgEase);
                imgY = lerp(startImgY, targetImgY, imgEase);
            }

            card.style.transform = `
        perspective(1000px)
        rotateX(${currentRotX}deg)
        rotateY(${currentRotY}deg)
        translateX(${currentX}px)
        translateY(${currentY}px)
      `;

            imageLayer.style.transform = `
        translateX(${imgX}px)
        translateY(${imgY}px)
      `;

            animationFrame = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const offsetX = (e.clientX - centerX) / centerX;
            const offsetY = (e.clientY - centerY) / centerY;

            const newX = offsetX * maxTranslate;
            const newY = -offsetY * maxTranslate;
            const newRotX = -offsetY * maxTilt;
            const newRotY = offsetX * maxTilt;

            startX = currentX;
            startY = currentY;
            startRotX = currentRotX;
            startRotY = currentRotY;

            targetX = newX;
            targetY = newY;
            targetRotX = newRotX;
            targetRotY = newRotY;

            // 이미지도 같은 easing 사용
            startImgX = imgX;
            startImgY = imgY;
            targetImgX = (offsetX * 1.6) * maxImageTranslate;
            targetImgY = -offsetY * maxImageTranslate;

            progress = 0;
            imgProgress = 0;
            hasMoved = true;
        };

        window.addEventListener('mousemove', handleMouseMove);
        animationFrame = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, [maxTilt, maxTranslate, maxImageTranslate, disabled]);

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
            <div
                ref={imageLayerRef}
                className="tilt-image-layer will-change-transform w-full h-full"
            >
                {children}
            </div>
        </div>
    );
};

export default BlobCard;
