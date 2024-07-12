import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


const menus = [
  '/course/course-list',
  '/user/user-list'
]

const Navigation = () => {
  const navigate = useNavigate()

  const pathname = menus.indexOf(window.location.pathname) !== -1 ? window.location.pathname : '/'
  const openKey = pathname.split('/')[1]
  const [current, setCurrent] = useState(pathname);

  const items = [
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
      icon: <AppstoreOutlined />,
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
    if(menus.indexOf(window.location.pathname) !== -1){
      setCurrent(window.location.pathname)
    }
  }, [])

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
