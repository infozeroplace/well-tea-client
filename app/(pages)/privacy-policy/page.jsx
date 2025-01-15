import axios from "@/api/axios";

const PrivacyPolicy = async () => {

  const {
    data: { data: systemData },
  } = await axios.get("/public/system");

  return (
    <div className="container px-4 lg:px-20 section-gap mt-4">
      <div className="content-gap text-center text-4xl font-medium">Privacy Policy</div>
      <div className="liststyle">
        <div dangerouslySetInnerHTML={{ __html: systemData?.privacyPolicy }} />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
