import FooterComponent from "./components/ui/Footer.component";
import NavbarComponent from "./components/ui/Navbar.component";


function App() {
  return (
    <div className="App">
        {/*Navbar */}
        <NavbarComponent/>
        {/*Wrapper */}
        <div className="wrapper">
          <h1>wrapper</h1>
        </div>
        {/*Footer */}
        <FooterComponent/>
    </div>
  );
}

export default App;
