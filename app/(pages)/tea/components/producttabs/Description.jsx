const Description = ({ description }) => {
    return (
      <div className="p-5">
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    );
  };
  
  export default Description;