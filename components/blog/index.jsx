"use client"
import React from "react";
import "@/styles/editor.css";
import DOMPurify from "dompurify";
import HtmlParser from "react-html-parser";

const BlogContents = ({ articleData }) => {
  const sanitizedContent = DOMPurify.sanitize(articleData);
  
    return <div className='quill-classNames'>{HtmlParser(sanitizedContent)}</div>;
};

export default BlogContents;
