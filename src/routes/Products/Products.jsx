
import React from "react";
import './products.css';

function Products(){

    

    return(
        <>  
          <section className="products">
                <div className="products-title">
                    <h1>Nossos Produtos</h1>
                </div>
            
                <section className="cards">
                    <div className="card">
                        <img src="/src/assets/img/hoodie.jpg" alt="hoodie-img" className="card-img" />
                        <h3>Moletom</h3>
                        <p>Confortável e estiloso, une aconchego e moda.</p>
                        <p className="price">R$ 100,00</p>
                        <button>Comprar</button>
                    </div>      

                    <div className="card">
                        <img src="/src/assets/img/sneaker.jpg" alt="sneaker-img" className="card-img" />
                        <h3>Tênis</h3>
                        <p>Design inovador, combinando conforto e estilo.</p>
                        <p className="price">R$ 100,00</p>
                        <button>Comprar</button>
                    </div> 

                    <div className="card">
                        <img src="/src/assets/img/cap.jpg" alt="cap-img" className="card-img" />
                        <h3>Boné</h3>
                        <p>Sombra e estilo, perfeito para sua atitude.</p>
                        <p className="price">R$ 100,00</p>
                        <button>Comprar</button>
                    </div> 

                    <div className="card">
                        <img src="/src/assets/img/tshirt.jpg" alt="tshirt-img" className="card-img" />
                        <h3>Camiseta</h3>
                        <p>Versátil e respirável, ideal para toda ocasião.</p>
                        <p className="price">R$ 100,00</p>
                        <button>Comprar</button>
                    </div> 


                </section>
            </section>
        </>
    )
}

export default Products