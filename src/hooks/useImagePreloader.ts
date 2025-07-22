import { useEffect, useState } from "react";

export function useImagePreloader(urls: string[]) {
    const [loadedCount, setLoadedCount] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const total = urls.length;

    useEffect(() => {
        if (urls.length === 0) {
            setLoaded(true);
            return;
        }

        let isCancelled = false;

        urls.forEach((url) => {
            const img = new Image();
            img.src = url;

            const handleDone = () => {
                if (!isCancelled) {
                    setLoadedCount((prev) => {
                        const next = prev + 1;
                        if (next === urls.length) {
                            setLoaded(true);
                        }
                        return next;
                    });
                }
            };

            img.onload = handleDone;
            img.onerror = handleDone;
        });

        return () => {
            isCancelled = true;
        };
    }, [urls]);

    const percent = total === 0 ? 100 : Math.min(100, Math.round((loadedCount / total) * 100));

    return { loaded, percent };
}