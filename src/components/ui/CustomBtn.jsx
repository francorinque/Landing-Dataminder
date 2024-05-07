const CustomBtn = ({ children, ...props }) => {
  return (
    <button {...props} className='btn'>
      {children}
    </button>
  );
};
export default CustomBtn;
