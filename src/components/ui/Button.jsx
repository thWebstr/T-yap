const Button = ({ label, variant = "primary", onClick }) => {
  const base =
    "px-8 py-3 rounded-full font-sora text-[16px] transition-all duration-300";

  const styles =
    variant === "primary"
      ? `${base} bg-[rgba(255,76,0,1)] text-white hover:bg-orange-500`
      : `${base} border border-white text-white bg-transparent hover:bg-white hover:text-black`;

  return (
    <button onClick={onClick} className={styles}>
      {label}
    </button>
  );
};

export default Button;
