import {useState} from 'react'
import Link from 'next/link'

function HowToMake() {
    const howToMakeTea = [
    {
      title: "A hot cup",
      requirements: ["1 teabag", "200 Water"],
      steps: [
      "Pop 1 teabag per cup into a mug or teapot",
      "Pour in 200ml water per cup boiled to 98 degrees",
      "Wait for 3-5 minutes",
      "Remove teabag and enjoy",
    ],
    },
    {
      title: "An iced cup",
      requirements: [
      "1 teabag",
      "100ml freshly boiled water",
      "Ice",
      "Fruit or mint to garnish (optional)",
    ],
      steps: [
      "Add the teabag to a cup or heat-resistant glass",
      "Pour over freshly boiled water and leave for 15 minutes. Remove the teabag",
      "Top up with plenty of ice",
      "Garnish with fruit and sprigs of mint if desired",
    ],
    }
  ];

    const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-teagreen-1000">
      <div className="flex bg-teagreen-100 text-xl text-teagreen-600">
        {howToMakeTea.map((item, index) => (
          <button
            key={index}
            className={
              "w-1/2 py-3 " +
              (currentIndex === index && "bg-teagreen-600 text-white")
            }
            onClick={() => setCurrentIndex(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="flex py-5 text-teagreen-700 text-lg">
        <div className="w-1/2 space-y-2 pl-5">
          {howToMakeTea[currentIndex].requirements.map((requirement, index) => (
            <p key={index} className="font-light">
              {requirement}
            </p>
          ))}
        </div>
        <div className="w-1/2 space-y-2 pl-5">
          {howToMakeTea[currentIndex].steps.map((step, index) => (
            <p key={index} className="">
              <span className="font-light mr-3">{index + 1}.</span> {step}
            </p>
          ))}
        </div>
      </div>
      {/* <p className="text-center py-5"><Link href="" className="text-teagreen-600 font-light underline">Click Here</Link> to read the full guide.</p> */}
    </div>
  );
}

export default HowToMake;