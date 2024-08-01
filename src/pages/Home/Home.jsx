import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <p>==== home page ====</p>
      <div>
        <section className={styles["section__container"]}>
          <h1>Space Travel: Expanding Horizons Beyond Earth</h1>
        </section>

        <section className={styles["section__container"]}>
          <h2>🌌 Journey into the Future</h2>
          <p>
            In a world where the boundaries of the possible have expanded into the realm of the stars, we stand at the threshold of a new era. Welcome to the future of humanity's survival and exploration. Behold the evolution of technology as it breathes life into desolate worlds, transforming them into flourishing sanctuaries. This is the promise of innovation and the indomitable spirit of human determination.
          </p>
        </section>

        <section className={styles["section__container"]}>
          <h2>🌍 From Neglect to Innovation</h2>
          <p>
            Earth, once the cradle of our civilization, now serves as a poignant reminder of the perils of neglect and environmental decline. Yet, from this somber reflection, emerges a testament to human ingenuity. Our relentless quest for progress has not only healed our wounds but propelled us to the stars, extending our reach far beyond our home planet.
          </p>
        </section>

        <section className={styles["section__container"]}>
          <h2>🚀 Enter Space Travel: Where Dreams Take Flight</h2>
          <p>
            Embark on an extraordinary voyage with our groundbreaking web application, "Space Travel." As a commander engineer, you hold the fate of humanity's exodus in your hands. Prepare to confront the ultimate challenge: guiding humankind from their birthplace to a new destiny among the stars.
          </p>
        </section>

        <section className={styles["section__container"]}>
          <h2>🔧 Engineer, Explorer, Leader</h2>
          <p>
            Space Travel empowers you to engineer and design spacecraft that transcend the boundaries of imagination. Envision a future where life thrives beyond the confines of Earth. Remember, your role extends beyond construction – you are a leader, an explorer, a commander charting the course of humanity's future.
            Immerse yourself in the wonder of exploration as you navigate the interstellar expanse. Seamlessly pilot your fleet of spacecraft through the cosmic void, from one celestial body to another. The universe becomes your domain, and every planet holds the potential for a new home.
          </p>
        </section>

      </div>
    </>
  );
}

export default Home;