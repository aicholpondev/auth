
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

        .required("Обязательное поле"),

    login: yup
        .string()
        .min(4, 'Минимум 4 символа')
        .matches(/^[A-Za-z]*$/, 'Только латинские буквы разрешены')
        .required('Требуется логин'),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
        .required("Обязательное поле"),
});