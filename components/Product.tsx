import { Product } from '../types'

interface Props {
    product: Product
}

const Product = ({ product }: Props) => {
    return (
        <div>
            <img src={product.product_image} alt={product.name} height="300px" width="400px" />
            <p>{product.name}</p>
            <p>Ksh {product.price}</p>
            <div>
                <button>Buy now</button>
                <button>Add to cart</button>
            </div>
        </div>
    );
}

export default Product;