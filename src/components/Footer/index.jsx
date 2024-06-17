import footerLogoText from '../../images/footer/3KLogo.png';
import footerLogoImage from "../../images/footer/konikMaly24x24Squoosh.png";
import './footer.scss';
const citations = [
  { citation: "Nie bój się doskonałości. Nigdy jej nie osiągniesz.", author: "Salvador Dali" },
  { citation: "Mądrzy ludzie mają to do siebie, że dla głupich wydają się szaleni.", author: "Stephen Hawking" },
  { citation: "Zamiast patrzeć w przeszłość, wybiegam w przyszłość o 20 lat i staram się spojrzeć na to, co muszę zrobić teraz, aby dotrzeć tam wtedy.", author: "Diana Ross" },
  { citation: "Nigdy nie wiesz, przed czym uchronił cię twój pech.", author: "Cormac McCarthy" },
  { citation: "Daj mi magazyniera z celem, a dam ci człowieka, który przejdzie do historii. Daj mi człowieka bez celu, a dam ci urzędnika.", author: "James Cash Penny" },
  { citation: "Zawsze lepiej jest być na dole drabiny, na którą chcesz się wspiąć, niż na szczycie tej, na którą nie chcesz.", author: "Martin Freeman" },
  { citation: "Następnym razem, gdy pomyślisz, że jesteś ważny, spróbuj rozkazywać cudzemu psu.", author: "Will Rogers" },
  { citation: "Jeśli wiesz, że poniesiesz porażkę, poniesiesz ją w chwale.", author: "Cate Blanchett" },
  { citation: "Kiedy znajdziesz pomysł, o którym po prostu nie możesz przestać myśleć, prawdopodobnie jest to dobry pomysł do zrealizowania.", author: "Josh James" },
  { citation: "Jeśli przechodzisz przez piekło, idź dalej.", author: "Winston Churchill" },
  { citation: "Wycięcie negatywnych ludzi z mojego życia nie oznacza, że ich nienawidzę, oznacza po prostu, że szanuję siebie.", author: "Marilyn Monroe" },
  { citation: "Jeżeli zabałaganione biurko jest oznaką zabałaganionego umysłu, oznaką czego jest puste biurko?", author: "Albert Einstein" },
  { citation: "Jedynym dowodem na to, że istnieje jakaś pozaziemska inteligencja, jest to, że się z nami nie kontaktują.", author: "Albert Einstein" },
  { citation: "Smutne to czasy gdy łatwiej rozbić atom niż pokonać przesąd.", author: "Albert Einstein" },
  { citation: "Każdy głupi może wiedzieć. Sedno to zrozumieć.", author: "Albert Einstein" },
  { citation: "Trzymaj się z dala od negatywnych ludzi. Oni mają problem na każde rozwiązanie.", author: "Albert Einstein" },
  { citation: "Widzicie, telegraf jest rodzajem bardzo, bardzo długiego kota. Naciskacie jego ogon w Nowym Jorku, a jego głowa miauczy w Los Angeles. Rozumiecie? I radio działa na tej samej zasadzie: wysyłacie sygnały stąd, a odbierają je tam. Jedyną różnicą jest to, że nie ma kota.", author: "Albert Einstein" },
]

const sentence = getRandomElement(citations);

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <img
            src={footerLogoImage}
            alt={"logoImage"}
            style={{ width: "24" }}
          />
          <img src={footerLogoText} alt={"logoText"} />
        </div>
        <div id={"footer-title"}>
          <p>{sentence.citation}</p>
          <p>{sentence.author}</p>
        </div>
        <div className="footer-date">
          <p>25.05.2024r.</p>
        </div>
      </div>
    </>
  );
};


/**getRandomElement
 *
 * @param {Array} array
 * @returns
 */
export function getRandomElement(array) {
  // Generuj losowy indeks od 0 do array.length - 1
  const randomIndex = Math.floor(Math.random() * array.length);
  // Zwróć wybrany element
  return array[randomIndex];
}