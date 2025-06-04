interface PageButtonProps {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export default function PageButton({
  disabled,
  onClick,
  children,
}: PageButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-1/3 h-1/2 bg-white  shadow hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition border-2  border-black cursor-pointer"
    >
      {children}
    </button>
  );
}
