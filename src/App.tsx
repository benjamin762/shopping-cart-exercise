import './App.css'
import Header from './components/Header/Header'
import Product from './components/Product/Product'
import {useState} from 'react'

function App() {
  const books = [
    {
      title: 'Sherlock Holmes',
      author: 'Conan Doyle',
      text: 'Book about a detective.'
    },
    {
      title: 'Eloquent Javascript',
      author: 'Unkown',
      text: 'A programming book.'
    },
    {
      title: 'Rutiga kokboken',
      author: 'ICA',
      text: 'Bästa kokboken'
    },
    {
      title: 'Norran',
      author: 'Various',
      text: 'Not really a book :/'
    }
  ]
  let [cart, setCart] = useState(new Array<number>())

  function addToCart (id: number) {
    if (!cart.includes(id)) {
      setCart([...cart, id])
    }
  }


  const products = books.map((book, index) => <Product key={index} id={index} addToCart={addToCart} title={book.title} author={book.author} text={book.text} />)
  
  return (
    <>
      <Header cart={books.filter((_, i) => cart.includes(i))}/>
      <main>
        {products}
      </main>
    </>
  )
}

export default App
