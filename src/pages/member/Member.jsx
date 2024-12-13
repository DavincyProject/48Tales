import { Link } from "react-router-dom";
import MemberCard from "../../components/Member/MemberCard";

import memberData from "../../json/memberData.json";

const Member = () => {
  return (
    <div className="p-4 min-h-dvh">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-semibold text-base md:text-xl text-[#8C4885]">
          Members
        </h1>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>

      {Object.entries(memberData).map(([groupName, members]) => (
        <div
          key={groupName}
          className="collapse bg-[#FEF1F3] mb-4 rounded-md shadow-md"
        >
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            <span className="badge badge-warning">{groupName}</span>
          </div>
          <div className="collapse-content p-4">
            <div className="max-h-[70dvh] overflow-y-auto flex gap-3 items-center justify-center flex-wrap">
              {members.map((member) => (
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
