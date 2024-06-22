import * as globalFunction from "../../GlobalFunctions/GlobalFunctions";
import citations from "./Footer.citations";
import footerLogoText from '../../images/footer/3KLogo.png';
import footerLogoImage from "../../images/footer/konikMaly24x24Squoosh.png";
import './footer.scss';

const sentence = globalFunction.getRandomElement(citations);

export const Footer = ({ date }) => {
  const dateNow = new Date();
  let dateFormated = globalFunction.formatedData(dateNow);

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
          <p>{date ? date : dateFormated.dateTimeString}</p>
        </div>
      </div>
    </>
  );
};




