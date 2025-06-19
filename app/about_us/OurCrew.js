import Image from "next/image";
import styles from "./about_us.module.css";

const OurCrew = () => {
  return (
    <div className={styles.crewGrid}>
      <div>
        <Image
          src="/crew/image-anousheh-ansari.png"
          alt="Anousheh Ansari"
          width={150}
          height={150}
        />
        <h4>Anousheh Ansari</h4>
        <p>First Iranian woman in space. Brings global vision and inspiration to our missions.</p>
      </div>

      <div>
        <Image
          src="/crew/image-douglas-hurley.png"
          alt="Douglas Hurley"
          width={150}
          height={150}
        />
        <h4>Douglas Hurley</h4>
        <p>Former NASA astronaut and spacecraft commander. Ensures safe operations and mission success.</p>
      </div>

      <div>
        <Image
          src="/crew/image-mark-shuttleworth.png"
          alt="Mark Shuttleworth"
          width={150}
          height={150}
        />
        <h4>Mark Shuttleworth</h4>
        <p>Entrepreneur and space tourist. Shares his passion for discovery and adventure.</p>
      </div>

      <div>
        <Image
          src="/crew/image-victor-glover.png"
          alt="Victor Glover"
          width={150}
          height={150}
        />
        <h4>Victor Glover</h4>
        <p>Pilot and engineer with hands-on space mission experience. Focused on innovation and safety.</p>
      </div>
    </div>
  );
};

export default OurCrew;
