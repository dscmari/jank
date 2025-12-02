type Props = {
  isMobile: boolean;
  isTablet: boolean;
};

export default function ATF({ isMobile, isTablet }: Props) {
  return (
    <div>
      {isMobile ? (
        <div className="">
          <img
            src="/images/portraits/39321-4133web.jpg"
            alt="Portrait von Jan Krösche"
            className="w-full"
          />
          <h1 className=" !text-xl/8 tracking-wide p-8 pt-4">
            Endlich Platz 1 bei Google & ChatGPT mit Deiner Website!
          </h1>
        </div>
      ) : (
        <div>{isTablet ? <div>tablet</div> : <div>desktop</div>}</div>
      )}
    </div>
  );
}
