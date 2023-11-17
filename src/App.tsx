import Film from "./containers/Film/Film";
import Mem from "./containers/Mem/Mem";

function App() {
  return (
    <div className="container row">
      <div className="col">
        <Film />
      </div>
      <div className="col">
        <Mem />
      </div>
    </div>
  );
}

export default App;
