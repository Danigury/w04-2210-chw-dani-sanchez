import "./App.css";
// import { Button, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import FormOne from "./components/FormOne/FormOne";
import FormTwo from "./components/FormTwo/FormTwo";
import FormThree from "./components/FormThree/FormThree";
import Context from "./components/Context/Context";

function App() {
  const [page, setPage] = useState(0);

  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    birthday: "",
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
    usernameLogin: "",
    passwordLogin: "",
  });

  const nextPage = () => {
    if (page === 0 && page < 2) {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page >= 1 && page <= 2) {
      setPage(page - 1);
    }
  };

  const onChange = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <Context.Provider
      value={{ page, setPage, nextPage, previousPage, userData, onChange }}
    >
      <div className="App "></div>
      {page === 0 && <FormOne />}
      {page === 1 && <FormTwo />}
      {page === 2 && <FormThree />}
    </Context.Provider>
  );
}

export default App;
