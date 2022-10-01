import styles from './styles.module.scss'
import Mission from "../../components/missionAndVision";
import Navbar from "../../components/navbar";
import RegBanner from "../../components/reginfobanner";
import Story from "../../components/story";
import Whyweserve from "../../components/whyweserve";
import Footer from '../../components/footer';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <RegBanner />
      <h1 className="m-auto mt-[3rem] underline underline-offset-[1rem] mb-[3rem] text-[#004445] font-bold text-[2rem]">
        About Us
      </h1>
      <Mission />
      <Story />
      <Whyweserve />
      <button className={styles.donateBtn}>Donate Now</button>
      <Footer/>
    </div>
  );
}
