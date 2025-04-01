import { useState } from 'react'
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';
import Tabs from './Tabs.jsx';
import Section from './Section.jsx';

export default function Examples() {

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
    <Section title="Examples" id="examples">
      <Tabs
        ButtonsContainer="menu" //Pass custom container as a props which has standard component as a value
        buttons={
        <>
          <menu>
            <TabButton isSelected={selectedTopic == 'components'} onSelect={() => onButtonSelected('components')}> Components</TabButton>
            <TabButton isSelected={selectedTopic == 'jsx'} onSelect={() => onButtonSelected('jsx')}> JSX</TabButton>
            <TabButton isSelected={selectedTopic == 'props'} onSelect={() => onButtonSelected('props')}> Props</TabButton>
            <TabButton isSelected={selectedTopic == 'state'} onSelect={() => onButtonSelected('state')}> State</TabButton>
          </menu>
        </>
      } >
  {tabContent}
      </Tabs>



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
     
    


    </Section>
  )
}