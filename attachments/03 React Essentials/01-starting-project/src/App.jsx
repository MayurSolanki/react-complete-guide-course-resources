import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';



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
  const [selectedTopic, setSelectedTopic] = useState(null)

  function onButtonSelected(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log("onButtonSelected", selectedButton);
  }

  let tabContent = <p> Select Topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content"> <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>)
  }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {/* Note:===>  Dynamic using iteration */}
            {CORE_CONCEPTS.map(item => <CoreConcept key={conceptItem.title} {...item} />)}
             {/* Note:===>  Manually Getting entries using index */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic == 'components'} onSelect={() => onButtonSelected('components')}> Components</TabButton>
            <TabButton isSelected={selectedTopic == 'jsx'} onSelect={() => onButtonSelected('jsx')}> JSX</TabButton>
            <TabButton isSelected={selectedTopic == 'props'} onSelect={() => onButtonSelected('props')}> Props</TabButton>
            <TabButton isSelected={selectedTopic == 'state'} onSelect={() => onButtonSelected('state')}> State</TabButton>
          </menu>

          {/* ========== Approach 1 : Dynamic Content ========== */}
          {/* {!selectedTopic ? <p> Select Topic</p> : null}
          {selectedTopic ? <div id="tab-content"> <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>  </div> : null} */}

           {/* ========== Approach 2 : Dynamic Content ========== */}
          {/* {!selectedTopic && <p> Select Topic</p> }
          {selectedTopic && <div id="tab-content"> <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>  </div> } */}

        {/* ========== Approach 3 : Dynamic Content ========== */}
        {tabContent}


        </section>

      </main>
    </div>
  );
}

export default App;
