import Image from "next/image";

function CategoryCard( {image, title, price} ) {
  return (
    <div className="bg-gray-200 p-5 w-full flex flex-col items-center">
        <Image src={image} alt={title} width={350} height={400}/>
        <p>{title}</p>
        <p>{price}</p>
    </div>
  )
}

export default CategoryCard