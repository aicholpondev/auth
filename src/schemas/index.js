// import * as yup from "yup";
//
// const passwordRules =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{5,24}$/;
//
// export const basicSchema = yup.object().shape({
//     email:yup
//         .string()
//         .email("Введи туда-сюда логин")
//         .required("Required"),
//     password:yup
//         .string()
//         .min(8,'От 8 до 15 символов')
//         .max(15, 'От 8 до 15 символов')
//         .matches(/[a-z]/, 'Строчные и прописные буквы')
//         .matches(/[A-Z]/, 'Строчные и прописные буквы')
//         .matches(/\d/, 'Минимум 1 цифра')
//         .matches(/[^a-zA-Z0-9]/, 'Минимум 1 спецсимвол (!, ", #, $...)')
//         .matches(passwordRules,{message:"Please create a stronger password"})
//         .required("Required"),
//     confirmPassword:yup
//         .string()
//         .oneOf([yup.ref("password"),null],"error").required("Required"),
// })
import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,15}$/;

export const basicSchema = yup.object().shape({
    email: yup
        .string()
        .email("Введите корректный email")
        .required("Обязательное поле"),
    password: yup
        .string()
        .min(8, 'Пароль должен быть от 8 до 15 символов')
        .max(15, 'Пароль должен быть от 8 до 15 символов')
        .matches(/[a-z]/, 'Пароль должен содержать строчные буквы')
        .matches(/[A-Z]/, 'Пароль должен содержать прописные буквы')
        .matches(/\d/, 'Минимум 1 цифра')
        .matches(/[!@#$%]/, 'Минимум 1 спецсимвол (!, ", #, $...)')
        .matches(passwordRules,{message:"Please create a stronger password"})

        .required("Обязательное поле"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
        .required("Обязательное поле"),
});