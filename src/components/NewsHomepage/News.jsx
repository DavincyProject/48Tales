import CardNews from "./CardNews";
import news from "../../json/news.json";
import schedule from "../../json/schedule.json";
import { Link } from "react-router-dom";
import Schedule from "./Schedule";

const News = () => {
  return (
    <section className="p-2">
      <h1 className="text-[#8C4885] text-base md:text-2xl my-5 mx-5 font-semibold">
        News
      </h1>
      <div className="border rounded-md bg-[#FEF1F3] p-5 grid grid-cols-1 md:grid-cols-2 gap-5 min-h-[50dvh]">
        <div className="bg-white p-4 rounded-md">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-[#F9B0D9] text-base md:text-xl font-semibold">
              NEWS UPDATE
            </h1>
            <Link
              to={"/news"}
              className="text-white rounded-xl hover:bg-[#c9619c] btn btn-xs sm:btn-sm md:btn-md bg-[#F9B0D9]"
            >
              View More
            </Link>
          </div>
          <div className="max-h-[70dvh] overflow-auto">
            {news.map((news) => (
              <CardNews
                key={news.id}
                date={news.date}
                status={news.status}
                team={news.team}
                description={news.description}
              />
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-md">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-[#F9B0D9] text-base md:text-xl font-semibold">
              SCHEDULE
            </h1>
            <Link
              to={"/schedule"}
              className="text-white rounded-xl hover:bg-[#c9619c] btn btn-xs sm:btn-sm md:btn-md bg-[#F9B0D9]"
            >
              View More
            </Link>
          </div>
          <div className="max-h-[70dvh] overflow-auto">
            {schedule.map((sched) => (
              <Schedule
                key={sched.id}
                date={sched.date}
                status={sched.status}
                team={sched.team}
                description={sched.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
