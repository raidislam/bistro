export default function BannerTitle({ title, subtitle }) {
  return (
    <div className="w-2/3 h-[450px] bg-[rgba(21,21,21,70%)] relative rounded-md">
      <div className="flex justify-center items-center ">
        <div className="text-white text-center absolute top-1/2 transform -translate-y-1/2">
          <h2 className="font-bold text-[88px] font-cinzel leading-[90px]">
            {title}
          </h2>
          <h5 className="font-semibold text-[24px] font-cinzel leading-[40px]">
            {subtitle}
          </h5>
        </div>
      </div>
    </div>
  );
}
