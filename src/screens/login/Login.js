import "./Login.css";
import RequireAstrix from "../../components/require-astrix/RequireAstrix";
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const OnLogin = (e) => {
    e.preventDefault();
    console.log("Username:"+username+"; Password:"+password);
  };

  return (
    <>
      <div className="LoginMain">
        <h1>Note Here</h1>
        <hr className="Seperator" />
        <h3 className="LoginLabel">Login</h3>
        <form onSubmit={OnLogin}>
          <label className="InputLabel" htmlFor="#username">
            Username
            <RequireAstrix />
          </label>
          <br />
          <input
            className="UserInput"
            id="#username"
            type={"text"}
            required
            value={username}
            onChange={(e) => setusername(e.target.value)}
          ></input>
          <br />
          <label className="InputLabel" htmlFor="#password">
            Password
            <RequireAstrix />{" "}
          </label>
          <br />
          <input
            className="UserInput"
            id="#password"
            type={"password"}
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          ></input>
          <br />
          <input className="LoginButton" type={"submit"} value="Login"></input>
        </form>
      </div>
    </>
  );
}

export default Login;
