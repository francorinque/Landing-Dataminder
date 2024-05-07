import data from '../../data.json';
import StatsItem from './StatsItem';

const Stats = () => {
  const { text, desc, items } = data['section-eigth'];

  return (
    <section className='py-[100px] bg-custom-silver' id='product'>
      <div className='text-center'>
        <h2 className='subtitle mb-2'>
          {text.black} <span className='text-custom-green'>{text.green}</span>{' '}
        </h2>
        <p className='paragraph'>{desc}</p>
      </div>
      {/* items */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center mt-[50px]'>
        {items.map((item) => (
          <StatsItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
export default Stats;
