import './App.css';
// import {Route,Routes} from "react-router-dom";
import AuthForm from "./components/AuthForm/AuthForm";
// import RegisterForm from "./components/RegisterForm/RegisterForm";
// import LorbyForm from "./components/LorbyForm/LorbyForm"
// import AuthLetter from "./pages/AuthLetter/AuthLetter";
function App() {
  return (
    <div className="App">
      <AuthForm/>
      {/*  <RegisterForm/>*/}
      {/*  <AuthLetter/>*/}

    {/*  <Routes>*/}
    {/*    <Route path="/" element={<AuthForm/>}/>*/}
    {/*  </Routes>*/}
    </div>
  );
}

export default App;
