import LorbyForm from "../../components/LorbyForm/LorbyForm";
import Modal from "react-modal";
import {useState} from "react";


export  default function AuthLetter(){

    const [isFormVisible, setIsFormVisible] = useState(false);
    // const email = localStorage.getItem('registrationEmail');

    const handleResendEmail = () => {

        setIsFormVisible(true);
    }


    return(
        <div className="auth__general">
            <LorbyForm/>
            <button className="goBack">Назад</button>
            <div className="auth__general--text">
                <h3>Выслали письмо со ссылкой для завершения регистрации на example@gmail.com</h3>
                <p>Если письмо не пришло, не спеши ждать совиную почту - лучше <span>проверь ящик “Спам”</span></p>
                <h4>(´｡• ω •｡`)</h4>
                <button onClick={handleResendEmail}>Письмо не пришло</button>
            </div>
                <Modal
                    isOpen={isFormVisible}
                    onRequestClose={() => setIsFormVisible(false)}
                    contentLabel="Booking Form"
                    className="auth__general--modal"
                    >

                    <div className="auth__general--modaltext">
                        <h3>Мы выслали еще одно письмо на указанную тобой почту @mail</h3>
                        <p>Не забудь проверить ящик “Спам”!</p>
                        <button >Понятно!</button>
                    </div>
            </Modal>




        </div>
    )
}