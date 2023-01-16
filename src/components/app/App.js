import { Banner } from "../banner/Banner";
import { Company } from "../company/Company";
import { Header } from "../header";
import './App.scss'

function App() {
  return (
      <div className="App">
        <Header />
        <Banner />
        <Company />
      </div>
  );
}

export default App;
