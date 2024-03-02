import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductLists from "./pages/ProductLists";
import ProductDetail from "./components/Product/ProductDetail";

function App() {
  return (
    <Router basename={import.meta.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<ProductLists />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
