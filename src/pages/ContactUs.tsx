import React, {useEffect, useState} from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Stickybar from "../components/Stickybar";
import {ContactSection} from "../components/ContactSection";

// 각 줄 애니메이션
const lineVariants = {
    hidden: {
        y: "20%",
        opacity: 0,
    },
    visible: {
        y: "0%",
        opacity: 1,
        transition: { duration: 0.6, ease: "easeInOut" },
    },
};

// 전체 컨테이너에서 순차 재생
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const ContactUs: React.FC = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <main className="min-h-screen bg-[#F0EEEB] relative">
            <Stickybar title={"CONTACT"} subtitle={"문의하기"} topOffset={showNavbar ? 55 : 0} align={"center"} />
            <div className="w-full h-full text-black font-bold pt-24 pb-24 px-16">
                <motion.div
                    className="w-full mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="text-left mb-8">
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                            variants={lineVariants}
                        >
                            CONTACT <span className="text-red-800">US</span>
                        </motion.h2>
                    </motion.div>

                    <motion.div className="text-left mb-12">
                        <motion.p
                            className="text-gray-500 text-base sm:text-lg"
                            variants={lineVariants}
                        >
                            궁금한 사항이나 문의가 있으시면 언제든지 연락주세요.
                        </motion.p>
                    </motion.div>

                    <motion.div className="text-left mb-8" variants={lineVariants}>
                        <ContactSection
                            imageSrc="/images/contactUs/koreaOfficeImage.png"
                            name="한국 연락사무소"
                            mailingAddress="서울시 중구 정동길 35, 두비빌딩 403호"
                            phone="02-318-5510"
                            fax="02-318-0550"
                            email="info@cbol.com"
                            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.535524122019!2d126.96973547669083!3d37.566005572038826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca28c525e6ea7%3A0x9d3bd3623a642835!2z65GQ67mE67mM65Sp!5e0!3m2!1sko!2skr!4v1747612919622!5m2!1sko!2skr"
                        />
                    </motion.div>
                    <motion.div className="text-left mb-8" variants={lineVariants}>
                        <ContactSection
                            imageSrc="/images/contactUs/HQImage.jpg"
                            name="본사"
                            mailingAddress="19850 Plummer St. Chatsworth, CA 91311"
                            phone="818-704-8200"
                            fax="818-704-4336"
                            email="info@cbol.com"
                            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.2598745885157!2d-118.56752208477998!3d34.24191188055478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29b7033afd367%3A0xa8be6d728e186243!2s19850%20Plummer%20St%2C%20Chatsworth%2C%20CA%2091311!5e0!3m2!1sen!2sus!4v1603896825281!5m2!1sen!2sus"
                        />
                    </motion.div>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
};

export default ContactUs;
