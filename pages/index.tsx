import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { Product, Category, SoryBy, Hustle } from '../types'

import ProductList from '../components/ProductList'

import SelectBox from '../components/SelectBox';

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
        setFetchError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className={styles.container}>
      <h2>Products Page</h2>
      {
        loading ? (
          <h3>Loading...</h3>
        ) : null
      }
      <div>
        <SelectBox name="Sort By" values={sortBy} />
        <SelectBox name="Categories" values={categories} />
      </div>
      <ProductList products={products}/>
    </div>
  )
}

export default Home
