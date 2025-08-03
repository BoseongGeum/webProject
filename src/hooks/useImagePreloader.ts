import { useEffect, useState } from "react";

export function useImagePreloader(urls: string[]) {
    const [loaded, setLoaded] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const hasLoadedBefore = sessionStorage.getItem("imagesLoaded") === "true";
        const startTime = Date.now();

        let intervalId: NodeJS.Timeout | null = null;
        let loadedCount = 0;
        let isCancelled = false;

        // ✅ progress를 부드럽게 증가시키는 가짜 인터벌
        intervalId = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 99) return 99; // 실제 완료 전에는 99%까지 제한
                return prev + 1;
            });
        }, 10); // 1%씩 10ms마다 증가하면 약 1초에 도달

        const finish = () => {
            const elapsed = Date.now() - startTime;
            const waitTime = Math.max(0, 1000 - elapsed); // 최소 1초 보장

            setTimeout(() => {
                if (isCancelled) return;
                sessionStorage.setItem("imagesLoaded", "true");
                if (intervalId) clearInterval(intervalId);
                setProgress(100);
                setLoaded(true);
            }, waitTime);
        };

        if (hasLoadedBefore || urls.length === 0) {
            finish();
            return;
        }

        urls.forEach((url) => {
            const img = new Image();
            img.src = url;

            const handleDone = () => {
                loadedCount += 1;
                if (loadedCount === urls.length) {
                    finish();
                }
            };

            img.onload = handleDone;
            img.onerror = handleDone;
        });

        return () => {
            isCancelled = true;
            if (intervalId) clearInterval(intervalId);
        };
    }, [urls]);

    return { loaded, progress };
}
