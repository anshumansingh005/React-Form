import React, {
  ChangeEvent,
  ReactElement,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

import "./App.css";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register: React.FC = (): ReactElement => {
  const userRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const errRef: RefObject<HTMLParagraphElement> =
    useRef<HTMLParagraphElement>(null);

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

  useEffect((): void => {
    // userRef.current.focus();
  }, []);

  // useeffect for User
  useEffect((): void => {
    const result: boolean = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect((): void => {
    const result: boolean = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match: boolean = pwd === matchPwd;
    setValidPwd(match);
  }, [pwd, matchPwd]);

  useEffect((): void => {
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
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            setUser(e.target.value)
          }
          required
          onFocus={(): void => setUserFocus(true)}
          onBlur={(): void => setUserFocus(false)}
        />
      </form>
    </section>
  );
};

export default Register;
