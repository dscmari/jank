import ContactWithImg from "../ContactWithImg";
import WebsiteCheck from "../WebsiteCheck";

export default function GEOCheck() {
  return (
    <div>
      <div>
        <WebsiteCheck isGeo={true}/>
      </div>
      <ContactWithImg className="mt-24 lg:mt-48 lg:mx-32" />
    </div>
  );
}
