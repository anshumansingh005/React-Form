import React, { ReactElement, useEffect, useRef, useState } from "react";

import "./App.css";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register: React.FC = (): ReactElement => {
  const userRef = useRef<HTMLInputElement>(null);

  const errRef = useRef<HTMLParagraphElement>(null);

  const [user, setUser] = useState<string>("");

  const [validName, setValidName] = useState<boolean>(false);
  const [userFocus, setUserFocus] = useState<boolean>(false);

  const [pwd, setPwd] = useState<string>("");
  const [validPwd, setValidPwd] = useState<boolean>(false);
  const [pwdFocus, setPwdFocus] = useState<boolean>(false);

  const [matchPwd, setMatchPwd] = useState<string>("");
  const [validMatch, setvalidMatch] = useState<boolean>(false);
  const [matchFocus, setmatchFocus] = useState<boolean>(false);

  const [errMsg, setErrMsg] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // useeffect for User
  useEffect(() => {
    const result: boolean = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result: boolean = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match: boolean = pwd === matchPwd;
    setValidPwd(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <form>
        <label htmlFor="username">UserName:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          aria-invalid={validName ? "false" : "true"}
          onChange={(e) => setUser(e.target.value)}
          required
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
      </form>
    </section>
  );
};

export default Register;
