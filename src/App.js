import Navbar from "./component/Navbar"
import Section from "./component/Section";
import Sectiontwo from "./component/Sectiontwo";
// import Cardfile from "./component/Cardfile";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Section/>
     <Sectiontwo/>
     {/* <Cardfile/> */}
    </div>
  );
}

export default App;
