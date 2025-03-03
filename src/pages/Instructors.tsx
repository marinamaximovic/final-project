function Instructors() {
  return (
    <div className="container mt-5 instructors-page">
      <h2>Meet Our Instructors</h2>
      {/* list of instructors */}
      <ul>
        <li className="mb-4">
          <div style={{ marginBottom: "20px" }}>
            <strong>Michael Anderson (USA):</strong>
          </div>
          <div>
            {/* instructor description */}
            Michael Anderson is a world-class dancer with over 25 years of
            experience in ballroom and Latin dance. A former national champion,
            Michael has won multiple awards including the “Best Choreographer
            Award” at the National Ballroom Championship and was inducted into
            the Dance Hall of Fame in 2018. His innovative teaching methods have
            produced several top-tier competitors who now perform on
            international stages. Michael’s passion and dedication continue to
            inspire dancers across the country.
          </div>
        </li>
        <li className="mb-4">
          <div style={{ marginBottom: "20px" }}>
            <strong>Anastasia Petrova (Russia):</strong>
          </div>
          <div>
            {/* instructor description */}
            Hailing from Moscow, Anastasia Petrova is an internationally
            renowned dance virtuoso whose career spans over two decades. Once a
            principal dancer with the famed Bolshoi Ballet, she has garnered
            prestigious honors such as the Golden Swan Award and has
            consistently been a finalist at the International Latin Dance
            Competition. Anastasia is celebrated for her flawless technique,
            artistic interpretation, and her ability to merge classical ballet
            with contemporary movement. Her dynamic classes empower students to
            reach extraordinary heights in performance.
          </div>
        </li>
        <li className="mb-4">
          <div style={{ marginBottom: "20px" }}>
            <strong>Krzysztof Nowak (Poland):</strong>
          </div>
          <div>
            {/* instructor description */}
            Krzysztof Nowak is a distinguished instructor with a rich background
            in both traditional Polish folk dance and modern ballroom styles.
            Over his 22-year career, he has received numerous accolades,
            including the Silver Medal at the European Dance Championships and
            the “Best Folk Dance Instructor” award at the International Folklore
            Festival. Krzysztof’s unique blend of technical precision and
            heartfelt expression has not only earned him awards but also the
            admiration of his students, helping preserve and innovate Poland’s
            cultural dance heritage.
          </div>
        </li>
        <li className="mb-4">
          <div style={{ marginBottom: "20px" }}>
            <strong>Milos Milutinovic (Serbia):</strong>
          </div>
          <div>
            {/* instructor description */}
            Milos Milutinovic is a dynamic Serbian dance maestro known for his
            innovative choreography and deep commitment to dance education. With
            more than 18 years of professional experience, Milos has led his
            teams to triumph at the Balkan Dance Championship and the European
            Showcase Awards. Recognized as “Choreographer of the Year” in 2020,
            his collaborative projects with internationally acclaimed ensembles
            have set new benchmarks in performance art. Milos’s teaching style
            seamlessly integrates traditional Serbian techniques with modern
            flair, inspiring a new generation of dancers to pursue excellence.
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Instructors;
