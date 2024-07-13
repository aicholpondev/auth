import img from "../../assets/image/lorby-img.png";
import {useFormik} from "formik";
import {useState} from "react";
import {NavLink,useNavigate} from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import {regisAuth} from "../../API";
import {basicSchema} from "../../schemas";


export default function AuthForm(){
    const [eye,setEye] = useState(false);
    const navigate = useNavigate();
    const onSubmit =async (values,actions) =>{
        console.log(values)
        console.log(actions)

        const loginData ={
            login:values.login,
            password:values.password
        }
        try{
            await regisAuth.login(loginData);
            navigate('/welcomback')
        }catch (e){
            console.log('Error',e.response.data)
        }
        await new Promise((resolve) =>setTimeout(resolve,1000));
        actions.resetForm();
    }



    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        validationSchema:basicSchema,
        onSubmit,
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
                    <h3>Войти</h3>
                    <NavLink to="/registerform">
                        <button >У меня еще нет аккаунта</button>

                    </NavLink>




                </div>
            </div>
        </section>
    )
}