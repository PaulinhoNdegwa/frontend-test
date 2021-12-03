import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { Product, Category, SoryBy, Hustle } from '../types'

import ProductList from '../components/ProductList'

import SelectBox from '../components/SelectBox';
import Landing from '../components/Landing'

const Home: NextPage = () => {
  const [hustle, setHustle] = useState<Hustle>()
  const [sortBy, setSortBy] = useState<SoryBy[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [fetchError, setFetchError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('https://run.mocky.io/v3/5194b007-b9b9-4748-a63f-f5db0ee4cd47')
      .then(res => {
        setHustle(res.data.hustle)
        setSortBy(res.data.sort_by)
        setCategories(res.data.categories)
        setProducts(res.data.products)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setFetchError(err.message)
        setLoading(false)
      })
  }, [])
  return (
    <MainContainer>
      {
        loading && !products.length ? (
          <h3>Loading...</h3>
        ) : (
          <div>
            {
              hustle ? <Landing hustle={hustle} /> : null
            }
            <ProductFilters>
              <SelectBox name="Sort By" values={sortBy} />
              <SelectBox name="Categories" values={categories} />
            </ProductFilters>
            <ProductList products={products} />
          </div>
        )
      }

      {
        fetchError ? (
          <div>Error fetching products. Try again later or contact the admin</div>
        ) : null
      }

    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  text-align: center;

  @media only screen and (max-width: 1200px){
    width: 100%;
  }
`

const ProductFilters = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0;

  @media only screen and (max-width: 1200px){
    margin: 10px 20px;
  }
  @media only screen and (max-width: 800px){
    margin: 10px;
  }
`
export default Home
