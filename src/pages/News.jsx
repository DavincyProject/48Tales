import CardNews from "../components/NewsHomepage/CardNews";
import news from "../json/news.json";

const News = () => {
  return (
    <div className="min-h-dvh w-full">
      <div className="border rounded-md bg-[#FEF1F3] p-5 gap-5 min-h-[50dvh]">
        <div className="bg-white p-4 rounded-md">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-[#F9B0D9] text-base md:text-xl font-semibold">
              NEWS UPDATE
            </h1>
          </div>
          <div>
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
      </div>
    </div>
  );
};

export default News;
