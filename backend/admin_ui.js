```javascript
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { login, logout } from './login_system';
import { updatePortfolio, updateCV, getVisitorStats, getChatLogs } from './dashboard';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class AdminUI extends React.Component {
  state = {
    loggedIn: false,
    portfolio: [],
    cv: '',
    visitorStats: {},
    chatLogs: []
  };

  handleLogin = async (username, password) => {
    const loggedIn = await login(username, password);
    this.setState({ loggedIn });
  };

  handleLogout = async () => {
    await logout();
    this.setState({ loggedIn: false });
  };

  updateData = async () => {
    if (!this.state.loggedIn) return;

    const portfolio = await updatePortfolio();
    const cv = await updateCV();
    const visitorStats = await getVisitorStats();
    const chatLogs = await getChatLogs();

    this.setState({ portfolio, cv, visitorStats, chatLogs });
  };

  componentDidMount() {
    this.updateData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.loggedIn !== this.state.loggedIn) {
      this.updateData();
    }
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">3D Web Developer Portfolio</Menu.Item>
            <Menu.Item key="2">Dashboard</Menu.Item>
            <Menu.Item key="3">Logout</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="My Portfolio">
                {this.state.portfolio.map((item, index) => (
                  <Menu.Item key={index}>{item.title}</Menu.Item>
                ))}
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="CV">
                <Menu.Item key="1">{this.state.cv}</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="Analytics">
                <Menu.Item key="1">Visitor Stats: {this.state.visitorStats}</Menu.Item>
                <Menu.Item key="2">Chat Logs: {this.state.chatLogs}</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content goes here
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default AdminUI;
```