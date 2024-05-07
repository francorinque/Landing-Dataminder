const CustomLink = ({ colorText, text, isExternal, ...props }) => {
  return (
    <a
      {...props}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : ''}
      className={`text-[16px] md:text-[18px] hover:opacity-[80%]
       ${colorText && `${colorText}`}
       `}
    >
      {text}
    </a>
  );
};
export default CustomLink;
