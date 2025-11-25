function LayoutSwitcher({ isSwitch, setIsSwitch }) {
  return (
    <button
      className="bg-cyan-600 p-3 rounded-xl text-white font-bold"
      onClick={() => setIsSwitch(!isSwitch)}
    >
      Layout Switcher
    </button>
  );
}

export default LayoutSwitcher;
