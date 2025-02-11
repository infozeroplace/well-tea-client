import {
  BrewingGuide,
  CommonBanner,
  TeaRecipe,
  TeaTypes,
  TipsAndTricks,
} from "@/components";
import { makeTeaMetadata } from "@/data/staticMetaData";

export const revalidate = 0;

export const metadata = makeTeaMetadata;

export async function generateMetadata() {
  return makeTeaMetadata;
}

const MakeTea = () => {
  return (
    <div>
      <CommonBanner bannerTitle="How to make tea" />
      <div className="container px-4 lg:px-20">
        <div className="section-gap mt-20">
          <div className="text-5xl font-semibold tracking-tight content-gap">
            How to make tea
          </div>
          <p className="lg:w-[30%]">
            There’s nothing quite like the simple pleasure of a well-made cup of
            tea. Learn a few basics and make every sip a success.
          </p>
        </div>

        {/* Heading Section */}
        <div className="section-gap text-2xl text-center lg:text-left tracking-tight font-medium lg:pr-[25%]">
          Making a cup of tea shouldn’t be rocket science, but there are a few
          things you can do to guarantee a perfect cup of tea every time. Read
          on and discover all the insider knowledge on the different tea types,
          our tea tips and tricks.
        </div>

        {/* Recipe section */}
        <div className="">
          <TeaRecipe />
        </div>

        {/* Categorywise Brewing Guide  Section */}
        <BrewingGuide />

        {/* Tips $ Tricks Section */}
        <TipsAndTricks />

        {/* Tea Types Section */}
        <TeaTypes />
      </div>
    </div>
  );
};

export default MakeTea;
