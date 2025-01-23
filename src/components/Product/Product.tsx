import './Product.css'

export default function Product (props) {
    const {title, author, text, addToCart, id} = props
    
    return <div className="product">
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{text}</p>
        <button onClick={_=> addToCart(id)}>Add to cart</button>
    </div>
}