import type { Tech } from '../types';
import { FiX } from 'react-icons/fi';

interface Props {
  stack: Tech[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: Props) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 h-fit lg:sticky lg:top-20">
      <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
      <p className="text-gray-400 text-sm mt-1">
        {stack.length === 0
          ? 'No technologies selected yet.'
          : `${stack.length} Technology${stack.length > 1 ? 'ies' : ''} Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-5 border-2 border-dashed border-gray-200 rounded-xl py-10 text-center text-gray-400 text-sm">
          Your stack is empty.
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-50 rounded-xl p-3 border border-gray-100"
            >
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-8 h-8 object-contain shrink-0"
                />
                <div className="min-w-0">
                  <p className="font-semibold text-sm text-gray-800 truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500 transition shrink-0 ml-2"
                aria-label={`Remove ${item.name}`}
              >
                <FiX size={18} />
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="mt-3 w-full border-2 border-red-200 text-red-500 py-2.5 rounded-xl font-semibold text-sm hover:bg-red-50 transition"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;