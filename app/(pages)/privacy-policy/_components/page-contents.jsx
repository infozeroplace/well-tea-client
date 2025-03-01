"use client";
import { CommonBanner, PrivacyPolicyContents } from "@/components";
import { useGetSystemConfigQuery } from "@/services/features/system/systemApi";
import { useEffect, useState } from "react";

const PrivacyPolicy = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

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
    <div>
      <CommonBanner bannerTitle='Privacy Policy' />
      {domLoaded ? (
        <div className='container px-4 lg:px-10 py-10 section-gap'>
          <PrivacyPolicyContents data={systemData.privacyPolicy || ""} />
        </div>
      ) : (
        <div className='container px-4 lg:px-10 py-10 section-gap'>
          <div>Loading...</div>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicy;
