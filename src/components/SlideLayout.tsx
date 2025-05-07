import { motion } from "framer-motion";

type SlideLayoutProps = {
    bgImage: string;
    title: string;
    description: string;
    rightImages: string[];
    layout?: "default" | "zigzag";
};

export const SlideLayout = ({
                                bgImage,
                                title,
                                description,
                                rightImages,
                                layout = "default",
                            }: SlideLayoutProps) => {
    const isGridLayout = rightImages.length > 1;

    return (
        <div className="w-screen h-screen flex overflow-hidden">
            {/* Left Side */}
            <div
                className="w-1/2 h-full relative bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-black/80 flex items-center px-12">
                    <motion.div
                        className="text-white text-left max-w-[80%] ml-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-2">
                            {title
                                .split("\n")
                                .filter(line => line.trim() !== "")
                                .map((line, i) => (
                                    <h1
                                        key={i}
                                        className={`text-5xl font-extrabold tracking-tight ${i === 1 ? "pl-4" : ""}`}
                                    >
                                        {line}
                                    </h1>
                                ))}
                        </div>
                        <div className="mt-20 space-y-2 pl-4">
                            {description
                                .split("\n")
                                .filter(line => line.trim() !== "")
                                .map((line, i) => (
                                    <motion.p
                                        key={i}
                                        className="text-lg leading-snug"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + i * 0.3, duration: 0.6 }}
                                    >
                                        {line}
                                    </motion.p>
                                ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Right Side */}
            <div className="w-1/2 h-full overflow-hidden">
                {layout === "zigzag" ? (
                    <motion.div
                        className="flex flex-col justify-between w-full h-full p-8 pt-20"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {rightImages.map((src, index) => (
                            <motion.div
                                key={index}
                                className={`w-[48%] h-[calc(100%/7-4px)] ${
                                    index % 2 === 0 ? "self-start" : "self-end"
                                }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.3 + index * 0.1,
                                    duration: 0.6,
                                    ease: "easeOut",
                                }}
                            >
                                <img
                                    src={src}
                                    alt={`ourService${index}`}
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : isGridLayout ? (
                    <motion.div
                        className="grid grid-cols-2 grid-rows-4 gap-4 w-full h-full items-center justify-center p-4 pt-20"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {rightImages.map((src, index) => (
                            <motion.img
                                key={index}
                                src={src}
                                alt={`koreaOffice${index}`}
                                className="w-full h-full object-contain"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.5 + index * 0.15, duration: 0.6, ease: "easeOut" }}
                            />
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${rightImages[0]})` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                )}
            </div>
        </div>
    );
};
