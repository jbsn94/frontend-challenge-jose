import { createAction, props } from '@ngrx/store';
import { ICountry } from 'src/interface/country';

export const set = createAction('[Country state] Set', props<{countries: ICountry[]}>());