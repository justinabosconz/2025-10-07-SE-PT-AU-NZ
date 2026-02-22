import { useState, useContext } from "react";
import { useFormInput } from "../Hooks/useFormInput";
import { UserContext } from "../components/UserProvider";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function LoginForm() {
  const [result, setResult] = useState("");
  const [emailInputProps, resetEmail] = useFormInput("");
  const [passInputProps, resetPassword] = useFormInput("");
  const { currentUser, handleUpdateUser } = useContext(UserContext);
  const logoutJSX = (
    <>
      <Button variant="outlined" color="error" onClick={logout}>
        Logout
      </Button>
    </>
  );
  const loginJSX = (
    <>
      <Box
        sx={{
          color: "rgba(122, 122, 131, 0.79)",
          fontSize: "2em",
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-email"
          label="Email Address"
          type="text"
          name="email"
          {...emailInputProps}
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          name="password"
          {...passInputProps}
        />
      </Box>

      {/* <div>
        <label>
          Email Address:
          <input type="text" name="email" {...emailInputProps}></input>
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="text" name="password" {...passInputProps}></input>
        </label>
      </div> */}

      <div>
        <Button
          variant="outlined"
          color="success"
          onClick={() => FormSubmitted()}
        >
          Submit
        </Button>
      </div>
      <div>
        <label>{result}</label>
      </div>
    </>
  );

  function FormSubmitted() {
    if (emailInputProps.value.length < 5)
      setResult("Email cannot be less than 5 characters");
    else if (passInputProps.value.length < 4)
      setResult("Password cannot be less than 4 characters");
    else {
      resetEmail();
      resetPassword();

      handleUpdateUser({ user: emailInputProps.value });

      setResult("User logged in successfully");
    }
  }

  function logout() {
    handleUpdateUser({});
  }

  return <>{currentUser.user ? logoutJSX : loginJSX}</>;
}

export default LoginForm;
