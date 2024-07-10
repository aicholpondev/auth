import img from "../../assets/image/lorby-img.png";
import {useFormik} from "formik";
import { IoIosArrowBack } from "react-icons/io";
import {NavLink} from "react-router-dom";

export default function RegisterForm(){
    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",

        }
    })
    return(
        <section id="register">
            <NavLink to="/">
                <button className="register__goback"><IoIosArrowBack />Назад</button>

            </NavLink>
            <div className="register__general">
                <div className="register__general--img">
                    <img src={img} alt="img"/>
                    <h1>Lorby</h1>
                    <p>Твой личный репетитор</p>
                </div>
                <div className="register__general--login">
                    <h2>Создать аккаунт Lorby</h2>
                    <input
                        value={formik.values.email}
                        onChange ={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="email"
                        type="email"
                        placeholder="Введи адрес почты"/>
                    <input
                        value={formik.values.login}
                        onChange ={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="login"
                        type="email"
                        placeholder="Придумай логин"/>
                    <input
                        id="password"
                        type="password"
                        placeholder="Создай пароль"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <input
                        id="password"
                        type="password"
                        placeholder="Повтори пароль"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <button>Далее</button>
                </div>
            </div>
        </section>
    )

}