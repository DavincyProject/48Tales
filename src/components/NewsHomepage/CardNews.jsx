const CardNews = ({ date, status, team, description }) => {
  return (
    <div className="mb-2 flex flex-col md:flex-row gap-4 items-start md:items-center bg-[#FEE7EB] p-2 rounded-md">
      {/* Bagian Tanggal dan Status */}
      <div className="w-full md:w-auto text-center md:text-left">
        <div className="text-sm md:text-base">{date}</div>
        <div className="badge badge-warning mt-2">{status}</div>
      </div>

      {/* Bagian Deskripsi dan Tim */}
      <div className="flex-1">
        <p className="text-sm md:text-base text-gray-700">{description}</p>
        <div className="mt-2">
          <div className="badge badge-error">{team}</div>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
