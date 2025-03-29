import { CommonBanner, FindoutMore, SectionLinkButton } from "@/components";
import NextImage from "@/components/shared/NextImage";
import { rewardsMetadata } from "@/data/staticMetaData";
import Link from "next/link";
import { MdRealEstateAgent } from "react-icons/md";

export const revalidate = 0;


export async function generateMetadata() {
  return rewardsMetadata;
}

const WellteaRewards = () => {
  return (
    <>
      <CommonBanner bannerTitle="Well Tea Rewards" />
      <div className="">
        <div className="section-gap bg-teagreen-100">
          <div className="container px-5 sm:px-10 md:px-14 lg:px-20 py-8">
            <h2 className="text-3xl lg:text-5xl px-10 text-center content-gap">
              Sign up. <br />
              Earn points. <br />
              Get rewards.
            </h2>
            <div className="text-center">
              <p className="content-gap">
                Join WellTea Rewards to earn points every time you shop and
                enjoy exclusive offers, gifts and much more!
              </p>
              <p className="font-normal content-gap">
                To sign up, simply create or log into your WellTea account, then
                join as a Rewards member from your main account page.
              </p>
            </div>

            <div className="content-gap text-xl flex flex-col sm:flex-row justify-center gap-8">
              <div className="flex justify-center md:justify-center">
                <SectionLinkButton
                  title="Sign up for free"
                  url="/login"
                  buttonClass="text-sm w-40"
                />
              </div>
              <div className="flex justify-center md:justify-center">
                <SectionLinkButton
                  title="Learn More"
                  url="/#"
                  buttonClass="text-sm w-40"
                />
              </div>
            </div>
            <p className="font-normal text-center text-2xl content-gap">
              Already a Rewards member?{" "}
              <Link
                href="/login"
                className="hover:scale-105 duration-300 underline inline-block"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <div className="section-gap container px-4 lg:px-20">
          <h2 className="text-3xl lg:text-5xl px-20 text-center content-gap">
            The Benefits Of WellTea Rewards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 content-gap">
            <div className="flex flex-col items-center w-1/2 xl:w-full mx-auto md:mr-0 md:ml-auto">
              <div className="mb-2">
                <MdRealEstateAgent size={80} />
              </div>
              <div className="text-xl w-1/2 text-center mb-2">Earn Points</div>
              <p className="text-center">
                Earn points every time you shop to cash in on your future
                purchases.
              </p>
            </div>
            <div className="flex flex-col items-center w-1/2 xl:w-full mx-auto md:ml-0 md:mr-auto">
              <div className="mb-2">
                <MdRealEstateAgent size={80} />
              </div>
              <div className="text-xl w-1/2 text-center mb-2">Free Gift</div>
              <p className="text-center">
                Get a free gift with your second purchase after signing up.
              </p>
            </div>
            <div className="flex flex-col items-center w-1/2 xl:w-full mx-auto md:mr-0 md:ml-auto">
              <div className="mb-2">
                <MdRealEstateAgent size={80} />
              </div>
              <div className="text-xl w-1/2 text-center mb-2">
                Anniversary Voucher
              </div>
              <p className="text-center">
                We’ll treat you to a £5 voucher on your membership anniversary.
              </p>
            </div>
            <div className="flex flex-col items-center w-1/2 xl:w-full mx-auto md:ml-0 md:mr-auto">
              <div className="mb-2">
                <MdRealEstateAgent size={80} />
              </div>
              <div className="text-xl w-1/2 text-center mb-2">
                Exclusive Benefits
              </div>
              <p className="text-center">
                Get members-only offers, early access to new products, and more.
              </p>
            </div>
          </div>

          {/* <div className="flex justify-center">
            <Link href={"/login"}>Join WellTea Rewards</Link>
          </div> */}
          <div className="flex justify-center md:justify-center">
            <SectionLinkButton
              title="Join WellTea Rewards"
              url="/#"
              buttonClass="text-sm w-60"
            />
          </div>
        </div>

        <div className="section-gap container px-5 sm:px-10 md:px-14 lg:px-20">
          <div className="border-2 rounded-3xl p-8">
            <h2 className="text-3xl lg:text-5xl px-20 text-center content-gap">
              How It Works
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 content-gap gap-10">
              <div className="flex flex-col items-center justify-center mx-auto">
                <div className="mb-2">
                  <MdRealEstateAgent size={80} />
                </div>
                <div className="mb-2 text-xl w-1/2 text-center">Join</div>
                <p className="text-center">
                  Sign up for free and get immediate access to a wealth of
                  benefits.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center mx-auto">
                <div className="mb-2">
                  <MdRealEstateAgent size={80} />
                </div>
                <div className="mb-2 text-xl w-1/2 text-center">Earn</div>
                <p className="text-center">
                  Pick up points from purchases and special promotions.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center mx-auto">
                <div className="mb-2">
                  <MdRealEstateAgent size={80} />
                </div>
                <div className="mb-2 text-xl w-1/2 text-center">Redeem</div>
                <p className="text-center">
                  Spend your points and save money on your favourites.
                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-center">
              <SectionLinkButton
                title="Sign Up Now"
                url="/#"
                buttonClass="w-60"
              />
            </div>
          </div>
        </div>

        <div className="section-gap container px-5 sm:px-10 md:px-14 lg:px-20 rounded-3xl p-8">
          <h2 className="text-3xl lg:text-5xl px-20 text-center content-gap">
            How To Earn Points
          </h2>
          <p className="text-center content-gap">
            From exploring new flavours, to purchasing your favourites, giving
            us feedback, and pointing friends and family toward the finest teas,
            coffees, and hot chocolates, there are a variety of ways to fill
            your points balance.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 content-gap">
            <div className="flex flex-col items-center">
              <div>
                <NextImage
                  img="/images/about-image-1.jpg"
                  alt="Rewards Image"
                  presets={{ width: "1730", height: "750" }}
                  className="w-full content-gap"
                />
              </div>
              <div className="content-gap">Shop Online & In-store</div>
              <p className="text-center px-8">
                Get points for every purchase. Simply log in to your account
                when you shop online, or show your digital rewards pass to a
                member of staff in store.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <NextImage
                  img="/images/about-image-1.jpg"
                  alt="Rewards Image"
                  presets={{ width: "1730", height: "750" }}
                  className="w-full content-gap"
                />
              </div>
              <div className="content-gap">Get Bonus Rewards</div>
              <p className="text-center px-8">
                Occasionally, we’ll offer ways to earn bonuses to boost your
                points balance, from leaving reviews, to referring your friends,
                to helping us improve our products via surveys, and more.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-center">
            <SectionLinkButton title="Join Now" url="/#" buttonClass="w-60" />
          </div>
        </div>

        <div className="section-gap container px-4 lg:px-20 p-8 bg-teagreen-100">
          <h2 className="text-3xl lg:text-5xl px-20 text-center content-gap">
            Find out more
          </h2>
          <FindoutMore />
        </div>

        <div className="section-gap">
          <div className="content-gap text-center text-2xl">
            Already a member?
          </div>

          <div className="flex justify-center md:justify-center">
            <SectionLinkButton
              title="Sign In"
              url="/login"
              buttonClass="w-60"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WellteaRewards;
