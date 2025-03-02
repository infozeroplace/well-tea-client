import DOMPurify from "dompurify";
import HtmlParser from "react-html-parser";

const PrivacyPolicyContents = ({ data }) => {
  const sanitizedContent = DOMPurify.sanitize(data);

  return <div className='quill-classNames'>{HtmlParser(sanitizedContent)}</div>;
};

export default PrivacyPolicyContents;
