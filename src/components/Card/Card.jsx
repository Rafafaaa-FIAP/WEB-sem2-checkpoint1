import {} from "react"
import "./Card.css"

const Card = (props) => {
    return (
        <>
        
        <div className="card">
                        <img src={props.source} alt="sneaker-img" className="card-img" />
                        <h3>{props.produto}</h3>
                        <p>{props.desc}</p>
                        <p className="price">{props.price}</p>
                        <button>Comprar</button>
                    </div> 
        
        </>
    )
}

export default Card