import { createReducer, on } from '@ngrx/store';
import { IHoliday } from 'src/interface/holiday';
import { set } from './holiday.actions';

export const initialState: IHoliday[] = [];
 
export const holidayReducer = createReducer(
  initialState,
  on(set, (state, { holidays }) => holidays),
);