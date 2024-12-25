
function layout({ children, params }) {
    const type = decodeURI(params.type);
  return (
    <div>
      <div className="w-full h-96 flex flex-col items-center justify-center text-center bg-teagreen-700 text-white">
        <div className="ml-44 mt-[5%] mr-auto mb-auto text-nowrap">Tea/{type}</div>
        <h1 className="my-[10%] text-4xl">{type}</h1>
      </div>
      {children}
    </div>
  );
}

export default layout