import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";

const profile = () => {
  const followerList = [{ nickname: "gun" }, { nickname: "woo" }];
  const followingList = [{ nickname: "gun" }, { nickname: "woo" }];
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>profile | NodeBird</title>
        <div>profile</div>;
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default profile;
