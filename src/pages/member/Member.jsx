import { Link } from "react-router-dom";
import MemberCard from "../../components/Member/MemberCard";

import memberData from "../../json/memberData.json";

const Member = () => {
  const getTextColor = (bgColor) => {
    // Menghitung tingkat kecerahan warna (luma)
    const hex = bgColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luma = 0.299 * r + 0.587 * g + 0.114 * b; // Rumus kecerahan
    return luma > 186 ? "#000000" : "#FFFFFF"; // Teks hitam jika terang, putih jika gelap
  };

  return (
    <div className="p-4 min-h-dvh">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-semibold text-base md:text-xl text-[#8C4885]">
          Members
        </h1>

        <form className="flex relative flex-row">
          <input
            type="search"
            placeholder="Cari Member"
            className="sm:w-[35dvw] sm:h-[6dvh] outline-none focus:outline-none px-4 py-[6px] border-2 rounded-2xl border-darkblue"
          />
          <button
            type="submit"
            className="absolute bottom-1/2 right-4 translate-y-1/2 rounded-lg bg-[#6148FF] p-1"
          >
            <img src="/search.svg" className="w-5 md:w-6" alt="search icon" />
          </button>
        </form>
      </div>

      {Object.entries(memberData).map(([groupName, groupData]) => (
        <div
          key={groupName}
          className="collapse bg-[#FEF1F3] mb-4 rounded-md shadow-md"
        >
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            <span
              className="badge"
              style={{
                backgroundColor: groupData.color,
                color: getTextColor(groupData.color),
              }}
            >
              {groupName}
            </span>
          </div>
          <div className="collapse-content p-4">
            <div className="max-h-[70dvh] overflow-y-auto flex gap-3 items-center justify-center flex-wrap">
              {groupData.members.map((member) => (
                <Link
                  key={member.id}
                  to={`/members/${encodeURIComponent(
                    member.name.split(" ")[0]
                  )}`}
                >
                  <MemberCard src={member.picture} name={member.name} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Member;
