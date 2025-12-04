import {plantList} from "../Datas/plantList";


function shoppingList(){
   const categories = plantList.reduce((acc, plant) =>
   acc.includes(plant.category) ? acc : acc.concat(plant.category),
       []
   )
    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key = {cat}>{cat}</li>
                ))}
            </ul>
            <ul>
                {plantList.map(category => (plant) => (
                    <li key = {plant.id}>{plant.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default shoppingList