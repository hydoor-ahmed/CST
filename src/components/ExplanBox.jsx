const ExplanBox = ({ img, text }) => {
  return (
    <div className="explanBox max-w-[200px] backdrop-blur rounded-lg overflow-hidden">
      <img src={img} alt="Box Image" />

      <h1 className="mt-1 px-1 py-2">
        { text }
      </h1>
    </div>
  );
};

export default ExplanBox;
