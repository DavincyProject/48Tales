const MemberCard = ({ src, name }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-48">
      <img
        src={src}
        alt={name}
        className="rounded-md w-full max-h-48 object-cover"
      />
      <div className="bg-pink-300 p-1 border rounded-xl mt-2">
        <h2 className="text-center font-bold text-base text-pink-600">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default MemberCard;
