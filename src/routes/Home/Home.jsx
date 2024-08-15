import {} from "react"
import Card from "../../components/Card/Card"

import imageCap from '../../assets/img/cap.jpg';
import imageTshirt from '../../assets/img/tshirt.jpg';
import imageSneaker from '../../assets/img/sneaker.jpg';

const Home = () =>{
    
    return (
        <>

        <section className="main">

            <h1>Acessórios</h1>

            <div className="cards">
                <Card produto="Cap jordan react" desc="Boné de cria demais" price="R$100" source={imageCap} />
                <Card  produto="Cap jordan react" desc="Boné de cria demais" price="R$100" source={imageCap}/>
                <Card  produto="Cap jordan react" desc="Boné de cria demais" price="R$100" source={imageCap}/>
            </div>
           

        </section>

        <section className="main">

            <h1>Camisetas & Moletons</h1>


            <div className="cards">
                <Card  produto="T-shirt jordan react" desc="Blusa de cria demais" price="R$100" source={imageTshirt}/>
                <Card produto="T-shirt jordan react" desc="Blusa de cria demais" price="R$100" source={imageTshirt} />
                <Card  produto="T-shirt jordan react" desc="Blusa de cria demais" price="R$100" source={imageTshirt}/>
            </div>
           

        </section>


        <section className="main">

            <h1>Tênis</h1>


            <div className="cards">
                <Card produto="Air jordan react" desc="Tênis de cria demais" price="R$100" source={imageSneaker}/>
                <Card  produto="Air jordan react" desc="Tênis de cria demais" price="R$100" source={imageSneaker}/>
                <Card  produto="Air jordan react" desc="Tênis de cria demais" price="R$100" source={imageSneaker}/>
            </div>
           

        </section>
         
        </>
    )

}


export default Home