// @flow

import React from "react";

import s from "./Root.scss";
import Sidebar from "./Sidebar";

const Root = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.sidebar}>
        <Sidebar />
      </div>
      <div className={s.content}>qwer</div>
    </div>
  );
};

export default Root;
