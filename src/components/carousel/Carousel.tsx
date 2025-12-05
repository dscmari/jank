

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Die Komponente benötigt das 'images' Array nicht mehr,
// da die Inhalte statisch sind.

export default function BasicReactCarousel() {

  // Der gesamte Inhalt jedes Slides wird direkt hier definiert
  const slides = [
    {
      title: "Workshop für die Bauer AG aus Schrobenhausen",
      content:
        "Für das Marketing- und PR-Team der Bauer AG haben wir einen Workshop durchgeführt zum Thema Suchmaschinenoptimierung. Ziel des Workshops war es, das Wissen zu vermitteln, wie Inhalte auf der Website eingebunden werden können, um die Reichweite und die Rankings bei Google zu erhöhen",
    },
    {
      title: "Individuelle Schulung zur Webanalyse",
      content:
        "Ein umfassendes Training zur Nutzung von Google Analytics 4 (GA4) und der Implementierung von Event-Tracking, um fundierte Entscheidungen auf Basis von Nutzerdaten treffen zu können.",
    },
    {
      title: "Strategie-Entwicklung für Start-up X",
      content:
        "Wir haben die gesamte digitale Marketing-Strategie, von der Zielgruppenanalyse bis zur Content-Erstellung, für ein junges Technologieunternehmen entwickelt und umgesetzt.",
    },
	   {
      title: "Strategie-Entwicklung für Start-up X",
      content:
        "Wir haben die gesamte digitale Marketing-Strategie, von der Zielgruppenanalyse bis zur Content-Erstellung, für ein junges Technologieunternehmen entwickelt und umgesetzt.",
    },
  ];

  return (
    <div  className='w-2/3 mx-auto mb-12'>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={false} // Autoplay hier wahrscheinlich deaktiviert, da es Text ist
        interval={7000} // Längeres Intervall für Lesbarkeit des Textes
        ariaLabel="Kunden-Workshops und Projekte"
      >
        {/* Durchlaufe das neue Slides-Array und rendere das gewünschte DIV */}
        {slides.map((slide, index) => (
          <div key={index} className="p-4 sm:p-0"> {/* Zusätzliches Padding für Mobilansicht */}
            <div className="flex flex-col p-16 bg-custom-white rounded">
              <h3 className="text-xl font-semibold tracking-wide mb-4">
                {slide.title}
              </h3>
              <p>{slide.content}</p>
            </div>
          </div>
        ))}

      </Carousel>
    </div>
  );
}

//     <section id="image-carousel" className="splide bg-red-500" aria-label="Beautiful Images">
//   <div className="splide__track">
// 		<ul className="splide__list">
// 			<li className="splide__slide">
// 				<img src="/images/portraits/39321-3981.jpg" alt=""/>
// 			</li>
// 			<li className="splide__slide">
// 				<img src="/images/portraits/39321-3981.jpg" alt=""/>
// 			</li>
// 			<li className="splide__slide">
// 				<img src="/images/portraits/39321-3981.jpg" alt=""/>
// 			</li>
// 		</ul>
//   </div>
// </section>