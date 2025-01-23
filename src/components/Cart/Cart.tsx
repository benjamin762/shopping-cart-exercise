import './Cart.css'

export default function Cart({cart}) {
    return <div>
        <details className="cart">
    <summary>
        Cart <span>{cart.length}</span>
    </summary>
    <ul>
        { cart.length ? cart.map(item => <li> {item.title} </li>) : "Cart is empty." }
    </ul>
    </details>
    </div>
}