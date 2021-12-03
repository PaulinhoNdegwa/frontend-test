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
  width: 360px;
  margin: 20px 0;
  padding-bottom: 20px;
  border-radius: 5px;

  @media only screen and (max-width: 1200px){
    width: 300px;
    margin: 20px auto;
  }

  @media only screen and (max-width: 780px){
    width: 220px;
    margin: 20px auto;
  }

  @media only screen and (max-width: 480px){
    width: 180px;
    margin: 20px auto;
  }
`
const ProductImage = styled.img`
  width: 100%;
  border-radius: 5px;
  background: #eee;

  @media only screen and (max-width: 780px){
    height: 175px;
  }
`
const ProductName = styled.p`
  color: #1d1d60;
  font-size: 18px;

  @media only screen and (max-width: 780px){
    font-size: 14px;
  }
`

const ProductPrice = styled.p`
  color: #888;
  font-size: 17px;

  @media only screen and (max-width: 780px){
    font-size: 13px;
  }
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
  border: 1px #a7a7a7 solid;
  color: #414141;
  border-radius: 3px;
  :hover {
      background: #0c20db;
      color: #fff;
      cursor: pointer;
      border: none;
      outline: none;
  }
  @media only screen and (max-width: 780px){
    font-size: 12px;
    padding: 4px 7px;
    border-radius: 2px;
  }
`
export default ProductCard;