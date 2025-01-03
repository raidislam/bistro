export default function MenuItem({ item }) {
  const { name, image, price, recipe } = item
  return (
    <div className="flex  w-[648px] gap-[20px] mb-[24px]">
      <div>
        <img
          src={image}
          alt=""
          className="w-[118px] h-[104px] object-cover rounded-tr-[50px] rounded-b-[50px] "
        />
      </div>
      <div>
        <h4>{name} ------------------</h4>
        <p>{recipe}</p>
      </div>
      <div>
        <p>${price}</p>
      </div>
    </div>
  )
}
