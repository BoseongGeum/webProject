import { useState } from "react";
import PICImage from "../images/team1/PIC.png";
import QuanticEvansImage from "../images/team1/QuanticEvans.png";
import AuraGenImage from "../images/team1/AuraGen.png";

const blocks = [
    {
        id: 1,
        bgImage: PICImage,
        productInfo: "https://picwire.com/Interconnect-Solutions",
        managerInfo: "https://cbol.com/contact.html",
        name: "PIC",
        text: "MIL Standard, FAA 인증\n" +
            "초경량 고성능 케이블\n" +
            "안정적인 전자기기 RF, 영상, 데이터 및 고주파 항공우주용\n" +
            "프리미엄 인터커넥트 케이블", // ✅ 추가된 텍스트
    },
    {
        id: 2,
        bgImage: QuanticEvansImage,
        productInfo:
            "https://d2f6h2rm95zg9t.cloudfront.net/94541529/C_UAS_1_pager_FNL_Feb_12_2024_21226040.pdf",
        managerInfo:
            "https://www.quanticevans.com/distributors?kind=distributor&country=South%20Korea",
        name: "Quantic Evans",
        text: "미국 EVANS 사의 \n" +
            "독자적인 하이브리드 습식 탄탈럼 기술\n" +
            "C-UAS/드론 방어 무기 시스템을 위한 \n" +
            "고전력 고에너지 밀도 캐패시터",
    },
    {
        id: 3,
        bgImage: AuraGenImage,
        productInfo: "https://www.aurasystems.com/auragen.html",
        managerInfo: "https://cbol.com/contact.html",
        name: "AuraGen",
        text: "96파운드의 초경량 설계\n" +
            "컴팩트한 사이즈와 \n" +
            "연료 절감까지 갖춘 완벽한 기동성 \n" +
            "AuraGen®의 혁신적인 전력 솔루션",
    },
];

export default function App() {
    const [activeBlock, setActiveBlock] = useState<number | null>(null);

    return (
        <div className="flex flex-col h-screen w-full">
            {blocks.map((block) => (
                <div
                    key={block.id}
                    className={`flex-1 flex items-center justify-center font-bold transition-all duration-300 
                        relative group overflow-hidden bg-cover bg-center`}
                    style={{
                        backgroundImage: `url(${block.bgImage})`,
                    }}
                    onClick={() => setActiveBlock(activeBlock === block.id ? null : block.id)}
                >

                    {/* 어두운 배경 효과 */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300"></div>

                    {/* 컨텐츠 영역 */}
                    <div className="relative flex w-full h-full items-center justify-between px-10">
                        {/* 왼쪽: 텍스트 */}
                        <div className="w-2/3 flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-pre-line text-yellow-300 text-center text-2xl leading-relaxed">
                                {block.text}
                            </span>
                        </div>

                        {/* 오른쪽: 버튼 2개 */}
                        <div className="w-1/3 flex justify-center space-x-4">
                            <a
                                href={block.productInfo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-40 px-5 py-1 border-2 border-yellow-300 bg-black bg-opacity-30 text-yellow-300 rounded-none opacity-0
                                    group-hover:opacity-100 transition-all duration-300 hover:bg-opacity-80 text-xl text-center flex items-center justify-center"
                            >
                                제품정보
                            </a>
                            <a
                                href={block.managerInfo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-40 px-5 py-1 border-2 border-yellow-300 bg-black bg-opacity-30 text-yellow-300 rounded-none opacity-0
                                    group-hover:opacity-100 transition-all duration-300 hover:bg-opacity-80 text-xl text-center flex items-center justify-center"
                            >
                                CBOL 담당자
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
