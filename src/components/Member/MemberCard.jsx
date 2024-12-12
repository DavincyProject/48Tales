const MemberCard = ({ src, name }) => {
  return (
    <div className="bg-pink-100 rounded-lg shadow-md p-4 w-48">
      <img
        src={src}
        alt={name}
        className="rounded-md w-full h-48 object-cover"
      />
      <h2 className="mt-4 text-center font-bold text-base text-pink-600">
        {name}
      </h2>
    </div>
  );
};

export default MemberCard;
