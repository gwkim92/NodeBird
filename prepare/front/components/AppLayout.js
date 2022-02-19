import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";
import { useState } from "react";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";

const searchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
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
          <searchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <UserProfile />
          ) : (
            <LoginForm setisLoggedIn={setisLoggedIn} />
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

  AppLayout.prototype = {
    children: PropTypes.node.isRequired,
  };
};

export default AppLayout;
