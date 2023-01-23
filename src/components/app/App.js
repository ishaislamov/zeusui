import { Banner } from "../banner/Banner";
import { Company } from "../company/Company";
import { Header } from "../header";
import { Ourteam } from "../ourteam/Ourteam";
import './App.scss'

function App() {
  return (
      <div className="App">
        <Header />
        <Banner />
        <Company />
        <Ourteam />
      </div>
  );
}

export default App;
