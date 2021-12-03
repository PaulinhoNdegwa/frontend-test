import { Product } from '../types'
import styled from 'styled-components'

interface Props {
    product: Product
}

const ProductCard = ({ product }: Props) => {
    return (
        <ProductContainer>
            <ProductImage src={product.product_image} alt={product.name} height="300px" width="400px" />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>Ksh {product.price}.00</ProductPrice>
            <ProductActionButtons>
                <ProductActionButton>Buy now</ProductActionButton>
                <ProductActionButton>Add to cart</ProductActionButton>
            </ProductActionButtons>
        </ProductContainer>
    );
}

const ProductContainer = styled.div`
  text-align: left;
  width: 30%;
  margin: 20px 0;
`
const ProductImage = styled.img`
  width: 100%;
  border-radius: 5px;
  background: #eee;
`
const ProductName = styled.p`
  color: #1d1d60;
  font-size: 18px;
`

const ProductPrice = styled.p`
  color: #888;
  font-size: 17px;
`

const ProductActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const ProductActionButton = styled.button`
  padding: 6px 15px;
  background: #fff;
  font-size: 16px;
  border: 1px #888 solid;
  border-radius: 3px;
`
export default ProductCard;