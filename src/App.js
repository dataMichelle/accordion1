import Accordion from "./Accordion";
import { data } from "./faqsData";

function App() {
  return (
    <main>
      <h2>Accordion Project</h2>
      <p>Click on the questions below to view the answers.</p>
      <menu>
        {data.map((item) => (
          <Accordion key={item.id} {...item} />
        ))}
      </menu>
    </main>
  );
}

export default App;
