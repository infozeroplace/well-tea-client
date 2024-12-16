import Image from "next/image";

function CategoryCard( {image, title, price} ) {
  return (
    <div className="p-5 w-full flex flex-col items-center custom-shadow">
        <Image src={image} alt={title} width={350} height={400}/>
        <p>{title}</p>
        <p>{price}</p>
    </div>
  )
}

export default CategoryCard