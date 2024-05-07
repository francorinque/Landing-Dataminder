import data from '../../data.json';

const Logo = ({ colorText }) => {
  const { url, alt, title, text } = data.logo;

  return (
    <div className='flex items-center gap-4'>
      <img src={url} alt={alt} title={title} />
      <h6 className={`${colorText} font-bold text-[20px] md:Text-[25px]`}>
        {text}
      </h6>
    </div>
  );
};
export default Logo;
