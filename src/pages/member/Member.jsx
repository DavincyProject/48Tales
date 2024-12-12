import { Link } from "react-router-dom";
import MemberCard from "../../components/Member/MemberCard";
// import member from "../../json/member.json";

import memberData from "../../json/memberData.json";
// import { useState } from "react";

const Member = () => {
  // const [searchTerm, setSearchTerm] = useState("");

  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value.toLowerCase());
  // };

  // // Filter berdasarkan pencarian
  // const filteredData = Object.entries(memberData).reduce(
  //   (acc, [group, members]) => {
  //     const filteredMembers = members.filter((member) =>
  //       member.name.toLowerCase().includes(searchTerm)
  //     );
  //     if (filteredMembers.length > 0) acc[group] = filteredMembers;
  //     return acc;
  //   },
  //   {}
  // );

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
            // value={searchTerm}
            // onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* <div className="collapse bg-[#FEF1F3]">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <span className="badge badge-warning">JKT48</span>
        </div>
        <div className="collapse-content max-h-[50px] overflow-auto flex gap-3 flex-wrap items-center justify-center">
          {member.map((member) => (
            <MemberCard
              key={member.id}
              src={member.picture}
              name={member.name}
            />
          ))}
        </div>
      </div> */}

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
                <Link key={member.id} to={`/members/${member.id}`}>
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
