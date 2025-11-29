
const plantList = [
    'mostera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

function shoppingList(){
    return (
        <ul>
            {plantList.map((plant) => (
                <li>{plant}</li>
            ))}
        </ul>
    )
}

export default shoppingList