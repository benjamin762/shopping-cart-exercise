import Cart from '../Cart/Cart'
import './Header.css'

export default function Header ({cart}) {
    return <header>
        <img src="" alt="Sherlock" />
        <Cart cart={cart} />
    </header>
}