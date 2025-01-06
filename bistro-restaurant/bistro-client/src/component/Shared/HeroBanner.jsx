export default function HeroBanner({ children, bannerImage }) {
  return (
    <div
      style={{
        background: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        height: "800px",
      }}
      className="flex justify-center items-center"
    >
      {children}
    </div>
  );
}
