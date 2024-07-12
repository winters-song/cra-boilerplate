import { IUser } from "@/models/auth"
import avatar from '@/assets/common/avatar.jpg'
// export const getUserInfo = () => http.get<IUser>(USERINFO_URL)
export const getUserInfo = () => {
  return new Promise<IUser>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        token: '123',
        icon: avatar,
        userId: 1,
        mobile: '13800000001',
        nickName: 'Mash Kyrielight'
      })  
    }, 100)
  })
}