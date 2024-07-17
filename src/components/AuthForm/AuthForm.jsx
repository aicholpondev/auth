import img from "../../assets/image/lorby-img.png";
import {useFormik} from "formik";
import {useState} from "react";
import {NavLink,useNavigate} from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import {basicSchema} from "../../schemas";
import {postLogin} from "../../API";
import {validateElement} from "react-modal/lib/helpers/ariaAppHider";


export default function AuthForm(){
    const [visiblePasswordEye, setVisiblePasswordEye] = useState(false);
    const navigate = useNavigate();

    const handleLogin =async (data) =>{
       try{
           const response = await postLogin(data);
           console.log(response.data)
       } catch (err){
           if (!err?.response){
               console.log(err);
           }
       }
    };

    const updatePassEye = () => {
        setVisiblePasswordEye(!visiblePasswordEye);
    }



    const formik = useFormik({
        initialValues:{
            login:"",
            password:"",
        },
        validationSchema:basicSchema,
        onSubmit:()=>{
            handleLogin({
                username:formik.values.login,
                password: formik.values.password
            })
            console.log("submit")
            navigate("/welcome")

        }
    })
    // console.log(formik)


    return(
        <section id="auth">
            <div className="auth__general">
                <div className="auth__general--img">
                    <img src={img} alt="img"/>
                    <h1>Lorby</h1>
                    <p>Твой личный репетитор</p>
                </div>
                <form
                    onSubmit={formik.handleSubmit}
                    className="auth__general--login">
                    <h2>Вэлком бэк!</h2>
                    <input
                        value={formik.values.login}
                        onChange ={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="login"
                        type="text"
                        placeholder="Введи туда-сюда логин"

                    />
                  <div className="auth__general--login__password">
                      <input
                          id="password"
                          name="password"
                          type={visiblePasswordEye ? "text" : "password"}
                          placeholder="Пароль (тоже введи)"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                      />
                      <span onClick={updatePassEye}>
                        {visiblePasswordEye ? <IoEyeOutline />: <FaRegEyeSlash/> }
                    </span>
                  </div>
                    <button type="submit">Войти</button>
                    <NavLink to="/registerform">
                        <button >У меня еще нет аккаунта</button>

                    </NavLink>




                </form>
            </div>
        </section>
    )
}