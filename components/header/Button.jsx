const Button = ({ style, content }) => {
  return (
    <div>
      <button className={`${style} bg-[#1f94aa]`}>{content}</button>
    </div>
  );
};

export default Button;
