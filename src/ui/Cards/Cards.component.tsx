export interface CardProps {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  innerClass?: string;
}

const Card: React.FC<CardProps> = ({
  className,
  children,
  onClick,
  innerClass,
}) => {
  return (
    <div
      aria-hidden="true"
      className={
        className
          ? className
          : "divide-y divide-gray-200 rounded-lg bg-white shadow"
      }
      onClick={onClick}
    >
      <div className={innerClass ? innerClass : "px-4 py-5 sm:p-6"}>
        {children}
      </div>
    </div>
  );
};

export default Card;
