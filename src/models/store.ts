import {IAuthStore} from "./auth";
import { ICommonStore } from "./common";

export interface IStore {
  auth: IAuthStore,
  common: ICommonStore
}