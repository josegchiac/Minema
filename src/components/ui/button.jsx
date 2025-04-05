export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`bg-gradient-to-r from-gray-800 to-gray-900 text-white text-xl font-medium py-4 px-12 rounded-xl shadow-md border border-transparent hover:shadow-lg hover:scale-105 transition transform duration-200 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
