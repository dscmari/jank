
export default function WebsiteBoostingBox() {
  return (
    <div className="flex-1 bg-custom-white leading-8 p-8 rounded-lg lg:mx-0 flex flex-col justify-center">
      <div className="flex justify-around max-w-screen">
        <img
          src="/images/website_boosting.jpg"
          alt="Website Boosting Logo"
          className="max-w-1/2"
        />
        <img src="/images/vdi.jpg" alt="VDI Logo" className="max-w-1/3" />
      </div>
      <p className="mt-8 text-center">
        Jan Krösche veröffentlicht regelmäßig im Fachmagazin „Website Boosting“
        und hält Vorträge beim Verein Deutscher Ingenieure.
      </p>
    </div>
  );
}
