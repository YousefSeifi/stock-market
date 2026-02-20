export const AccordionItem = ({ title, icon, children, isOpen, onToggle }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onToggle}
      className="w-full py-4 flex items-center justify-between text-left"
    >
      <div className="flex items-center space-x-3">
        {icon}
        <span className="text-sm font-medium text-gray-900">{title}</span>
      </div>
      <svg
        className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
        viewBox="0 0 50 50"
        fill="currentColor"
      >
        <path d="M40.2 35.7999L25 19.6L9.79999 35.7999L7.09999 33.2999L25 14.2L42.9 33.2999L40.2 35.7999Z" />
      </svg>
    </button>
    {isOpen && <div className="pb-4 text-sm text-gray-600">{children}</div>}
  </div>
);
