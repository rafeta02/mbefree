export interface Lokasi {
    name: string;
    name_en: string;
    name_id: string;
    slug: string;
    pic: string;
}

export interface Negara {
    code: string;
    name: string;
    name_en: string;
    name_id?: string;
    location: Lokasi[];
}

export interface Area {
    code: string;
    name: string;
    name_en: string;
    name_id: string;
    country: Negara[];
}