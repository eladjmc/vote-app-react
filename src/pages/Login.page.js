import { useState } from "react";
import logo from "../assets/images/logo.png";
import { validateEmail } from "../utils/validateEmail";
import Wrapper from "../styles/styled/Login.styled";
import FormRow from "../components/FormRow.component";
import Modal from "../components/Modal.component";
import PAGES from "../constants/index";

const[vote] = PAGES;

const Login = ({setLoggedUser, usersData, setCurrentPage }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const { email, password } = values;

    if (!email || validateEmail(email)) {
      const msg = "Please enter a valid email";
      handleError(msg, setEmailError);
    } else {
      setEmailError(false);
    }

    if (!password) {
      const msg = "Please enter a password";
      handleError(msg, setPasswordError);
    } else {
      setPasswordError(false);
    }

    if (!email || validateEmail(email) || !password) {
      setIsLoading(false);
      setIsError(true);
      return;
    } else {
      const userData = usersData.find((user) => user.email === email);
      if (userData) {
        if (userData.password !== password) {
          // Invalid password
          const msg = "Password does not match email";
          handleError(msg, setPasswordError);
          setIsError(true);
          setIsLoading(false);
        } else {
          setPasswordError(false);

          setTimeout(() => {
            setCurrentPage(vote);
            setLoggedUser({
              id: userData.id,
              name: userData.name,
              email: userData.email,
              type: userData.type,
            });
          }, 2000);
        }
      } else {
        const msg = "No such email in database";
        handleError(msg, setEmailError);
        setIsError(true);
        setIsLoading(false);
      }
    }
  };

  const handleError = (msg, setMethod) => {
    setMethod(true);
    const messages = errorMessages;
    messages.push(msg);
    setErrorMessages(messages);
  };

  const closeModal = () => {
    setIsError(false);
    setErrorMessages([]);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        {/* email field */}
        <FormRow
          error={emailError}
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          error={passwordError}
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "loading..." : "Log In"}
        </button>
      </form>
      {isError && <Modal closeModal={closeModal} messages={errorMessages} />}
    </Wrapper>
  );
};

export default Login;
