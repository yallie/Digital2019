import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import SampleChart from './SampleChart';
import OptimizerChart from './OptimizerChart';

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

type TopNav = "Sample" | "Optimizer"

export default function MainPage() {
    const [navSection, setNavSection] = useState(['1'])
    const setSection = (item: TopNav) => () => {
        console.log('set top section: ' + item)
        setNavSection([item])
    }

    return (
        <Layout>
            <Header className="header">
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={navSection}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1" onClick={setSection('Sample')}>Sample</Menu.Item>
                <Menu.Item key="2" onClick={setSection('Optimizer')}>Optimizer</Menu.Item>
            </Menu>
            </Header>
            <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                >
                <SubMenu
                    key="sub1"
                    title={
                    <span>
                        <Icon type="user" />
                        subnav 1
                    </span>
                    }
                >
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                    <span>
                        <Icon type="laptop" />
                        subnav 2
                    </span>
                    }
                >
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub3"
                    title={
                    <span>
                        <Icon type="notification" />
                        subnav 3
                    </span>
                    }
                >
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
                >
                { (navSection[0] === 'Sample') && <SampleChart /> }
                { (navSection[0] === 'Optimizer') && <OptimizerChart /> }
                </Content>
            </Layout>
            </Layout>
        </Layout>
    )
}
