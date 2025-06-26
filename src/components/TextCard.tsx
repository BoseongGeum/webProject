import React, { useRef, useEffect } from 'react';

export interface TextCardProps {
    children: React.ReactNode;
    className?: string;
    maskText?: string;
    fontFamily?: string;
    /** 텍스트 크기 (0~1 비율, objectBoundingBox 기준) */
    fontSize?: number;
    /** 텍스트 굵기 (SVG font-weight) */
    fontWeight?: string | number;
    /** 자간 (SVG letter-spacing) */
    letterSpacing?: string | number;
    /** 윤곽선 두께 (SVG stroke-width, 비율) */
    strokeWidth?: number;
    /** 세로 스케일 (1 = 원본, >1 = 세로 확대) */
    verticalScale?: number;
    /** Tilt 애니메이션: 최대 회전 각도(deg) */
    maxTilt?: number;
    /** Tilt 애니메이션: 카드 최대 이동(px) */
    maxTranslate?: number;
    /** Tilt 애니메이션: 이미지 내부 이동(px) */
    maxImageTranslate?: number;
    /** Tilt 비활성화 */
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
                                               maxTilt = 1,
                                               maxTranslate = 15,
                                               maxImageTranslate = 30,
                                               disabled = false,
                                           }) => {
    const maskId = `text-mask-${maskText.replace(/\s+/g, '-').toLowerCase()}`;
    const cardRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (disabled) return;
        const card = cardRef.current;
        const content = contentRef.current;
        if (!card || !content) return;

        let frame: number;
        let last = performance.now();
        let moved = false;
        const dur = 1000;
        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
        const easeOut = (t: number) => 1 - (1 - t) * (1 - t);

        let cx = 0, cy = 0, crx = 0, cry = 0;
        let sx = 0, sy = 0, srx = 0, sry = 0;
        let tx = 0, ty = 0, trx = 0, try_ = 0;
        let prog = 1, iprog = 1;
        let ix = 0, iy = 0, six = 0, siy = 0, tix = 0, tiy = 0;

        const animate = (now: number) => {
            const dt = now - last;
            last = now;
            if (moved) {
                prog = Math.min(prog + dt / dur, 1);
                iprog = Math.min(iprog + dt / dur, 1);
                const e = easeOut(prog);
                const ie = easeOut(iprog);
                cx = lerp(sx, tx, e);
                cy = lerp(sy, ty, e);
                crx = lerp(srx, trx, e);
                cry = lerp(sry, try_, e);
                ix = lerp(six, tix, ie);
                iy = lerp(siy, tiy, ie);
            }
            card.style.transform = `perspective(1000px) rotateX(${crx}deg) rotateY(${cry}deg) translateX(${cx}px) translateY(${cy}px)`;
            content.style.transform = `translateX(${ix}px) translateY(${iy}px)`;
            frame = requestAnimationFrame(animate);
        };

        const onMove = (e: MouseEvent) => {
            const { innerWidth: w, innerHeight: h } = window;
            const ox = (e.clientX - w/2) / (w/2);
            const oy = (e.clientY - h/2) / (h/2);
            const nx = ox * maxTranslate;
            const ny = -oy * maxTranslate;
            const nrx = -oy * maxTilt;
            const nry = ox * maxTilt;
            sx = cx; sy = cy; srx = crx; sry = cry;
            tx = nx; ty = ny; trx = nrx; try_ = nry;
            six = ix; siy = iy;
            tix = ox * maxImageTranslate; tiy = -oy * maxImageTranslate;
            prog = 0; iprog = 0; moved = true;
        };

        window.addEventListener('mousemove', onMove);
        frame = requestAnimationFrame(animate);
        return () => {
            window.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(frame);
        };
    }, [maxTilt, maxTranslate, maxImageTranslate, disabled]);

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
                ref={cardRef}
                className={`relative overflow-hidden will-change-transform ${className}`}
                style={{
                    mask: `url(#${maskId}) no-repeat center/cover`,
                    WebkitMask: `url(#${maskId}) no-repeat center/cover`,
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskSize: 'cover',
                    WebkitMaskSize: 'cover',
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
