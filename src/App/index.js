
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../containers/AboutPage';
import ProductsPage from '../containers/ProductsPage';
import ContactsPage from '../containers/ContactsPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFoundPage from '../containers/NotFoundPage';



function App() {
  return (
    <>
      
        <Header />
        
        <Routes>  
          <Route exact path='/about' element={<AboutPage />}></Route>
          <Route exact path='/products' element={<ProductsPage />}></Route>
          <Route exact path='/contacts' element={<ContactsPage />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>    

        <Footer />

    </>

  );
}

export default App;
