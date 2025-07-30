// src/constants/menus.ts
export interface MenuItem {
    name: string;
    path: string;
}

export const MENUS: MenuItem[] = [
    { name: "인사말", path: "/koreaOffice" },
    { name: "서비스",   path: "/ourServices" },
    { name: "문의하기",  path: "/contactUs" },
];
