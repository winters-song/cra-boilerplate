import React, { useState } from 'react';
import PwdLogin from "./components/PwdLogin";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import CodeLogin from "./components/CodeLogin";
import { Typography } from "antd";
import {useDispatch} from "react-redux";
import { IUser } from '@/models/auth';
import { login } from '@/store/reducers/auth';

const { Text, Link } = Typography

const tabNames = ['验证码登录', '密码登录']

/* 登录页： 验证码登录、密码登录 */
const Page = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [tab, setTab] = useState<number>(0)

  const onLoginSuccess = (data: IUser) => {
    dispatch(login(data))
    goNext()
  }


  // 登录成功后跳转
  const goNext = () => {
    navigate('/home', {
      replace: true
    })
  }

  return (
    <div>
      <div className="tabs">
        {tabNames.map((item, index) => (
          <div key={index} className={classNames({
            item: true,
            active: tab === index
          })}
            onClick={() => setTab(index)} >
            {item}
          </div>
        ))}
      </div>
      {
        tab === 0 && <CodeLogin />
      }
      {
        tab === 1 && <PwdLogin />
      }
    </div>
  );
};

export default Page;