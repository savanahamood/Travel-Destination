import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";

const data=require('../db.json')


function Home(){
   return(
    <>
    <Header/>
    <Tours arrayData={data}/>
    <Footer/>
    </>
   );
}
export default Home;