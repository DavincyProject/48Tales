/* eslint-disable react/prop-types */
const ScheduleCard = ({ team, loc, desc }) => {
  // Fungsi untuk menentukan warna badge berdasarkan lokasi
  const getBadgeColor = (location) => {
    switch (location) {
      case "Media":
        return "bg-[#2F01FF]"; // Biru
      case "Theater":
        return "bg-[#FF01B7]"; // pink
      default:
        return "bg-yellow-500"; // Kuning untuk lokasi lainnya
    }
  };

  const getTeamColor = (team) => {
    switch (team) {
      case "AKB48":
        return "bg-[#FFC0CB]";
      case "SKE48":
        return "bg-[#FFA500]";
      case "JKT48":
        return "bg-[#FF002D]";
      case "HKT48":
        return "bg-black";
      default:
        return "bg-yellow-500";
    }
  };
  return (
    <div className="flex gap-1 items-start mb-1">
      <p
        className={`badge font-semibold p-2 rounded-md text-white border-none ${getTeamColor(
          team
        )}`}
      >
        {team}
      </p>
      <p className="text-black text-xs">{desc}</p>
      <div
        className={`badge font-semibold text-white p-2 rounded-md ${getBadgeColor(
          loc
        )}`}
      >
        {loc}
      </div>
    </div>
  );
};

export default ScheduleCard;
