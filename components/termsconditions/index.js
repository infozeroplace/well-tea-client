import React from "react";
import "@/styles/quillstyle.css" 

const TermsConditionsContents = ({systemData}) => {
  return (
    <div className="liststyle">
      <div dangerouslySetInnerHTML={{ __html: systemData?.privacyPolicy }} />
    </div>
  );
};

export default TermsConditionsContents;
