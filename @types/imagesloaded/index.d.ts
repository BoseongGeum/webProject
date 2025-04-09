// @types/imagesloaded/index.d.ts
declare module 'imagesloaded' {
    interface ImagesLoaded {
        on(event: 'always' | 'done' | 'fail' | 'progress', callback: (instance: ImagesLoaded, image?: any) => void): this;
    }

    function imagesLoaded(elem: Element | string): ImagesLoaded;

    export default imagesLoaded;
}
