import img from "../../assets/image/lorby-img.png";
import {useFormik} from "formik";

export default function AuthForm(){
    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",

        }
    })
    console.log(formik)
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
                        placeholder="Введи туда-сюда логин"/>
                    <input
                        id="password"
                        type="password"
                        placeholder="Пароль (тоже введи)"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <button>Войти</button>
                    <h3>У меня еще нет аккаунта</h3>
                </div>
            </div>
        </section>
    )
}