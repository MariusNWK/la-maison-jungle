import { useEffect, useState } from "react";
import "../styles/Cart.css";

function Cart({ catSelected, cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`;
  }, [total, catSelected])

  /*
  Comment faire pour exécuter un effet uniquement après le premier render de mon composant ?
  Par exemple, si je veux récupérer des données sur une API ?
  Eh bien, dans ce cas, il faut renseigner un tableau de dépendances vide :

  useEffect(() => {
    alert('Bienvenue dans La maison jungle');
  }, [])
  */

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
              </div>
            ))}
          </ul>
          <h3>Total :{total}€</h3>
          <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
