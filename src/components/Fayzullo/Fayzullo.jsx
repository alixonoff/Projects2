import './Fayzullo.css'

const Fayzullo = () => {
    let img = "https://png.pngtree.com/png-vector/20240803/ourmid/pngtree-fresh-tasty-mix-fruit-salad-isolated-on-transparent-background-png-image_13366195.png"
    return (
        <>
            <div className="containerf">
                <div className="leftf">
                    <h1>Just <span>Eat healthy</span> <br />
                        food to live a <br />
                        healthier life
                    </h1>
                    <p>Enjoy a healthy life by eating heathy foods <br />
                        that have extraordinary flavors that make <br />
                        your life healthier for today and in the future</p>
                    <button>Order Now</button>
                </div>
                <div className="rightf">
                    <img src={img} alt="Fruit-Salad-Bowl" />
                </div>
            </div>
        </>
    )
}

export default Fayzullo