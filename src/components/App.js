import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import { useEffect, useState } from 'react'

function App() {
	const savedCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	const [catSelected, setCatSelected] = useState("...");
	const [isFooterShown, setIsFooterShown] = useState(true);

	function handleClick() {
		setIsFooterShown(!isFooterShown);
	}

	useEffect (() => {
		localStorage.setItem('cart', JSON.stringify(cart));
    console.log("Le panier est sauvegardé");
	}, [cart])

	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
        <Cart catSelected={catSelected} cart={cart} updateCart={updateCart} />
				<ShoppingList catSelected={catSelected} setCatSelected={setCatSelected} cart={cart} updateCart={updateCart} />
			</div>
			<button onClick={handleClick}>
				{isFooterShown ?
					<div>Cacher</div> :
					<div>Afficher</div>}
			</button>
			{isFooterShown && <Footer />}
		</div>
	)
}

export default App
