import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "@/models/store";
import {getUserInfo} from "@/api/login";
import {updateLogged, updateUser } from "@/store/reducers/auth";
import { IUser } from "@/models/auth";

// token存在，本地没有缓存用户信息，则请求用户信息，否则设置为未登录
export default function useUser() {
  const dispatch = useDispatch()
  const logged = useSelector((state:IStore) => state.auth.logged);
  // const auth = useSelector((state:IStore) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem('token')

    // 已有用户数据
    if(logged){
      return;
    }

    // 请求用户数据
    if(token && !logged){
      getUserInfo().then((data: IUser) => {
        dispatch(updateUser(data))
      }).catch((err: any) => {
        updateLogged(false)
      })
    }else{
      dispatch(updateLogged(false))
    }
  },[])
}
