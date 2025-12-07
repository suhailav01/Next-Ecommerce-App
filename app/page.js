import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./Banner/page";
import Offers from "./Offer/page";
import Tope from "./topDeales/page";

export default function Home() {
  return (
   <div style={{marginTop:"140px"}}>
    <Banner/>
    <Offers/>
    <Tope/>
   </div>
  );
}
