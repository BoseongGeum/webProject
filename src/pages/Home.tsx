import { Link } from "react-router-dom";
import topImage from "../images/main/top.jpeg"; // 상단 이미지
import bottomImage from "../images/main/bottom.jpeg"; // 하단 이미지

export default function Home() {
    return (
        <div className="h-screen flex flex-col">
            {/* 상단 (이미지 + 텍스트) */}
            <div className="h-1/4 relative">
                <img
                    src={topImage}
                    alt="상단 이미지"
                    className="w-full h-full object-cover"
                />

                {/* 🔥 어두운 오버레이 추가 */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                {/* 텍스트 컨텐츠 */}
                <div className="absolute inset-0 flex flex-col justify-center text-white p-10">
                    {/* 작은 타이틀 */}
                    <div className="text-lg mb-2 animate-fadeInLeft font-bold">
                        Welcome to our CBOL corporation
                    </div>

                    {/* 메인 제목 */}
                    <h2 className="text-4xl font-bold animate-fadeInLeft delay-500">
                        <span className="text-yellow-300">Multi-faceted company</span>
                    </h2>

                    {/* 설명 텍스트 */}
                    <p className="mt-4 text-lg animate-fadeInLeft delay-700">
                        that supplies products to a wide range of industries including <br />
                        Aerospace, Defense, Space, Energy, Industrial, and Electronics.
                    </p>
                </div>
            </div>

            {/* 가운데 (블록) */}
            <div className="h-2/4 flex">
                <Link
                    to="/team1"
                    className="w-1/2 bg-blue-50 flex justify-center items-center cursor-pointer hover:bg-blue-100 transition"
                >
                    <p className="text-4xl text-center text-blue-300 font-bold leading-relaxed">
                        Defense Business <br />
                        미국 본사 <br />
                        Exclusive 독점 제품
                    </p>
                </Link>
                <Link
                    to="/team2"
                    className="w-1/2 bg-blue-50 flex justify-center items-center cursor-pointer hover:bg-blue-100 transition"
                >
                    <p className="text-4xl text-center text-blue-300 font-bold leading-relaxed">
                        Global Sourcing & <br />
                        Trading Business <br />
                        한국연락사무소
                    </p>
                </Link>
            </div>

            {/* 하단 (이미지 + 텍스트) */}
            <div className="h-1/4 relative">
                <img
                    src={bottomImage}
                    alt="하단 이미지"
                    className="w-full h-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                {/* 텍스트 (relative 안에서 absolute 배치) */}
                <div className="absolute inset-0 flex flex-col justify-center items-end text-white p-10">
                    <h2 className="text-4xl font-bold">
                        Our <span className="text-yellow-300">worldwide network</span>
                    </h2>
                    <p className="mt-4 text-right text-lg">
                        of manufacturers and suppliers enables us to provide high quality <br />
                        components, assemblies, raw materials, chemicals, OEM and <br />
                        hard-to-find parts.
                    </p>
                </div>
            </div>
        </div>
    );
}
