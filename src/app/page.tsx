import Classes from "./component/Classes";
import Footer from "./component/Footer";
import Getintouch from "./component/Getintouch";
import Personbio from "./component/Personbio";
import Project from "./component/Project";

export default function Home() {
  return (
    <div className="text-primary"> 
      <Personbio/>
      <Project/>
      <Classes/>
      <Getintouch/>
      <Footer/>
    </div>
  );
}
