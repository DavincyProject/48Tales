/* eslint-disable react/prop-types */
const CardNews = ({ date, status, team, description }) => {
  const getBadgeColor = (team) => {
    switch (team) {
      case "KLP48":
        return "bg-green-500"; // Hijau
      case "CONCERT":
        return "bg-[#147D3A]"; // Hijau
      case "JKT48":
        return "bg-[#E90505]"; // Merah
      case "BNK48":
        return "bg-[#F9B0D9]"; // Pink
      case "AKB48":
        return "bg-[#E303A3]"; // Ungu
      case "OFFICIAL":
        return "bg-[#E303A3]"; // Ungu
      case "BIRTHDAY":
        return "bg-yellow-500"; // Mkuning
      default:
        return "bg-white"; // putih untuk lainnya
    }
  };

  return (
    <div className="mb-2 flex flex-col md:flex-row gap-4 items-start md:items-center bg-[#FEE7EB] p-2 rounded-md">
      {/* Bagian Tanggal dan Status */}
      <div className="w-full md:w-auto text-center md:text-left">
        <div className="text-sm md:text-base">{date}</div>
        <div className={`badge mt-2 text-black ${getBadgeColor(team)}`}>
          {status}
        </div>
      </div>

      {/* Bagian Deskripsi dan Tim */}
      <div className="flex-1">
        <p className="text-sm md:text-base text-gray-700">{description}</p>
        <div className="mt-2">
          <div className={`badge text-black ${getBadgeColor(team)}`}>
            {team}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
