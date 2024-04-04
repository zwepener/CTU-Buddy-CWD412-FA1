import welcome_img from '../../resources/images/welcome.jpg';
import decor_1_img from '../../resources/images/home-decor-1.jpg';
import decor_2_img from '../../resources/images/home-decor-2.png';

import './Home.css';

export default function Home() {
  return (
    <div className="default-box content" id="home-container">
      <section id="welcome">
        <div className="image-container">
          <img src={welcome_img} alt="Welcome" />
          <img src={decor_1_img} alt="decor-1" />
          <img src={decor_2_img} alt="decor-2" />
        </div>
      </section>
    </div>
  );
}
