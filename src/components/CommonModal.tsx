import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import {AnimatePresence, motion} from 'framer-motion';

interface CommonModalProps {
    isOpen: boolean;
    showStickyBar?: boolean;
    showNavBar?: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const pageVariants = {
    initial: { y: "100%" },
    animate: {
        y: "0%",
        rotate: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
        y: "100%",
        transition: { duration: 0.6, ease: "easeInOut" },
    },
};

const CommonModal: React.FC<CommonModalProps> = ({ isOpen, showStickyBar, showNavBar, onClose, children }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Handle native scroll to show/hide navbar
    // useEffect(() => {
    //     const el = contentRef.current;
    //     if (!el) return;
    //     const handleScroll = () => {
    //         const currentY = el.scrollTop;
    //         if (currentY > lastScrollY && currentY > 100) setShowNavbar(false);
    //         else setShowNavbar(true);
    //         setLastScrollY(currentY);
    //     };
    //     el.addEventListener('scroll', handleScroll);
    //     return () => el.removeEventListener('scroll', handleScroll);
    // }, [lastScrollY]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={`fixed inset-0 z-30 bg-[#F0EEEB]
                        ${ showNavBar && showStickyBar ? 'top-40' : 
                        showStickyBar ? 'top-[108px]' : 
                            showNavBar ? 'top-10' : '' }`}
                >
                    <div className="relative w-full h-full flex flex-col">
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className={`absolute duration-200 right-4 pt-8 text-red-950 hover:text-gray-400`}
                        >
                            <X size={24} />
                        </button>

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
