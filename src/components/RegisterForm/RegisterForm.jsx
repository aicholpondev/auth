import img from "../../assets/image/lorby-img.png";
import {useFormik} from "formik";
import { IoIosArrowBack } from "react-icons/io";
import {NavLink,useNavigate} from "react-router-dom";
import {postRegister} from "../../API/index"
import {basicSchema} from "../../schemas";


export default function RegisterForm(){

    const navigate = useNavigate();
    const handleRegister = async (data) => {
        try {
            const response = await postRegister(data);
            console.log(response.data);
        } catch (err) {
            if (!err?.response) {
                console.log(err);
            }
        }
    };



    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
            confirmPassword:"",
            login:"",


        },
        validationSchema:basicSchema,
        onSubmit:()=>{
            handleRegister({email: formik.values.email,
            username:formik.values.login,
            password: formik.values.password})
            // sentRegister()
            console.log("submit")

            navigate("/authletter")
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
                <form  onSubmit={formik.handleSubmit}
                    className="register__general--login">
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
                        type="text"
                        placeholder="Придумай логин"/>
                    <input
                        id="password"
                        type="text"
                        placeholder="Создай пароль"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <input
                        id="confirmPassword"
                        type="text"
                        placeholder="Повтори пароль"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                    />

                    {/*<NavLink to="/authletter">*/}

                        <button type="submit">Далее</button>

                    {/*</NavLink>*/}
                </form>
            </div>
        </section>
    )

}