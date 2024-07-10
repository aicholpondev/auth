import img from "../../assets/image/lorby-img.png";


export default function Welcome(){


    return(
        <div className="welcome__general">
            <h1>С возвращением!</h1>
            <p>Lorby - твой личный репетитор</p>

            <img src={img} alt="img"/>
            <center> <button >Выйти</button></center>



        </div>
    )
}