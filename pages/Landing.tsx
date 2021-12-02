import { Hustle } from '../types'

interface Props {
    hustle: Hustle
}
function Landing({ hustle }: Props) {
    return (
        <div>
            <div>
            <input type="text" name="Search" id="" placeholder="Search for a product..."/>
            <a href="#">Cart</a>
            </div>            
            <img src={hustle.shop_banner} alt="Hustle Sneaker Shop" width="" height="200px" />
            <img src={hustle.shop_logo} alt="Hustle Sneaker Shop" width="" height="50px" />
            <h3>{hustle.name}</h3>
            <p>Home of the best shoes in town. Get free delivery for orders above KES 5000 countrywide</p>
            <div>
                <a href="#">Facebook</a> / 
                <a href="#">Instagram</a> / 
                <a href="#">Youtube</a>
            </div>
        </div>
    );
}

export default Landing;