import guitarImg from "../../assets/guitar.jpg"; 
import ButtonCard from "../ButtonCard";
import "./styles.css"

export default function CatalogCard() {
    return (
        <div className="inst-card">
            <img src={guitarImg} alt="Guitar" />
            <h3>Guitarra Tom Anderson</h3>
            <p><i>Guitarra Tom Anderson modelo Telecaster Custom Shop</i></p>
           <ButtonCard/>
        </div>
    );
}