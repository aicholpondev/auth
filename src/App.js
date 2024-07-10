import './App.css';
import {Route,Routes} from "react-router-dom";
import AuthForm from "./components/AuthForm/AuthForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
// import LorbyForm from "./components/LorbyForm/LorbyForm"
// import AuthLetter from "./pages/AuthLetter/AuthLetter";
// import Welcome from "./pages/Welcome/Welcome"
// import WelcomeBack from "./pages/WelcomeBack/WelcomeBack"
function App() {
  return (
    <div className="App">

        {/*<WelcomeBack/>*/}
      {/*<Welcome/>*/}
      {/*  <AuthLetter/>*/}

      <Routes>
        <Route path="/" element={<AuthForm/>}/>
        <Route path="/registerform" element={<RegisterForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
