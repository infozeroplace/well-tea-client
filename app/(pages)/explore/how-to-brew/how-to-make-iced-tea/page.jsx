import { CommonBanner, IcedTeaRecipe } from "@/components";
import { icedTeaMetadata } from "@/data/staticMetaData";
import Image from "next/image";

export const revalidate = 0;

// export async function generateMetadata() {
//   return {
//     title: "How to make iced tea",
//     description: "",
//     keywords: "",
//     openGraph: {
//       title: "How to make iced tea",
//       description: "",
//       images: [
//         {
//           url: "",
//           width: 1200,
//           height: 630,
//           alt: "",
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: "How to make iced tea",
//       description: "",
//       images: [""],
//     },
//   };
// }

export const metadata = icedTeaMetadata;

const MakeIcedTea = () => {
  return (
    <div>
      <CommonBanner bannerTitle="How to make iced tea" />
      <div className="container px-4 lg:px-20">
        <div className="section-gap mt-20">
          <div className="text-5xl font-semibold tracking-tight content-gap">
            How to make <br />
            iced tea
          </div>
        </div>

        {/* Heading Section */}
        <div className="section-gap text-2xl text-center lg:text-left tracking-tight font-medium">
          Welcome to the WellTea iced tea guide. With years of iced tea brewing
          under our belts, we’ve picked up a trick or two on how to get it just
          right – we’re passing on everything we’ve learned, so follow our
          lead!​
        </div>

        {/* Ways of make teasS */}
        <div className="section-gap">
          <div className="text-3xl font-medium mb-2">
            Different ways to make iced tea
          </div>
          <p>
            There’s two ways we make iced tea, we either use what we call our
            classic method or the Cold Brew method.
          </p>
          <br />
          <p>
            The Cold Brew method uses our Cold Brew collection. It is quick and
            easy – it involves adding the Cold Brew tea bag to chilled water for
            10 minutes or until the tea has reached your desired flavour. Remove
            the tea bag and it’s ready to drink – so simple!
          </p>
          <br />
          <p>
            Our classic method, with full instructions below, uses any of our
            blends – black, green, fruit or herbal tisanes, in either tea bags
            or loose leaf. This method can make a small jug for yourself, enough
            to share or a large batch to have in the fridge throughout the week.
          </p>
          <br />
          <p>
            Please note, our instructions below uses a WellTea Teamaker and a
            WellTea Jug-A-Lot, but if you don’t have these tools, it can easily
            be made in a regular teapot too.
          </p>
          <br />
          <div className="flex gap-2 mb-1">
            <Image
              width={100}
              height={123}
              src="/images/sommeliertip.gif"
              alt="tip pic"
              className="w-5"
            />
            <div className="text-xl font-semibold text-teagreen-600">
              Brew tip from our tea sommelier
            </div>
          </div>
          <p>
            To make iced tea with a strong, vibrant flavour, the process is like
            making cordial. First, you need to brew an extra strong tea
            concentrate, then you can add ice while maintaining that full
            flavour.
          </p>
          <br />
          <p>
            Customise and create your own flavours by blending different teas.
            Start experimenting by adding fruit tisanes to a black tea, or
            herbal blends to green tea, the combinations are endless.
          </p>
        </div>

        {/* Recipe section */}
        <div className="">
          <IcedTeaRecipe />
        </div>

        {/* Recomended Teas */}
        <div className="content-gap">
          <div className="text-3xl font-medium mb-2">
            Recommended teas for iced tea ​
          </div>
          <p>
            Every blend can be made into iced tea, but some work particularly
            well chilled. Black tea is famously delicious with ice, the bold
            taste of black tea leaves is softened when iced, and it mixes well
            with sweet fruits and garnishes. Fruit tisanes are our most
            flavour-forward blends, they are available in with tastes of
            different fruits and desserts. These are great for kids, and a great
            alternative to overly sweet soft drinks. Green tea is a lighter
            option for iced tea, it’s naturally slightly sweet and loved for
            it’s refreshing notes.
          </p>
          <br />
          <div className="flex gap-2 mb-1">
            <Image
              width={100}
              height={123}
              src="/images/sommeliertip.gif"
              alt="tip pic"
              className="w-5"
            />
            <div className="text-xl font-semibold text-teagreen-600">
              Brew tip from our tea sommelier
            </div>
          </div>
          <p>
            When making iced black tea, a favourite in the WellTea office is
            Assam – it’s bold, malty, and slightly sweet, it’s the perfect iced
            tea base. Add a squeeze of lemon to enhance its malty flavours.
          </p>
          <br />
          <p>
            Gorgeous Geisha iced is also on regular rotation. It’s a luscious
            green tea with strawberries that add a sweet, fruity touch—perfect
            for a refreshing sip. As it is already infused with fruits, you
            don’t need to garnish this tea which makes it all the more easy to
            make.
          </p>
          <br />
          <p>
            Packs A Peach is an original favourite of ours for making iced tea.
            It tastes sweet and juicy, perfect for pairing with fresh peach
            slices and a sprig of mint.
          </p>
        </div>

        {/* How to store Teas */}
        <div className="section-gap">
          <div className="text-3xl font-medium mb-2">How to store iced tea</div>
          <p>
            Always keep iced tea chill​ed, in the fridge. Store it with a tight
            seal, jugs and large jars with lids are great choices. This will
            also keep the tea from picking up the taste or odors from food.​
          </p>
          <br />
          <p>
            Fruits, garnishes and sweeteners will decrease the tea's shelf life.
            So, add them to each glass or a pitcher of tea that will be consumed
            within a day.
          </p>
        </div>

        {/* Recipe Video */}
        <div className="section-gap">
          <video
            className="w-full rounded-lg shadow-lg"
            controls
            poster="https://cdn.intelligencebank.com/au/share/NOrD/qqpve/DNwpk/original/t2-everyday-quick-iced-tea-poster-desktop" // Optional: Replace with an actual poster URL if available
          >
            <source
              src="https://cdn.intelligencebank.com/au/share/NOrD/qqpve/17lXl/mp4/t2-everyday-iced-tea-for-many"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default MakeIcedTea;
