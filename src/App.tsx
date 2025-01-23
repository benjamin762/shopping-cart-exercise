import './App.css'
import Header from './components/Header/Header'
import Product from './components/Product/Product'

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
  const products = books.map((book, index) => <Product key={index} title={book.title} author={book.author} text={book.text} />)
  return (
    <>
      <Header />
      <main>
        {products}
      </main>
    </>
  )
}

export default App
