import { BrowserRouter ,Routes, Route} from "react-router-dom"
import HomePage from "./pages/home"
import Navbar from "./components/NavBar"

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
