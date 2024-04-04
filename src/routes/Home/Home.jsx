import {} from "react"
import Card from "../../components/Card/Card"


const Home = () =>{
    
    return (
        <>

        <section className="main">

            <h1>Acessórios</h1>

            <div className="cards">
                <Card produto="Cap jordan react" desc="Boné de cria demais" price="R$100" source="/src/assets/img/cap.jpg" />
                <Card  produto="Cap jordan react" desc="Boné de cria demais" price="R$100" source="/src/assets/img/cap.jpg"/>
                <Card  produto="Cap jordan react" desc="Boné de cria demais" price="R$100" source="/src/assets/img/cap.jpg"/>
            </div>
           

        </section>

        <section className="main">

            <h1>Camisetas & Moletons</h1>


            <div className="cards">
                <Card  produto="T-shirt jordan react" desc="Blusa de cria demais" price="R$100" source="/src/assets/img/tshirt.jpg"/>
                <Card produto="T-shirt jordan react" desc="Blusa de cria demais" price="R$100" source="/src/assets/img/tshirt.jpg" />
                <Card  produto="T-shirt jordan react" desc="Blusa de cria demais" price="R$100" source="/src/assets/img/tshirt.jpg"/>
            </div>
           

        </section>


        <section className="main">

            <h1>Tênis</h1>


            <div className="cards">
                <Card produto="Air jordan react" desc="Tênis de cria demais" price="R$100" source="/src/assets/img/sneaker.jpg"/>
                <Card  produto="Air jordan react" desc="Tênis de cria demais" price="R$100" source="/src/assets/img/sneaker.jpg"/>
                <Card  produto="Air jordan react" desc="Tênis de cria demais" price="R$100" source="/src/assets/img/sneaker.jpg"/>
            </div>
           

        </section>
         
        </>
    )

}


export default Home