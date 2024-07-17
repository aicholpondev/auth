import img from "../../assets/image/lorby-img.png";
import {useFormik} from "formik";
import {useState} from "react";
import { IoIosArrowBack } from "react-icons/io";
import {NavLink,useNavigate} from "react-router-dom";
import {postRegister} from "../../API/index"
import {basicSchema} from "../../schemas";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";


export default function RegisterForm(){
    const [visiblePasswordEye, setVisiblePasswordEye] = useState(false);
    const [visibleConfirmEye, setVisibleConfirmEye] = useState(false);

    // Обработчики переключения видимости пароля
    const updatePassEye = () => {
        setVisiblePasswordEye(!visiblePasswordEye);
    }

    const updateConfEye = () => {
        setVisibleConfirmEye(!visibleConfirmEye);
    }

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
                   <div className="register__general--login__password">
                       <input
                           id="password"
                           name="password"
                           type={visiblePasswordEye ? "text" : "password"}
                           placeholder="Создай пароль"
                           value={formik.values.password}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                       />
                       <span onClick={updatePassEye}>
                        {visiblePasswordEye ? <IoEyeOutline />: <FaRegEyeSlash/> }
                    </span>
                   </div>
                   <div className="register__general--login__password">
                       <input
                           id="confirmPassword"
                           name="confirmPassword"
                           type={visibleConfirmEye ? "text" : "password"}
                           placeholder="Повтори пароль"
                           value={formik.values.confirmPassword}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                       />
                       <span onClick={updateConfEye}>
                           {visibleConfirmEye ? <IoEyeOutline />: <FaRegEyeSlash/>}
                       </span>
                   </div>


                        <button type="submit">Далее</button>

                </form>
            </div>
        </section>
    )

}