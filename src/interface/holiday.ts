export interface IHoliday {
    date: string;
    name: string;
    local_name: string;
    country_code: string;
    regions: string[];
    types: string[];
}

export interface IListApiResponse {
    holidays: IHoliday[];
}
