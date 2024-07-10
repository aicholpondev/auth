import img from "../../assets/image/lorby-img.png";
import React, {useState} from "react";
import Modal from "react-modal";


export default function Welcome(){
    const [goOut, setGoOut] = useState(false);
    const handleGoOut = () => {

        setGoOut(true);
    }

    return(
        <div className="welcome__general">
            <h1>Добро пожаловать!</h1>
            <p>Lorby - твой личный репетитор</p>

            <img src={img} alt="img"/>
           <center> <button onClick={handleGoOut}>Выйти</button></center>
            <Modal
                isOpen={goOut}
                onRequestClose={() => setGoOut(false)}
                contentLabel="Booking Form"
                className="auth__general--modal"
            >

                <div className="welcome__general--modal">
                    <h3>Выйти?</h3>
                    <p>Точно выйти?</p>
                    <button >Да, точно</button>
                    <button >Нет, остаться</button>
                </div>
            </Modal>


        </div>
    )
}