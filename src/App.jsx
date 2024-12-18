import Layout from "./components/Layout"
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Solutions from './components/pages/Solutions';
import AboutUsPage from './components/pages/AboutUsPage';
import ContactUsPage from './components/pages/ContactUsPage';
import ProductDetail from './components/pages/ProductDetail';
import AllProducts from './components/pages/AllProducts';
import ScrollToTop from './components/ScrollToTop';
const App = () => {


  return (
    <div className="flex flex-col">
      <Layout>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/solutions" element={<Solutions />}/>
      <Route path="/about-us" element={<AboutUsPage />}/>
      <Route path="/contacts" element={<ContactUsPage />}/>
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/products" element={<AllProducts />} />
    </Routes>
      </Layout>
    </div>
  );
};

export default App;
