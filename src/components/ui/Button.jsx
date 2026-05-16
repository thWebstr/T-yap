const Button = ({ label, variant = "primary", onClick, className = "" }) => {
  const base =
    "px-8 py-3 rounded-full font-lato text-[16px] transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] cursor-pointer hover:-translate-y-1 hover:scale-105 hover:shadow-lg active:scale-95 active:translate-y-0 active:shadow-md";

  const styles =
    variant === "primary"
      ? `${base} bg-primary text-white hover:bg-orange-500 ${className}`
      : `${base} border border-white text-white bg-transparent hover:bg-white hover:text-black ${className}`;

  return (
    <button onClick={onClick} className={styles}>
      {label}
    </button>
  );
};

export default Button;
