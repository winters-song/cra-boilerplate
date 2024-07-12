import { AppstoreOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { navigationMap } from "../common/Constants";
import { useDispatch } from "react-redux";
import { updatePageTitle } from "@/store/reducers/common";


const Navigation = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const pathname = !!navigationMap[window.location.pathname] ? window.location.pathname : '/'
  const openKey = pathname.split('/')[1]
  const [current, setCurrent] = useState(pathname);

  const items = [
    {
      key: '/home',
      icon: <AppstoreOutlined />,
      label: '首页',
    },
    {
      key: 'course',
      icon: <MailOutlined />,
      label: '课程管理',
      children: [
        { key: '/course/course-list', label: '课程列表' },
      ],
    },
    {
      key: 'user',
      icon: <UserOutlined />,
      label: '用户管理',
      children: [
        { key: '/user/user-list', label: '用户列表'  },
      ],
    },
  ]



  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    navigate(e.key)
  };

  useEffect(() => {
    if(!!navigationMap[window.location.pathname]){
      setCurrent(window.location.pathname)
    }
  }, [])

  // change page title
  useEffect(() => {
    if(current){
      dispatch(updatePageTitle(navigationMap[current]))
    }
  }, [current])

  return (
    <Menu
      mode="inline"
      defaultOpenKeys={[openKey]}
      selectedKeys={[current]}
      onClick={onClick}
      items={items}
    />
  )
};

export default Navigation;
