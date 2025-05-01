export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="bg-black text-white rounded-lg px-6 py-2 font-medium hover:bg-gray-800 transition"
      {...props}
    >
      {children}
    </button>
  );
}