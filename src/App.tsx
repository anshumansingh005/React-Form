import { ReactElement } from "react";
import "./App.css";
import Register from "./Register";
const App: React.FC = (): ReactElement => {
  return (
    <main className="App">
      React Form
      <Register />
    </main>
  );
};

export default App;
