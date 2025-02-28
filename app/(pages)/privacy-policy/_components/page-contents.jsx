"use client";
import { CommonBanner, PrivacyPolicyContents } from "@/components";
import { useGetSystemConfigQuery } from "@/services/features/system/systemApi";

const PrivacyPolicy = () => {
  const {
    data: { data: systemData = {} } = {},
    isLoading,
    isFetching,
    isSuccess,
  } = useGetSystemConfigQuery();

  if (isFetching || isLoading || !isSuccess) {
    return (
      <div>
        <CommonBanner bannerTitle='Privacy Policy' />
        <div className='container px-4 lg:px-10 py-10 section-gap'>
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    isSuccess && (
      <div>
        <CommonBanner bannerTitle='Privacy Policy' />
        <div className='container px-4 lg:px-10 py-10 section-gap'>
          <PrivacyPolicyContents data={systemData.privacyPolicy || ""} />
        </div>
      </div>
    )
  );
};

export default PrivacyPolicy;
