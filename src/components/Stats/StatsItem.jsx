const StatsItem = ({ icon, text, number }) => {
  return (
    <div className=' flex items-center gap-4 w-full justify-center'>
      <div className=' w-10 h-10'>
        <img
          src={icon.url}
          alt={icon.alt}
          title={icon.title}
          className='w-full h-full object-contain'
        />
      </div>
      <div className='flex flex-col justify-center'>
        <h3 className='font-semibold text-[20px]'>{number}</h3>
        <p className='text-[14px] text-custom-grey'>{text}</p>
      </div>
    </div>
  );
};
export default StatsItem;
