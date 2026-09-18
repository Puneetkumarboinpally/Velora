const Card = () => {
  return (
    <div>
      <div className="relative ">
        <div className="h-80 w-60 overflow-hidden">
          <img
            src=""
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <span>HD</span>
        <h2>SuperMan</h2>
      </div>
    </div>
  );
};

export default Card;
