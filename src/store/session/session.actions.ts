import { createAction, props } from '@ngrx/store';
import { ISession } from 'src/interface/session';

export const set = createAction('[Session state] Set', props<ISession>());