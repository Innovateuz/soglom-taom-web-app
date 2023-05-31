interface IProps {
  name?: string;
  icon?: any;
  className?: string;
  onClick?: any;
}

export const Button = ({ name, icon, className, onClick }: IProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center gap-3 px-4 py-3 cursor-pointer hover:shadow-primary hover:shadow-md transition-shadow rounded-2xl ${className}`}
    >
      {icon}
      {name}
    </div>
  );
};
