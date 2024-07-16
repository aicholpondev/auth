import img from "../../assets/image/lorby-img.png";
import {useFormik} from "formik";
import {useState} from "react";
import {NavLink,useNavigate} from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import {basicSchema} from "../../schemas";
import {validateElement} from "react-modal/lib/helpers/ariaAppHider";


export default function AuthForm(){
    const [eye,setEye] = useState(false);
    const navigate = useNavigate();



    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        validationSchema:basicSchema,
        onSubmit:()=>{
            navigate("/authletter")
            console.log("submit")
        }
    })
    // console.log(formik)

    const toggleEye = () => {
        setEye(!eye);
    }
    return(
        <section id="auth">
            <div className="auth__general">
                <div className="auth__general--img">
                    <img src={img} alt="img"/>
                    <h1>Lorby</h1>
                    <p>Твой личный репетитор</p>
                </div>
                <div className="auth__general--login">
                    <h2>Вэлком бэк!</h2>
                    <input
                        value={formik.values.email}
                        onChange ={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="email"
                        type="email"
                        placeholder="Введи туда-сюда логин"

                    />
                  <div className="auth__general--password">
                      <input
                          id="password"
                          type="password"
                          placeholder="Пароль (тоже введи)"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                      />
                      <span onClick={toggleEye}>{ eye ? <FaRegEyeSlash/> : <IoEyeOutline />}</span>
                  </div>
                    <button type="submit">Войти</button>
                    <NavLink to="/registerform">
                        <button >У меня еще нет аккаунта</button>

                    </NavLink>




                </div>
            </div>
        </section>
    )
}