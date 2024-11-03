import ProductList from "./components/ProductList"
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className="container">
    <h1 className="my-4">Our Products</h1>

    <ProductList/>
    
    </div>
    
  )
}

export default App
