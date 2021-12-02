import { Product } from '../types'
import ProductCard from './Product';

interface Props {
    products: Product[]
}

const ProductList = ({ products }: Props) => {
    return (
        <div>
            {
                products && products.map((product, index) => {
                    return (
                        <div key={index}>
                            <ProductCard product={product}/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProductList;