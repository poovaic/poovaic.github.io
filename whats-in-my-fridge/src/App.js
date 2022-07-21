import React from 'react';
import './App.css';
import {NavLink,Routes,Route} from 'react-router-dom';
import Home from './screens/Home'
import NoMatch from './screens/NoMatch';
import MyFridge from './screens/MyFridge';
import Recipe from './screens/Recipe';
import About from './screens/About';
//import Search from './components/Search';



function App() {
  return (
    <div className="App">
      <div className="links">
    <nav>
            <NavLink to={"/MyFridge"}>My Fridge</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            
          </nav>
      </div>
      {/* <div className="search">
      <Search/>
      </div> */}
      <Routes>

        <Route path="/MyFridge" element={<Home/>}/>
        <Route path="/MyFridge/:recipes" element={<MyFridge/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/MyFridge/:recipes/:recipe_id" element={<Recipe/>}/> 
        <Route path="*" element={<NoMatch/>}/>
      </Routes>


    </div>
  );
}

export default App;


//Navlink:starts up the url and provides the navigation b/w components without triggering a refresh
// function App() {
//   return (
//     <div className="App">
//       <div className="links">
//           <nav>
//             <NavLink to={"/"}>Home</NavLink>
//             <NavLink to={"/about"}>About</NavLink>
//             <NavLink to={"/posts"}>Posts</NavLink>
//           </nav>
//       </div>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//         {/* //i want to target posts first and pass props as data itself. */}
//         <Route path="/posts" element={<Posts postsData={data}/>}/>
//         <Route path="/posts/:post_id" element={<Post {...data} />}/> 
//         {/* using spread operator and sending a copy of the data to post. why? the data file each has id. does it need a prop name? for this we are not giving prop nmae. we are giving prop name only for parent here. the whole point of posts is that, post is depending on posts.  */}
//         <Route path="*" element={<NoMatch/>}/>
//       </Routes>


//     </div>
//   );
// }