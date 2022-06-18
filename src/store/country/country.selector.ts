import { createSelector } from '@ngrx/store';
import { ICountry } from 'src/interface/country';


export interface AppState {
    country: ICountry[];
}

export const state = (state: AppState) => state.country;

export const findCountry = (code: string) => createSelector(
    state,
    (state: ICountry[]) => state.find((country) => country.code == code)
);