import decor_1_img from "./assets/static/images/home-decor-1.jpg";
import decor_2_img from "./assets/static/images/home-decor-2.png";
import decor_3_img from "./assets/static/images/home-decor-3.png";

import "./Home.css";

export default function Home() {
  return (
    <div id="home-container">
      <section class="hero">
        <h1>Welcome to CTU Buddy</h1>
        <p>Explore our world-class educational features.</p>
      </section>

      <section class="s default-box">
        <h2 class="header">
          CTU
          <br />
          Buddy
        </h2>
        <div class="wave">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
      <div class="default-box content image-container">
        <img class="default-box" src={decor_1_img} alt="Home Decor 1" />
        <img class="default-box" src={decor_2_img} alt="Home Decor 2" />
        <img class="default-box" src={decor_3_img} alt="Home Decor 3" />
      </div>
    </div>
  );
}
