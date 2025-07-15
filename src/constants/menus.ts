// src/constants/menus.ts
export interface MenuItem {
    name: string;
    path: string;
}

export const MENUS: MenuItem[] = [
    { name: "회사소개", path: "/koreaOffice" },
    { name: "서비스",   path: "/ourServices" },
    { name: "Contact",  path: "/contactUs" },
];
