import { PageWrapper } from './style';
import React, { useEffect } from 'react';
import { Outlet, useNavigate, } from "react-router-dom";
import { useSelector } from "react-redux";
import { IStore } from "@/models/store";
import useUser from "@/components/Auth/User";

// 登录、注册等无需鉴权页面
// 如果已登录，跳转首页（如果没设置段位，跳转初始化段位）
const Index = () => {
  const navigate = useNavigate();
  const logged = useSelector((state: IStore) => state.auth.logged);

  // 获取用户
  useUser()

  useEffect(() => {
    if (logged) {
      navigate('/home', {
        replace: true
      })
    }
  }, [logged])

  return (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  );
};

export default Index;