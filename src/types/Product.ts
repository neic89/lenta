export interface IAvailability {
    value: string | number;
    unit: string;
}

export interface IProduct {
    fullName: string;
    shortName: string;
    code: string;
    availability: IAvailability;
    image_url: string;
}
