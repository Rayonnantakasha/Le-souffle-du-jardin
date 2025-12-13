/* eslint-disable no-lone-blocks */
import { useState } from 'react'
import { plantList } from '../Datas/plantList'
import PlantItem from './PlantItm'
import Categories from './Categories'
import '../styles/ShoppingList.css'


function ShoppingList({ cart, updateCart }) {
    //Fonction pour recupérer et lister les Categories se trouvant dans PlantList
    const [activeCategory, setActiveCategory] = useState('')
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    
    //Fonction pour Ajouter les élements aux panier
    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name) //verifie si la plante est déjà dans le panier

        //Si elle existe, on enlève l’ancienne version pour la remplacer par une copie avec +1 quantité.
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    return (
        <div className='lmj-shopping-list'>
            {/*hoppingList passe des données à Categories (props descendant).*/}
            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />

            <ul className='lmj-plant-list'>
                {/*Si aucune catégorie sélectionnée → tout afficher, Sinon → afficher uniquement les plantes correspondant à activeCategory*/}
                {plantList.map(({ id, cover, name, water, light, price, category }) =>
                    !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <PlantItem
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                price={price}
                            />
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>
                    ) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList