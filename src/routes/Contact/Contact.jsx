import { } from "react"

import gmail from '../../assets/img/gmail.png'
import instagram from '../../assets/img/instagram.png'
import whatsapp from '../../assets/img/whatsapp.png'

import './Contact.css'

const Contact = () => {
    return (
        <div id='contact-page'>
            <h1>Contato</h1>
            <h2>Caso tenha alguma dúvida, entre em contato com a gente!</h2>
            <p>E-mail: lojaesport@gmail.com</p>
            <p>Whatsapp: (11) 99774-2213</p>
            <div className="imagens">
                <img src={gmail} alt="gmail" />
                <img src={instagram} alt="instagram" />
                <img src={whatsapp} alt="Whatsapp" />
            </div>
        </div>
    )
}


export default Contact