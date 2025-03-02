import React from "react";
import "@/styles/editor.css";

const BlogContents = ({ systemData }) => {
  return (
    <div className='liststyle'>
      <div
        dangerouslySetInnerHTML={{ __html: systemData?.blogContents || "" }}
      />
    </div>
  );
};

export default BlogContents;
