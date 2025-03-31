import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concept</h2>
            <ul>
                {/* Note:===>  Dynamic using iteration */}
                {CORE_CONCEPTS.map(item => <CoreConcept key={item.title} {...item} />)}
            {/* Note:===>  Manually Getting entries using index */}
            {/* <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} /> */}
            </ul>
        </section>
    )
}