import React from "react";
import "antd/dist/antd.css";
import PropTypes from "prop-types";
import Head from "next/head";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBirds</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.prototype = {
  Component: PropTypes.elementType.isRequired,
};

export default NodeBird;
