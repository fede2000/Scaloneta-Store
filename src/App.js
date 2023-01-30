import { BrowserRouter, Route, Routes } from "react-router-dom";
//  Pages
import { Home, Contact, Login, Reset, Register} from "./pages/index"
//  Components
import { Header, Footer} from "./components"
import { GlobalStyles } from "./styles/GlobalStyles";
import Main from "./components/Main/Main";


function App() {
  return (
    <>
    <GlobalStyles></GlobalStyles>
      <BrowserRouter>
        <Header></Header>

          <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/contact" element={ <Contact/> }/>
            <Route path="/login" element={ <Login/> }/>
            <Route path="/register" element={ <Register/> }/>
            <Route path="/reset" element={ <Reset/> }/>
          </Routes>
   


        <Footer></Footer>
        
      
      </BrowserRouter>
    
    </>
  );
}

export default App;
