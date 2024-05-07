import data from '../../data.json';
import MemberShipItem from './MemberShipItem';

const Membership = () => {
  const { title, desc, items } = data['section-three'];

  return (
    <section className='py-[100px]' id='service'>
      <div className='text-center'>
        <h2 className='subtitle mb-2'>{title}</h2>
        <p className='paragraph'>{desc}</p>
      </div>
      <div className='mt-[50px] grid grid-cols-1  gap-10 lg:grid-cols-3 lg:justify-between'>
        {items.map((item) => (
          <MemberShipItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
export default Membership;
