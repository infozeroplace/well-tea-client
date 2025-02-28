"use client";

import "@/styles/quillstyle.css";
import DOMPurify from "dompurify";

const TermsConditionsContents = ({ data }) => {
  const sanitizedContent = DOMPurify.sanitize(data);

  return (
    <div className="liststyle">
      <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    </div>
  );
};

export default TermsConditionsContents;
