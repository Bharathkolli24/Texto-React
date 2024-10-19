// import './App.css';
// import React, { useState } from 'react'
// import Navbar from './components/Navbar';
// import News from './components/News';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

// const App = () => {
//   const pageSize = 6;
//   const apiKey= process.env.REACT_APP_NEWS_API;     //by writing this line we can get apiKey which we defined in .env.local file

//   const [progress, setProgress] = useState(0)


//     return (
//       <div>
//         <BrowserRouter>
//         <Navbar/>
//         <LoadingBar
//         height={3}                          //by default height of the loading bar was 2 . I have increased to 3 
//         color='#f11946'
//         progress={progress}
//         />
//         {/* <News setProgress={setProgress} apikey={apikey} pageSize={pageSize} category="Sports"/>     we can pass it as props by using {props.pageSize} */}
//         <Routes>
//           <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" />} />
//           <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key='business' category="business" />} />
//           <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key='entertainment' category="entertainment" />} />
//           <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key='general' category="general" />} />
//           <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key='health' category="health" />} />
//           <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key='science' category="science" />} />
//           <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key='sports' category="sports" />} />
//           <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key='technology' category="technology" />} />
//           <Route path="/politics" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key='politics' category="politics" />} />
//         </Routes>
//         </BrowserRouter>
//       </div>
//     )
// }

// export default App;

import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = ()=> {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API                   //by writing this line we can get apiKey which we defined in .env.local file
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <BrowserRouter>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
      {/*<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} category="Sports"/>     we can pass it as props by using {props.pageSize} */}
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key='business' category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key='entertainment' category="entertainment" />} />
          <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key='general' category="general" />} />
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key='health' category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key='science' category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key='sports' category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key='technology' category="technology" />} />
          <Route path="/politics" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key='politics' category="politics" />} />
        </Routes>
        </BrowserRouter>
      </div>
    )
 
}

export default App;