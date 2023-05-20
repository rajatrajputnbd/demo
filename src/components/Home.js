import React from "react";

function Home() {
    return(
        <div>
            <div className="add-to-cart">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
            <h1>Home Componenet</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://help.apple.com/assets/640A52196275DE31D4371B5E/640A52226275DE31D4371B8B/en_US/79a7175aaf9c5e2b255b0efa4f223ee5.png" />
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>Price: $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;