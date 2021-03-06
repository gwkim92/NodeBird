import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Input, Menu, Row, Col } from "antd";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import PropTypes from "prop-types";
const AppLayout = ({ children }) => {
  const IsLoggedIn = useSelector((state) => state.user.IsLoggedIn)
  
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>

      <Row gutter={8}>
        <Col xs={24} md={6}>
          {IsLoggedIn ? (
            <UserProfile />
          ) : (
            <LoginForm  />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://blockgun.tistory.com/"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            made by Gun
          </a>
        </Col>
      </Row>
    </div>
  );
};
  AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };


export default AppLayout;
