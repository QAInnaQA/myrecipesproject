function MyRecipesComponents({label, image, ingredients, totalWeight}) {
    return(<div>
    <div className="container">
        <h2>{label}</h2>
    </div>

    <div className="container">
        <img className="dish" src={image} alt="Dish" width="250" height="250"/>
    </div>

    <ul className="container list">
        <h2>Ingredients:</h2>
            {ingredients.map((ingredient, index) => (
                <li key={index}>
                {ingredient}</li>
            ))}
    </ul>

    <div className="container">
        <h2>Weight: {totalWeight.toFixed()} gr.</h2>
    </div>

    </div>)
}

export default MyRecipesComponents;