import OurValues from "./OurValues";
import OurCrew from "./OurCrew";
import OurPartners from "./OurPartners";
import styles from './about_us.module.css';

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>

        <section className="card">
          <h2>Our Values</h2>
          <OurValues />
        </section>

        <section className="card">
          <h2>The Crew</h2>
          <OurCrew />
        </section>

        <section className="card">
          <h2>Our Partners</h2>
          <OurPartners />
        </section>
        
      </main>
    </div>
  );
};

<section className="card">
  <h2>Our Partners</h2>
  <OurPartners />
</section>


export default Crew;
