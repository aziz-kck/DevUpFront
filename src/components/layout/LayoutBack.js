import Footer from "../back/Footer";
import Navbar from "../back/Navbar";
import VerticalNav from "../back/VerticalNav";
const LayoutBack = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='main-wrapper'>
        <VerticalNav />
        {children}
      </div>
      <Footer/>
    </>
  );
};

export default LayoutBack;
