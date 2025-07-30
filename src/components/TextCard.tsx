import React, { useRef } from 'react';

export interface TextCardProps {
    children: React.ReactNode;
    className?: string;
    maskText?: string;
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: string | number;
    letterSpacing?: string | number;
    strokeWidth?: number;
    verticalScale?: number;
    maxImageTranslate?: number;
    disabled?: boolean;
}

const TextCard: React.FC<TextCardProps> = ({
                                               children,
                                               className = '',
                                               maskText = 'CBOL',
                                               fontFamily = 'Arial, sans-serif',
                                               fontSize = 0.4,
                                               fontWeight = '900',
                                               letterSpacing = '0',
                                               strokeWidth = 0.02,
                                               verticalScale = 1,
                                               // maxImageTranslate = 30,
                                               // disabled = false,
                                           }) => {
    const maskId = `text-mask-${maskText.replace(/\s+/g, '-').toLowerCase()}`;
    const contentRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     if (disabled) return;
    //     const content = contentRef.current;
    //     if (!content) return;
    //
    //     let frame: number;
    //     let last = performance.now();
    //     let moved = false;
    //     const dur = 1000;
    //     const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    //     const easeOut = (t: number) => 1 - (1 - t) * (1 - t);
    //
    //     let ix = 0, iy = 0, six = 0, siy = 0, tix = 0, tiy = 0;
    //     let iprog = 1;
    //
    //     const animate = (now: number) => {
    //         const dt = now - last;
    //         last = now;
    //         if (moved) {
    //             iprog = Math.min(iprog + dt / dur, 1);
    //             const ie = easeOut(iprog);
    //             ix = lerp(six, tix, ie);
    //             iy = lerp(siy, tiy, ie);
    //         }
    //         content.style.transform = `translateX(${ix}px) translateY(${iy}px)`;
    //         frame = requestAnimationFrame(animate);
    //     };
    //
    //     const onMove = (e: MouseEvent) => {
    //         const { innerWidth: w, innerHeight: h } = window;
    //         const ox = (e.clientX - w / 2) / (w / 2);
    //         const oy = (e.clientY - h / 2) / (h / 2);
    //         six = ix;
    //         siy = iy;
    //         tix = ox * maxImageTranslate;
    //         tiy = -oy * maxImageTranslate;
    //         iprog = 0;
    //         moved = true;
    //     };
    //
    //     window.addEventListener('mousemove', onMove);
    //     frame = requestAnimationFrame(animate);
    //     return () => {
    //         window.removeEventListener('mousemove', onMove);
    //         cancelAnimationFrame(frame);
    //     };
    // }, [maxImageTranslate, disabled]);

    return (
        <>
            <svg width="0" height="0" style={{ position: 'absolute' }} xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <mask id={maskId} maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
                        <rect x="0" y="0" width="1" height="1" fill="black" />
                        <g transform={`translate(0.5,0.5) scale(1,${verticalScale}) translate(-0.5,-0.5)`}>
                            <text
                                x="0.5"
                                y="0.5"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize={fontSize}
                                fontFamily={fontFamily}
                                fontWeight={fontWeight}
                                letterSpacing={letterSpacing}
                                fill="white"
                                stroke="white"
                                strokeWidth={strokeWidth}
                                strokeLinejoin="round"
                            >
                                {maskText}
                            </text>
                        </g>
                    </mask>
                </defs>
            </svg>
            <div
                className={`relative overflow-hidden will-change-transform ${className} pl-[50px]`}
                style={{
                    mask: `url(#${maskId}) no-repeat center/contain`,
                    WebkitMask: `url(#${maskId}) no-repeat center/contain`,
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                }}
            >
                <div ref={contentRef} className="w-full h-full will-change-transform">
                    {children}
                </div>
            </div>
        </>
    );
};

export default TextCard;