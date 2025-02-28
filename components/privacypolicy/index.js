"use client";
import "@/styles/quillstyle.css";
import DOMPurify from "dompurify";
import HtmlParser from "react-html-parser";

const PrivacyPolicyContents = ({ data }) => {
  const sanitizedContent = DOMPurify.sanitize(data);

  return <div className='liststyle'>{HtmlParser(sanitizedContent)}</div>;
};

export default PrivacyPolicyContents;
