import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import style from "./login.module.css";
export function Login() {
  return (
    <>
      <div className={style.div}>
        <div className={style.login}>
          <div className={style.label}>Login</div>
          <div className={style.userName}>
            <span className = {`${style.icon}`}><FontAwesomeIcon icon={faUser} style={{ color: "red" }} /></span>
            <input type="text" name="" id="" className={style.input} />
          </div>
        </div>
      </div>
    </>
  );
}
