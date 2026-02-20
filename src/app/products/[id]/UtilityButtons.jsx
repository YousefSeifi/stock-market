import { HeartIcon, ShareIcon } from "../../components/buttons/icons";

const UtilityButtons = () => (
  <div className="flex justify-end space-x-2">
    <button
      className="p-2 hover:bg-gray-100 rounded-full"
      aria-label="Favorite"
    >
      <HeartIcon className="w-4 h-4" />
    </button>
    <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Share">
      <ShareIcon className="w-4 h-4" />
    </button>
  </div>
);

export default UtilityButtons;
