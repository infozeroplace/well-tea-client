import { CommonBanner, MatchaTeaRecipe } from "@/components";
import { makeMatchaMetadata } from "@/data/staticMetaData";

export const revalidate = 0;

// export const metadata = makeMatchaMetadata;

export async function generateMetadata() {
  return makeMatchaMetadata;
}

const MakeMatcha = () => {
  return (
    <div>
      <CommonBanner bannerTitle="How To Make Traditional Matcha" />
      <div className="container px-4 lg:px-20 mt-20">
        {/* <div className="section-gap mt-20">
          <div className="text-5xl font-semibold tracking-tight content-gap">
            How to make <br />
            traditional matcha
          </div>
        </div> */}

        {/* Heading Section */}
        <div className="section-gap text-2xl text-center lg:text-left tracking-tight font-medium">
          Matcha has been used as part of the Japanese tea ceremony since the
          12th century. Fast forward to the current day and it has found its way
          into morning and afternoon rituals across the world.
        </div>

        {/* Japanese Ceremony */}
        <div className="section-gap">
          <div className="text-3xl font-medium mb-2 capitalize">
            The Japanese Tea Ceremony
          </div>
          <p>
            Traditional Japanese tea ceremonies are known as ‘chanoyu,’ a
            literal translation of ‘water for tea.’ The ceremony is more than
            just drinking tea, it’s an experience. Each ceremony can take years
            to perfect and often lasts for several hours. Influenced by samurai
            culture and Zen Buddhism, both of which emphasised discipline and
            simplicity, participants of the chanoyu are encouraged to relax and
            meditate on their surroundings, along with the craftsmanship of the
            utensils and ceremonial grade matcha.
          </p>
          <br />
          <div className="text-3xl font-medium mb-2 capitalize">
            Ceremonial grade matcha
          </div>
          <p>
            To qualify as a ceremonial grade, the process needs to meet the
            highest standards. The tea leaves need to have been shaded for at
            least 15 days, ground at the lowest temperatures and into the
            smallest microparticles to produce the smoothest and most delicate
            brew.
          </p>
          <br />
          <p>
            At WellTea, our matcha is not only certified organic, but also
            ceremonial grade. It is from the Shizuoka prefecture on Japan’s
            Pacific Ocean coast and is grown in covered, shaded conditions for
            the last three weeks of growth before picking. After picking and
            drying, it is milled into a fine powder, the grinding takes roughly
            24 hours to mill 10kgs of matcha. The result is a uniquely creamy,
            full-bodied and beautiful cup of green tea bursting with benefits.
          </p>
        </div>

        {/* Recipe section */}
        <div className="">
          <MatchaTeaRecipe />
        </div>

        {/* Recipe Video */}
        <div className="section-gap">
          <video
            className="w-full rounded-lg shadow-lg"
            controls
            poster="https://i.vimeocdn.com/video/1900158953-29ed64eacb07272405533cb13bd0d7238ac019b05e03d06e1d8cb20c454d7cff-d?mw=1800&mh=1012&q=70" // Optional: Replace with an actual poster URL if available
          >
            <source
              src="https://cdn.intelligencebank.com/au/share/NOrD/qqpve/17lXl/mp4/t2-everyday-iced-tea-for-many"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Prepping & cleaning matcha */}
        <div className="section-gap">
          <div className="text-3xl font-medium mb-2 capitalize">
            Prepping & Cleaning Your Matcha Whisk
          </div>
          <p>
            Before the first time you use a new matcha bamboo whisk, soak the
            'bloom' of the whisk in hot water for a couple of minutes. The hot
            water will cause the curled ends of the tines to straighten. This
            softens the tines, so they become more flexible and less likely to
            break.
          </p>
          <br />
          <p>
            After making matcha, cleaning your matcha whisk is easy but
            important to keep it in its best condition. Simply immerse it in
            clean water (no soap needed) for a few seconds and rinse. Avoid soap
            or dishwashers. The whisk is made completely from bamboo so wash it
            with care.
          </p>
          <br />
          <p>
            After cleaning, let your bamboo whisk dry completely. Simply leave
            it upside down to dry on its handle or place it on a bamboo whisk
            holder (this will also help to maintain its original shape). Help
            dry the bamboo whisk faster in cooler months by gently patting it
            with a clean cloth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MakeMatcha;
