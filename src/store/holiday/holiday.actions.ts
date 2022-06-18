import { createAction, props } from '@ngrx/store';
import { IHoliday } from 'src/interface/holiday';

export const set = createAction('[Holiday state] Set', props<{holidays: IHoliday[]}>());