import ContactWithImg from "../ContactWithImg";
import WebsiteCheck from "../WebsiteCheck";

export default function SEOCheck() {
  return (
    <div className="2xl:mx-32 lg:mt-24">
      <p className="mx-8 lg:mx-32 text-xl font-semibold leading-8">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        rerum, praesentium laboriosam debitis similique perspiciatis deserunt
        totam error provident. Est nostrum facere veritatis optio facilis quis
        nisi perspiciatis itaque nam!
      </p>
      <div>
        <WebsiteCheck className="mt-12 lg:mx-32" />
      </div>
      <ContactWithImg className="mt-24 lg:mt-48" />
    </div>
  );
}
