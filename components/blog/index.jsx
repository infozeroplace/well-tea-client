import React from "react";
import "@/styles/quillstyle.css" 

const BlogContents = ({systemData}) => {
  return (
    <div className="liststyle">
      <div dangerouslySetInnerHTML={{ __html: systemData?.blogContents || "" }} />
    </div>
  );
};

export default BlogContents;
