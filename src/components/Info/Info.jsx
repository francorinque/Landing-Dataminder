import data from '../../data.json';

const Info = () => {
  const { text, name, desc, img } = data['section-five'];

  return (
    <section
      className='py-[100px] flex flex-col gap-10 md:flex-row bg-custom-silver px-2'
      id='testimonial'
    >
      <img
        src={img.url}
        alt={img.alt}
        title={img.title}
        className='h-[300px] w-full object-cover radius aspect-square'
      />
      <div className='text-center md:text-left max-w-[900px]'>
        <p className='paragraph'>{text}</p>
        <div>
          <h4 className='text-custom-green text-[20px]'>{name}</h4>
          <p className='paragraph'>{desc}</p>
        </div>
      </div>
    </section>
  );
};
export default Info;
