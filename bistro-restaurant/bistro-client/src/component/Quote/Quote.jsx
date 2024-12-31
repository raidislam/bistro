import bgimage from "../../assets/home/chef-service.jpg"
export default function Quote() {
  return (
    <section
      style={{
        background: `url(${bgimage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        objectFit: "cover",
        width: "1320px",
        height: "527px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
      }}
      className=" !mt-[90px]"
    >
      <div className="bg-white w-[1096px] h-[334px] py-[96px] px-[165px]">
        <h4>Bistro Boss</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </section>
  )
}
