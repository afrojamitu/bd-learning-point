import Header from './layouts/Header.jsx';
import Footer from './layouts/Footer.jsx';
import { Outlet } from 'react-router-dom';


function Main() {

  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Main