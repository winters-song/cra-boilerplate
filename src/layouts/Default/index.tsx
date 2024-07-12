import React, { useEffect, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';
import { Button, Layout, Modal, Tooltip } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { PageWrapper } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/store/reducers/auth';
import { IStore } from '@/models/store';
import useUser from '@/components/Auth/User';
import Navigation from '@/components/Navigation';

const { Header, Sider, Content } = Layout;


const App: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const logged = useSelector((state: IStore) => state.auth.logged);
  const user = useSelector((state: IStore) => state.auth.user);
  const pageTitle = useSelector((state: IStore) => state.common.pageTitle)

  useUser()

  const showLogoutConfirm = () => {
    Modal.confirm({
      title: '退出登录',
      content: '确定退出登录吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        dispatch(logout())
        navigate('/login')
      }
    })
  }

  /**
   * logged default null, 
   * after token's judge, logged will be true or false
   * if logged is false, redirect to login
   */
  useEffect(() => {
    if (logged === false) {
      navigate('/login')
    }
  }, [logged])

  return (
    <PageWrapper>
      <Layout className='layout-wrapper'>
        <Sider 
          className='sider-wrapper' 
          width={250}
          trigger={null} collapsible collapsed={collapsed}>
          <div className="header">
            <div className="logo" >Dashboard</div>

            <Button
              type="text"
              size='large'
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
          </div>

          <div className="body">
            <div className="title">
              MAIN MENU
            </div>
            <Navigation />
          </div>
        </Sider>
        <Layout className='main-wrapper'>
          <Header className='main-header' >
            <div className="page-title">
              {pageTitle}
            </div>
            <div className="right-bar">
              {user && <div className="avatar" style={{ backgroundImage: `url(${user?.icon})` }}></div>}
              <div className="separator"></div>
              <Tooltip placement="bottom" overlayClassName="main-header-tooltip" title={"退出登录"} arrow={false}>
                <Button
                  type="text"
                  size='large'
                  icon={<PoweroffOutlined />}
                  onClick={showLogoutConfirm}
                />
              </Tooltip>
            </div>
          </Header>
          
          <Content className="main-content" >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </PageWrapper>
  );
};

export default App;