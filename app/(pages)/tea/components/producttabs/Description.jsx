import DOMPurify from "dompurify";
import HtmlParser from "react-html-parser";

const Description = ({ description }) => {
    const sanitizedContent = DOMPurify.sanitize(description);

    return (
      <div className="p-5">
        <div className='quill-classNames'>{HtmlParser(sanitizedContent)}</div>
      </div>
    );
  };
  
  export default Description;