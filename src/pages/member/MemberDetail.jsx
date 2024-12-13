import { useParams } from "react-router-dom";
import memberDetails from "../../json/memberDetail.json";
import { Link } from "react-router-dom";
import { FaArrowRotateLeft } from "react-icons/fa6";

const MemberDetail = () => {
  const { name } = useParams();

  // Temukan data berdasarkan `name`
  const member = memberDetails.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );

  if (!member) {
    return (
      <div className="text-2xl flex justify-center items-center min-h-dvh relative">
        {/* Tombol Kembali */}
        <div className="absolute top-4 right-4">
          <Link to="/members">
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-[#FE8AA5] text-white rounded-lg shadow-md hover:bg-[#FE97B6]">
              <FaArrowRotateLeft />
              Kembali
            </div>
          </Link>
        </div>
        <h1 className="text-xl md:text-6xl font-semibold">Data not found</h1>
      </div>
    );
  }

  return (
    <>
      <div className="text-2xl flex justify-center items-center min-h-dvh relative">
        {/* Tombol Kembali */}
        <div className="absolute top-4 right-4 ">
          <Link to="/members">
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-[#FE8AA5] text-white rounded-lg shadow-md hover:bg-[#FE97B6]">
              <FaArrowRotateLeft />
              Kembali
            </div>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <div className="bg-white bg-opacity-50 w-9/12 min-h-96 py-2 flex justify-center items-center rounded-lg">
            <div className="flex flex-wrap justify-center items-center gap-20 p-2">
              <img
                src={member.picture}
                alt={member.name}
                className="w-52 mt-10 md:mt-0 rounded-lg shadow-lg"
              />
              <div className="hidden lg:divider lg:divider-horizontal"></div>
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold text-[#94538B]">
                  {member.name}
                </h1>
                <h1 className="text-2xl font-bold text-[#FE8AA5]">
                  {member.fullName}
                </h1>
                <p className="text-[#FE97B6]">{member.gen}</p>

                <div className="font-normal text-base">
                  <p className="text-[#94538B]">
                    Birthday:{" "}
                    <span className="text-[#FE97B6]">
                      {member.birthDate || "Unknown"}
                    </span>
                  </p>
                  <p className="text-[#94538B]">
                    Height:{" "}
                    <span className="text-[#FE97B6]">
                      {member.height || "Unknown"}
                    </span>
                  </p>
                  <p className="text-[#94538B]">
                    Horoscope:{" "}
                    <span className="text-[#FE97B6]">
                      {member.horoscope || "Unknown"}
                    </span>
                  </p>
                  <p className="text-[#94538B]">
                    Blood Type:{" "}
                    <span className="text-[#FE97B6]">
                      {member.bloodType || "Unknown"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberDetail;
