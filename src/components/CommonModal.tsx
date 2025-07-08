import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import Lenis from '@studio-freight/lenis';
import {AnimatePresence, motion} from 'framer-motion';

interface CommonModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const pageVariants = {
    initial: { y: "100%", rotate: 5 },
    animate: {
        y: "0%",
        rotate: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
        y: "100%",
        rotate: 5,
        transition: { duration: 0.6, ease: "easeInOut" },
    },
};

const CommonModal: React.FC<CommonModalProps> = ({ isOpen, onClose, title, children }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Handle native scroll to show/hide navbar
    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;
        const handleScroll = () => {
            const currentY = el.scrollTop;
            if (currentY > lastScrollY && currentY > 100) setShowNavbar(false);
            else setShowNavbar(true);
            setLastScrollY(currentY);
        };
        el.addEventListener('scroll', handleScroll);
        return () => el.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Initialize Lenis for smooth scrolling inside modal
    useEffect(() => {
        if (!isOpen || !contentRef.current) return;

        // Reset scroll to top on open
        contentRef.current.scrollTo({ top: 0 });

        const lenisModal = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            syncTouch: true,
            wrapper: contentRef.current,
        });

        function raf(time: number) {
            lenisModal.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenisModal.destroy();
        };
    }, [isOpen]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="fixed inset-0 z-30 bg-[#F0EEEB] pt-8"
                >
                    <div className="relative w-full h-full flex flex-col">
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-10 right-4 text-gray-600 hover:text-gray-800"
                        >
                            <X size={24} />
                        </button>

                        {/* Title Bar (can be the Navbar) */}
                        {title && (
                            <div
                                className={`sticky top-0 z-10 bg-white transition-transform duration-300 ${
                                    showNavbar ? 'translate-y-0' : '-translate-y-full'
                                }`}
                            >
                                <h2 className="p-4 text-lg font-semibold">{title}</h2>
                            </div>
                        )}

                        {/* Modal Content Container */}
                        <div
                            ref={contentRef}
                            className="flex-1 overflow-hidden"
                        >
                            {children}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default CommonModal;
