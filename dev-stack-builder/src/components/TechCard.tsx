import type { Tech } from '../types';

interface Props {
  tech: Tech;
  onAdd: (tech: Tech) => void;
  isAdded: boolean;
}

const TechCard = ({ tech, onAdd, isAdded }: Props) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition p-5 flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-10 h-10 object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ccc"><circle cx="12" cy="12" r="10"/></svg>';
          }}
        />
        <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
          {tech.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">
        {tech.description}
      </p>

      <div className="flex flex-wrap gap-2 text-xs">
        <span className="bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full font-medium">
          {tech.category}
        </span>
        <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
          {tech.difficulty}
        </span>
        <span className="flex items-center gap-1 text-amber-500 font-semibold px-1">
          ★ {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-2 w-full py-2.5 rounded-xl font-semibold text-sm transition ${
          isAdded
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechCard;