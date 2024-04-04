import {} from "react"

import gmail from '../../assets/img/gmail.jpeg'
import instagram from '../../assets/img/instagram.jpeg'
import whatsapp from '../../assets/img/whatsapp.jpeg'

import './Contact.css'

const Contact = ()=>{
    return (
        <>
            <h1>
                Contato
            </h1>
            <div className="imagens">
                <img src={gmail} alt="gmail" />
                <img src={instagram} alt="instagram" />
                <img src={whatsapp} alt="Whatsapp" />
            </div>
            

            <p>Whatsapp: (11)99774-2213</p>
            <p>E-mail: Lojaesport@gmail.com</p>
        </>
    )
}


export default Contact