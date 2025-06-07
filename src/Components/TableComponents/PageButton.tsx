type PageButtonProps = {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export default function PageButton({
  disabled,
  onClick,
  children,
}: PageButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-1/3 h-1/2 bg-white shadow hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed border border-black cursor-pointer transition transform duration-150 ease-in-out hover:-translate-y-[1px] active:translate-y-[1px]"
    >
      {children}
    </button>
  );
}
