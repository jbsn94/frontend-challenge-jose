export interface ICountry {
    code: string;
    name: string;
}

export interface IListApiResponse {
    countries: ICountry[];
}
