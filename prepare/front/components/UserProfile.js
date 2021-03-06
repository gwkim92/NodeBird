import React, { useCallback } from "react";
import { Button, Card } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { useDispatch } from "react-redux";
import {logoutAction } from '../reducers/user'

const UserProfile = () => {
  
  const dispatch = useDispatch(); 
  const onLogOut = useCallback(() => {
    dispatch(logoutAction())
  }, []);
  
  return (
    <Card
      actions={[
        <div key="twite">
          {" "}
          w <br />0
        </div>,
        <div key="followings">
          {" "}
          팔로잉 <br />0
        </div>,
        <div key="followers">
          {" "}
          팔로워 <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar> zc </Avatar>} title="gunwoo" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
