import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';


// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title}></img>
//       <h3>{ props.title}</h3>
//       <p>{ props.description}</p>
//     </li>
//   )
// }



function App() {

  return (
    <div>
      <Header></Header>
      <main>
        <CoreConcepts />
        <Examples />

      </main>
    </div>
  );
}

export default App;
