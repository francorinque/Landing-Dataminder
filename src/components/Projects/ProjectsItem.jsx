const ProjectsItem = ({ title, img }) => {
  return (
    <div className='relative'>
      <img
        src={img.url}
        alt={img.alt}
        title={img.title}
        className='w-full h-full object-cover'
      />
      <div className='absolute bottom-[-50px] left-[50%] translate-x-[-50%] w-[70%]  bg-custom-silver radius p-10 shadow-md'>
        <h3 className='text-center'>{title}</h3>
      </div>
    </div>
  );
};
export default ProjectsItem;
