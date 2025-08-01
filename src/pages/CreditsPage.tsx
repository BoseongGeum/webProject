import React from "react";

const CreditsPage = () => {
    return (
        <div className="max-w-3xl mx-auto py-24 px-4 text-gray-700 text-sm">
            <h1 className="text-2xl font-bold mb-6">Image Credits</h1>

            {/* Prevent search engines from indexing this page */}
            <meta name="robots" content="noindex" />

            <p>
                사이트에 사용된 일부 이미지는 {' '}
                <a
                    href="https://www.freepik.com"
                    className="underline text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Freepik
                </a>{' '}
                에서 제공되었으며, 무료 라이선스(출처 표시 필요)에 따라 사용되었습니다.
            </p>
        </div>
    );
};

export default CreditsPage;