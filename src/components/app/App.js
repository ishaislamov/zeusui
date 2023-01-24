import { Banner } from "../banner/Banner";
import { Collection } from "../collection/Collection";
import { Company } from "../company/Company";
import { Header } from "../header";
import { Ourteam } from "../ourteam/Ourteam";
import { Provide } from "../provide/Provide";
import './App.scss'

function App() {
  return (
      <div className="App">
        <Header />
        <Banner />
        <Company />
        <Ourteam />
        <Collection />
        <Provide />
      </div>
  );
}

export default App;
