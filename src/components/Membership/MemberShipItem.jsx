const MemberShipItem = ({ icon, title, desc }) => {
  return (
    <div className='w-full'>
      <div className='w-full flex items-center  justify-center'>
        <img src={icon.url} alt={icon.alt} />
      </div>
      <h3 className='subtitle'>{title}</h3>
      <p className='paragraph text-center max-w-[500px] mx-auto'>{desc}</p>
    </div>
  );
};
export default MemberShipItem;
