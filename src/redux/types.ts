import {ChangeCountType, CreateGamerNameTypes} from './enum';

export interface ActionType {
  type: ChangeCountType | CreateGamerNameTypes;
  payload: string;
}

export interface StateType {
  name: string;
  count: number;
}
