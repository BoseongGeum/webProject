import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import AuraGenLogo from "../images/team1/AuraGenLogo-black.svg";
import {Link} from "react-router-dom";

const AuraGenProductInfo: React.FC = () => {
    return (
        <div className="w-full min-h-screen font-bold py-20 mt-8">

            <div className="max-w-7xl mx-auto px-4 lg:px-0 mb-4">
                <AnimatePresence>
                    <motion.img
                        src={ AuraGenLogo }
                        alt={ "AuraGenLogo" }
                        className="h-20 object-contain"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    />
                </AnimatePresence>
            </div>

            <section className="py-20 bg-white">
                <div className="container mx-auto text-center">
                    <img
                        src="/images/team1/AuraGen/size.jpg"
                        alt="size"
                        className="mx-auto w-4/5 h-auto"
                    />

                    <div className="mt-10 text-left max-w-4xl mx-auto">
                        <h3 className="text-3xl font-semibold italic text-center mb-6">
                            Because Size Matters!
                        </h3>

                        <p className="text-gray-700 text-lg mb-6">
                            Traditional standby generators are both heavy and bulky; most 20kW
                            units weigh in excess of 350 pounds (approximately the same weight
                            as an adult male African lion) and occupy a footprint of 3-4 feet in
                            length. Mobile versions are even heavier and generally must be towed
                            to location on cumbersome trailer systems. Additionally, traditional
                            generators (both standby and mobile) require sizable amounts of
                            separate fuel.
                        </p>

                        <p className="text-gray-700 text-lg">
                            In comparison, the equivalent <strong>AuraGen®</strong> weighs{" "}
                            <strong>less than 96 pounds</strong> and is just approximately{" "}
                            <strong>2 feet in diameter</strong>. In fact, in most cases, the
                            AuraGen® is small enough to fit under the hood of a vehicle. Unlike
                            traditional systems, because the AuraGen® is integrated directly
                            into the vehicle, no separate trailer is necessary. Similarly,
                            because the AuraGen® is fueled by the vehicle’s own standard fuel
                            tank, no separate fuel is needed. The AuraGen's small size and light
                            weight therefore translates into decreased fuel consumption and
                            increased maneuverability when compared with traditional power
                            solutions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section py-8 md:py-12 xl:py-16 bg-gray-900">
                <div className="container mx-auto items-center justify-center">
                    <div className="flex flex-col md:flex-row gap-x-12"> {/* gap-x-12 추가하여 간격 설정 */}

                        <div className="md:w-1/2 md:order-1 text-white text-justify"> {/* 텍스트 영역의 최대 너비 설정 */}
                            <h3 className="text-left text-white mb-8 text-3xl font-bold">Science at Work</h3>
                            <p className="mb-6 text-gray-400">
                                The AuraGen is a pancake-shaped axial induction machine consisting of a solid cast rotor sandwiched between
                                two symmetric stators. A proprietary control system supplies current to the stators that, in turn, creates a
                                rotating magnetic field that induces electric currents in the conducting portion of the rotor. The mechanical
                                rotation of the rotor creates a magnetic field that induces current back into the stators. These output currents
                                are used in combination with the AuraGen's sophisticated control system to generate output power.
                            </p>
                            <h3 className="mt-6 text-3xl text-left font-bold">Common Applications</h3>

                            <div className="space-y-4 mt-4">
                                <div className="flex items-center">
                                    <span className="w-1/5 text-center material-icons mr-3">Military</span>
                                    <p className="w-4/5 text-gray-400">The AuraGen is a proven technology for land, air, and sea military applications.</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-1/5 text-center material-icons mr-3">Refrigeration</span>
                                    <p className="w-4/5 text-gray-400">The AuraGen offers an all-electric transport refrigeration solution that saves fuel and reduces harmful emissions.</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-1/5 text-center material-icons mr-3">Emergency Response</span>
                                    <p className="w-4/5 text-gray-400">The AuraGen delivers reliable mobile power to first responders and law enforcement when and where they need it most.</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:order-2 mb-12 md:mb-0">
                            <figure className="mb-4">
                                <img
                                    src="/images/team1/AuraGen/cutout.gif"
                                    alt="AuraGen"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-whisper py-16 md:py-24">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-semibold mb-4">Configurations</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Pricing Table 1 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <div className="pricing-object text-4xl font-bold text-primary mb-4">
                                    <span className="price">5</span>
                                    <span className="text-sm">kW</span>
                                </div>
                                <div className="divider-circle mb-4"></div>
                                <ul className="list-none text-gray-700 mb-4">
                                    <li>46 lbs. (20.87 kg)</li>
                                </ul>
                                <img src="/images/team1/AuraGen/measure5kw.gif" alt="dimentions" className="mb-4" />
                            </div>
                        </div>

                        {/* Pricing Table 2 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <div className="pricing-object text-4xl font-bold text-primary mb-4">
                                    <span className="price">10</span>
                                    <span className="text-sm">kW</span>
                                </div>
                                <div className="divider-circle mb-4"></div>
                                <ul className="list-none text-gray-700 mb-4">
                                    <li>55 lbs. (24.95 kg)</li>
                                </ul>
                                <img src="/images/team1/AuraGen/measure8kw.gif" alt="dimentions" className="mb-4" />
                            </div>
                        </div>

                        {/* Pricing Table 3 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <div className="pricing-object text-4xl font-bold text-primary mb-4">
                                    <span className="price">15</span>
                                    <span className="text-sm">kW</span>
                                </div>
                                <div className="divider-circle mb-4"></div>
                                <ul className="list-none text-gray-700 mb-4">
                                    <li>76.5 lbs. (34.70 kg)</li>
                                </ul>
                                <img src="/images/team1/AuraGen/measure15kw.gif" alt="dimentions" className="mb-4" />
                            </div>
                        </div>

                        {/* Pricing Table 4 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <div className="pricing-object text-4xl font-bold text-primary mb-4">
                                    <span className="price">20</span>
                                    <span className="text-sm">kW</span>
                                </div>
                                <div className="divider-circle mb-4"></div>
                                <ul className="list-none text-gray-700 mb-4">
                                    <li>95.25 lbs. (43.21 kg)</li>
                                </ul>
                                <img src="/images/team1/AuraGen/measure20kw.gif" alt="dimentions" className="mb-4" />
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8 text-sm text-gray-600">
                        Weight and dimensions may vary depending on configurations and manufacturing variability.
                    </div>
                </div>
            </section>

            <div className="w-full flex items-center justify-between max-w-7xl mx-auto px-4 lg:px-0 mt-12">
                {/* "더 보기" 버튼 (가운데) */}
                <div className="flex justify-center w-full text-center ml-28">
                    <AnimatePresence>
                        <motion.a
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            href="https://www.aurasystems.com/auragen.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="bg-red-700 text-white py-2 px-6 rounded-full text-lg font-bold hover:bg-red-800">
                                더 보기
                            </button>
                        </motion.a>
                    </AnimatePresence>
                </div>

                {/* "제품문의" 버튼 (오른쪽) */}
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="w-32 px-2 py-1 border-2 border-red-700 bg-red-700 text-white hover:bg-red-800 rounded-none text-lg text-center flex items-center justify-center"
                    >
                        <Link
                            to={"/team1/auraGenManagerInfo"}
                            className="w-full h-full flex items-center justify-center"
                        >
                            제품문의
                        </Link>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>



);
};

export default AuraGenProductInfo;
