import "./Moxista.css"
import firstImg from "../Moxista/icon1.png"
import secondImg from "../Moxista/icon2.png"
import uchunchi from "../Moxista/icon3.png"

export default function Moxista() {
  return (
    <div className='container'>
      <h1>Why Choose US?</h1>
      <span>Organic food is grown without the use of synthetic chemicals</span>


     <div className="intro">
     <div className="card1">
        <img src={firstImg} alt="" />
        <h2>Easy to order</h2>
        <p>foods include fresh produce, <br />
         meats as well as processed</p>
      </div>
      <div className="card1">
        <img src={secondImg} alt="" />
        <h2>Live Order</h2>
        <p>Place your online Order easily <br />
         and get the food instantly</p>
      </div>
      <div className="card1">
        <img src={uchunchi} alt="" />
        <h2>100% Organic</h2>
        <p>Organic food is grown without <br />
         the use of synthetic chemicals</p>
      </div>
      </div>


     <div className="intro2">
     <div className="card4">
      <h3>40+</h3>
      <div>Food Partners</div>
      </div>
      <div className="card4">
      <h3>459+</h3>
      <div>Trusted Clients</div>
      </div>
      <div className="card4">
      <h3>12k+</h3>
      <div>Order Online</div>
      </div>
     </div>

    
    </div>
  )
}
