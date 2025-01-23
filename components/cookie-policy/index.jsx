import React from "react";
import "@/styles/quillstyle.css" 

const CookiePolicyContents = ({systemData}) => {
  return (
    <div className="liststyle">
      <div dangerouslySetInnerHTML={{ __html: systemData?.cookiesPolicy || "" }} />
    </div>
  );
};

export default CookiePolicyContents;
