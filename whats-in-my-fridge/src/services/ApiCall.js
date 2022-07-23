import axios from "axios";

    export async function callRecipe(ingredients){


        const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_FRIDGE_API_KEY}&ingredients=${ingredients}&number=16`)
    

    return response
}

// export async function callInstructions(id){
//     const API_KEY= 'c16f41449f124bb79348ad2f105fd2bb'

//     const instructionsResponse = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
//     console.log()


// return instructionsResponse;
// }

