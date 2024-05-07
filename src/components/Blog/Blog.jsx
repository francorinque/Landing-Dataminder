import data from '../../data.json';
import CustomBtn from '../ui/CustomBtn';
import CustomLink from '../ui/CustomLink';

const Blog = () => {
  const { title, desc, btn } = data['section-four'];

  return (
    <section className='py-[100px]'>
      <div className='text-center'>
        <h2 className='subtitle mb-2'>{title}</h2>
        <p className='paragraph max-w-[700px] mx-auto'>{desc}</p>
        <CustomBtn>
          <CustomLink text={btn.text} href={btn.href} />
        </CustomBtn>
      </div>
    </section>
  );
};
export default Blog;
