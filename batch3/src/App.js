// import Button from './atoms/Button';
// import First from './First';
// import SearchBar from './molecules/SearchBar';
// import Parent from './Parent';
// import Second from './Second';
// import InputField from './atoms/InputField';  
// import Page from './pages/Page.js';
// import Heading from './atoms/Heading';
// import Counter from './Counter';


// function App() {
//   return (
//     <>
//       <Heading/>
//       <Second/>
//       <First/>
//       <Parent/>
//       <Button/>
//       <InputField/>
//       <SearchBar/>
//       <Counter/>
//     </>
//   );
// }

// export default App;

// // const fruits=["Apple", "Banana", "Orange"];
// function App(){
//   return(
//     <div>
//         <Counter/>
//     </div>
// //    <div>
// //     {fruits.map((fruit)=>(
// //       <p key={fruit}>{fruit}</p>
// //     ))}
//    //</div> 
//   )
// } 
// export default App;




// // import HomePage from "./components/pages/HomePage";

// // function App() {

// //     return (
// //         <HomePage />
// //     );
// // }

// // export default App;





// import MyCounter from "./Counter.js";
// import{Add, Subtract, Multiply} from "./Math.js";
// import {Routes, Route} from "react-router-dom";
// import Navbar from "./Navbar";

// function App() {
//   return (
//   <>
//     <Navbar/>
//     <Routes>
//       <Route path='/Counter' element={<MyCounter/>}/>
//       <Route path='/Add' element={<Add/>}/>
//       <Route path='/Subtract' element={<Subtract/>}/>
//       <Route path='/Multiply' element={<Multiply/>}/>
//       <Route path='*' element={<h1>Incorrect path</h1>}/>
//     </Routes>
//      {/* <MyCounter/> */}
//      <Add/>
//      <Subtract/>
//      <Multiply/>
//   </>  
//   );
// }

// export default App;





import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Books from "./pages/Books";
import Book1 from "./pages/Book1";
import Book2 from "./pages/Book2";
import Authors from "./pages/Authors";
import Author1 from "./pages/Author1";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />

        {/* Manual Book Routes */}
        <Route path="/books/atomic-habits" element={<Book1 />} />
        <Route path="/books/alchemist" element={<Book2 />} />

        <Route path="/authors" element={<Authors />} />
        <Route path="/authors/james-clear" element={<Author1 />} />

        <Route path="/about" element={<About />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;