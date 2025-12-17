import Banner from './Banner'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import {useState,useEffect} from 'react'

/*
Mémoriser le panier dans le navigateur grâce à localStorage
Recharger le panier au démarrage de l’application
Sauvegarder le panier à chaque modification
 */

function App() {
    const savedCart = localStorage.getItem('cart') //On lit dans le stockage du navigateur
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []) //initialiser le state du panier avec les données récupérées
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart)) //sauvegarder le panier à chaque modification
	}, [cart])
    return (
        <div>
            <Banner />
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            <Footer />
        </div>
    )
}

export default App