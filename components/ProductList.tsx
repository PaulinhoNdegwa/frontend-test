import { Product } from '../types'
import ProductCard from './Product';
import styled from 'styled-components'
interface Props {
    products: Product[]
}

const ProductList = ({ products }: Props) => {
    return (
        <ProductsContainer>
            {
                products && products.map((product, index) => {
                    return (
                        <ProductCard key={index} product={product}/>
                    )
                })
            }
        </ProductsContainer>
    );
}
const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 10px;
  margin: 20px 0;
  width: 100%;
`
export default ProductList;