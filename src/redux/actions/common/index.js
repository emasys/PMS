// @flow
import { IS_FETCHING } from '../types';


type Response = {
  type: string,
  payload: any,
};

export const isSuccess = (type: string, payload: any): Response => ({
  type,
  payload,
});

export const isFetching = (payload: string): Response => ({
  type: IS_FETCHING,
  payload,
});
