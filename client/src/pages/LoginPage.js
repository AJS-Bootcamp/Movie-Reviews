// // LoginPage.js
// import React, { useState } from "react";
// import { Container, Col, Row } from "reactstrap";
// import LoginForm from "../components/LoginForm";

// const LoginPage = () => {
//   const [loggedIn, setLoggedIn] = useState(false);

//   return (
//     <Container>
//       <Row className="row-content-contact d-flex justify-content-center">
//         <Col xs="12">
//           <h2>Login</h2>
//           <hr />
//         </Col>
//         <Col md="10">
//           <LoginForm setLoggedIn={setLoggedIn} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import { Login } from "../components/Login";
import { Register } from "../components/Register";

function LoginPage() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default LoginPage;

