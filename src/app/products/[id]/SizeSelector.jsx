import { ChevronDownIcon } from "../../components/buttons/icons";

const SizeSelector = ({ isOpen, onToggle }) => (
  <div className="relative">
    <button
      onClick={onToggle}
      className="w-full border rounded-lg p-4 text-left flex items-center justify-between"
    >
      <div>
        <span className="text-sm text-gray-500">Size:</span>
        <span className="ml-2 font-medium">All</span>
      </div>
      <ChevronDownIcon className="w-5 h-5 shrink-0 text-gray-600" />
    </button>
    {isOpen && (
      <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg">
        {/* Size options */}
        <div className="p-2 space-y-2">
          <button className="w-full text-left p-2 hover:bg-gray-100 rounded">
            Small
          </button>
          <button className="w-full text-left p-2 hover:bg-gray-100 rounded">
            Medium
          </button>
          <button className="w-full text-left p-2 hover:bg-gray-100 rounded">
            Large
          </button>
        </div>
      </div>
    )}
  </div>
);

export default SizeSelector;
