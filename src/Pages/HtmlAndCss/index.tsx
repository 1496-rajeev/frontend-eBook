import { useState } from "react";
import Navbar from "../../components/navbar";
import CardList from "../../components/titleCard";
import Footer from "../../components/footer";
import CodeBlock from "../../components/codeblock";
import {
  cardDataHtmlCss,
  topicWiseDataHtmlCss,
} from "../../jsonData/htmlAndCss";

export default function HtmlAndCss() {
  const [topicId, setTopicId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = topicWiseDataHtmlCss.find(
    (topic) => topic.id === topicId
  );

  const filteredCards = cardDataHtmlCss.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <main className="flex-grow">
        {topicId === null ? (
          <div className="mt-4">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search..."
              className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <CardList
              setTopicId={setTopicId}
              cardData={
                filteredCards.length !== 0 ? filteredCards : cardDataHtmlCss
              }
            />
          </div>
        ) : (
          <div className="py-4">
            <button
              onClick={() => setTopicId(null)}
              className="mb-4 flex items-center space-x-2 mt-4 cursor-pointer text-blue-400"
            >
              <span className="text-xl">←</span>
              <span>Back</span>
            </button>
            {filteredData?.content?.map((item, _) => {
              return (
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item?.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item?.description}</p>
                  <div className="flex justify-center">
                    <CodeBlock code={item?.code!} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
