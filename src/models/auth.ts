
export interface IAuthStore {
  logged: boolean | null;
  user: IUser | null;
}

export interface IUser {
  token: string;
  icon: string;
  userId: number;
  mobile: string;
  nickName: string;
}