import {} from "react"
import "./Card.css"
import Button from "../Button/Button"

const Card = (props) => {
    return (
        <>
        
        <div className="card-comp">
            <img className="p-image" src="src/assets/img/Teste.jpeg" alt="Foto do produto" />

            <div className="description">
                <p className="product-title ">
                    {props.name}
                </p>

                <div className="actions">
                    <Button />
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Card