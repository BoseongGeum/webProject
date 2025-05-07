import { useEffect, useState } from "react";

export function useImagePreloader(imagePaths: string[], minDelay = 700) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!imagePaths || imagePaths.length === 0) {
            setTimeout(() => setIsLoaded(true), minDelay);
            return;
        }

        let isCancelled = false;
        const start = performance.now();

        Promise.all(
            imagePaths.map(
                (src) =>
                    new Promise<void>((resolve) => {
                        const img = new Image();
                        img.src = src;
                        img.onload = () => resolve();
                        img.onerror = () => resolve(); // 실패해도 resolve
                    })
            )
        ).then(() => {
            const elapsed = performance.now() - start;
            const remaining = Math.max(minDelay - elapsed, 0);

            setTimeout(() => {
                if (!isCancelled) setIsLoaded(true);
            }, remaining);
        });

        return () => {
            isCancelled = true;
        };
    }, [imagePaths, minDelay]);

    return isLoaded;
}
