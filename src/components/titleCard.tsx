// components/CardList.tsx
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

interface IProps {
  setTopicId: (cardId: number) => void;
  cardData: { id: number; title: string; description: string; cta: string }[];
}

export default function CardList(props: IProps) {
  const { setTopicId, cardData } = props;
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 p-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 mb-4">{card.description}</p>
          </div>
          <div>
            <button
              onClick={() => setTopicId(card.id)}
              className="w-fit mt-auto bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded cursor-pointer"
            >
              {card.cta}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
