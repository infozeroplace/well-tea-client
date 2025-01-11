const Description = ({ description }) => {
  return (
    <div className="p-10">
      <div className="mb-10">
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default Description;
