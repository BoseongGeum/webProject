import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StickybarProps {
    title: string;
    topOffset: number;
}

export default function Stickybar({ title, topOffset }: StickybarProps) {
    const prevScrollYRef = useRef<number>(0);
    const [scrollDir, setScrollDir] = useState<'down' | 'up'>('down');

    useEffect(() => {
        prevScrollYRef.current = window.scrollY;
        const handleScroll = () => {
            const currentY = window.scrollY;
            setScrollDir(currentY > prevScrollYRef.current ? 'down' : 'up');
            prevScrollYRef.current = currentY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const exitY = scrollDir === 'down' ? '-100%' : '100%';
    const hiddenY = scrollDir === 'down' ? '100%' : '-100%';

    const containerVariants = {
        hidden: { transition: { staggerChildren: 0, staggerDirection: 1 } },
        visible: { transition: { staggerChildren: 0.06, delayChildren: 0 } },
        exit: { transition: { staggerChildren: 0.06, staggerDirection: 1 } },
    };

    const letterVariants = {
        hidden: { y: hiddenY },
        visible: { y: '0%', transition: { duration: 0.4, ease: 'easeOut' } },
        exit: { y: exitY, transition: { duration: 0.4, ease: 'easeOut' } },
    };

    return (
        <motion.div
            className="sticky z-30 bg-[#F0EEEB] text-5xl font-bold"
            animate={{ top: topOffset }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ top: topOffset }}
        >
            <div
                className="relative bg-[#F0EEEB] w-full px-6 py-1 flex items-center sm:px-10 overflow-hidden"
                style={{
                    borderTop: '1px solid transparent',
                    borderBottom: '1px solid transparent',
                    borderImageSource: 'repeating-linear-gradient(to right, #000 0 4px, transparent 0px 16px)',
                    borderImageSlice: 1,
                    minHeight: '120px',
                }}
            >
                <AnimatePresence mode="sync" initial={false}>
                    <motion.h2
                        key={title}
                        className="absolute left-8 top-1/2 -translate-y-1/2 scale-y-[1.5] text-[90px] text-red-950 leading-tight font-sans font-extrabold tracking-tighter flex overflow-hidden w-max"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {title.split("").map((ch, i) => (
                            <motion.span
                                key={`${ch}-${i}`}
                                variants={letterVariants}
                                style={{ display: 'inline-block' }}
                            >
                                {ch}
                            </motion.span>
                        ))}
                    </motion.h2>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
