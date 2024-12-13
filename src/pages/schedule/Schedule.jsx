import { useState } from "react";
import shceduleData from "../../json/shceduleData.json";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import ScheduleCard from "./ScheduleCard";

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const scheduleData = shceduleData;

  // Fungsi untuk mendapatkan bulan dan tahun dalam format "Month Year"
  const getFormattedDate = (date) => {
    const options = { year: "numeric", month: "long" };
    return date.toLocaleDateString("en-US", options);
  };

  // Fungsi untuk mengubah bulan
  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  // Data berdasarkan bulan
  const formattedKey = `${currentDate.getFullYear()}-${String(
    currentDate.getMonth() + 1
  ).padStart(2, "0")}`;
  const currentSchedule = scheduleData[formattedKey] || [];

  return (
    <div className="flex flex-col mx-auto min-h-dvh w-11/12">
      <div className="flex flex-col items-center py-4 w-full">
        {/* Title */}
        <h1 className="text-pink-500 text-xl font-semibold mb-2 rounded-md bg-[#F9B0D9] bg-opacity-50 w-full text-center py-2">
          SCHEDULE
        </h1>

        {/* Navigation */}
        <div className="flex justify-between items-center w-full mt-2 rounded-md px-4 bg-[#F9B0D9] bg-opacity-50 py-2">
          {/* Left Arrow */}
          <button
            onClick={() => changeMonth(-1)}
            className="text-pink-500 text-xl"
          >
            <span className="material-icons">
              <IoMdArrowRoundBack size={40} />
            </span>
          </button>

          {/* Month and Year */}
          <p className="text-pink-500 font-medium text-center">
            {getFormattedDate(currentDate)}
          </p>

          {/* Right Arrow */}
          <button
            onClick={() => changeMonth(1)}
            className="text-pink-500 text-xl"
          >
            <span className="material-icons">
              <IoMdArrowRoundForward size={40} />
            </span>
          </button>
        </div>
      </div>

      {/* Event List */}
      <div className="bg-[#FDE9EB] p-4 rounded-md">
        <div className="bg-white p-2">
          {currentSchedule && currentSchedule.length > 0 ? (
            <div>
              {currentSchedule.map((item, index) => (
                <div
                  key={index}
                  className="flex items-stretch flex-wrap justify-center gap-4 mb-2"
                >
                  {/* Tanggal */}

                  <p className="font-semibold text-black bg-[#FDDEE4] rounded-md flex items-center justify-center text-center flex-1 p-2">
                    {item.date}
                  </p>

                  <div className="mb-2 bg-[#FDDEE4] rounded-md p-2 max-w-screen-lg">
                    {item.event.map((event, eventIndex) => (
                      <ScheduleCard
                        key={eventIndex}
                        team={event.team}
                        loc={event.location}
                        desc={event.description}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-pink-400">No events available for this month.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
