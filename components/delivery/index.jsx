import React from "react";
import "@/styles/quillstyle.css" 

const DeliveryContents = ({systemData}) => {
  return (
    <div className="liststyle">
      <div dangerouslySetInnerHTML={{ __html: systemData?.delivery || "" }} />
    </div>
  );
};

export default DeliveryContents;
