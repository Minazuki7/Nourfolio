import Construction from "../Assets/Construction";

const UnderConstruction = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[90vh] text-white rounded-md shadow-xl p-2 font-mono mt-4">
      <span className="absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        THIS SECTION IS UNDER CONSTRUCTION
      </span>
      <Construction />
    </div>
  );
};

export default UnderConstruction;
