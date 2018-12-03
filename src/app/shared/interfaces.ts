export interface Login {
    status: string;
    token: string;
}
export interface Lang {
    currency: string;
    lang: string;
}

export interface ResponData {
    status: string;
    data: any;
}


export interface ResponLang {
    status: string;
    data: Lang;
}

export interface Continent {
    id: number;
    continent_name: string;
    continent_name_en: string;
    continent_name_id: string;
}

export interface Destination {
    id: number;
    continent_name: string;
    continent_name_en: string;
    continent_name_id: string;
    country: any[];
}

export interface Country {
    id: number;
    nama_country: string;
    nama_country_en: string;
    nama_country_id: string;
    location: any[];
}

export interface Location {
    id: number;
    nama_lokasi: string;
    nama_lokasi_en: string;
    nama_lokasi_id: string;
    slug_lokasi: string;
    pic_lokasi: string;
}

export interface MenuActivity {
    id: number;
    kategori_type: number;
    nama_kategori: string;
    nama_kategori_en: string;
    nama_kategori_id: string;
    slug_kategori: string;
}







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