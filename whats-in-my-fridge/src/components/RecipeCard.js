import React from "react";
import {useNavigate} from 'react-router-dom';

function RecipeCard(props){
console.log("props in recipecard",props)
const navigate = useNavigate();

    return(
        <div className="recipe-card" key={props.id}>
            <img src={props.image} alt="Post banner"/>
            
            <div className="modal">
            <h3>{props.title}</h3>
            <button onClick={()=>navigate(`/MyFridge/${props.id}`)}>Click for Recipe</button>
            </div>

        </div>
    
    )
}
export default RecipeCard

// import React from 'react';
// import {useNavigate} from 'react-router-dom';
// function PostCard(props){

//     const navigate = useNavigate();
//     //saving function to variable so i can call when its needed
//     //i want button to navigate me to another component.


//     return(
//         <div className="item" key={props.id}>
//             <img src={props.image} alt="Post banner"/>
//             <div className="modal">
//                 <h3>{props.title}</h3>
//                 {/* button is going to navigate to another component. on click calling hooks by ()=> . we need to use backticks */}
//                 <button onClick={()=>navigate(`/posts/${props.id}`)}>Read More</button>

//             </div>
//         </div>
//     )
// }
// export default PostCard