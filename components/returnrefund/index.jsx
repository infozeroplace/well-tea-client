import React from "react";
import "@/styles/quillstyle.css" 

const ReturnRefundContents = ({systemData}) => {
  return (
    <div className="liststyle">
      <div dangerouslySetInnerHTML={{ __html: systemData?.returnAndRefund || "" }} />
    </div>
  );
};

export default ReturnRefundContents;
