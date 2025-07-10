// src/constants/menus.ts
export interface MenuItem {
    name: string;
    path: string;
}

export const MENUS: MenuItem[] = [
    { name: "회사소개", path: "/team2/koreaOffice" },
    { name: "서비스",   path: "/team2/ourServices" },
    { name: "Contact",  path: "/team2/contactUs" },
];
