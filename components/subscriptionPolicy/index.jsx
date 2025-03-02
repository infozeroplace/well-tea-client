"use client";

import "@/styles/editor.css";
import DOMPurify from "dompurify";
import HtmlParser from "react-html-parser";

const SubscriptionPolicyContent = ({ data }) => {
  const sanitizedContent = DOMPurify.sanitize(data);
  return <div className='quill-classNames'>{HtmlParser(sanitizedContent)}</div>;
};

export default SubscriptionPolicyContent;
