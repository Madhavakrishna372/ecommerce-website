const TabNavigation = ({ activeTab, setActiveTab }) => {
  const categories = [
    { id: 'grocery', label: 'Grocery' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'instruments', label: 'Instruments' }
  ];

  return (
    <div className="flex border-b border-gray-200 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveTab(category.id)}
          className={`px-6 py-3 font-medium focus:outline-none border-b-2 transition-colors ${
            activeTab === category.id
              ? 'text-blue-600 border-blue-600'
              : 'text-gray-600 border-transparent hover:text-blue-600 hover:border-blue-600'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
