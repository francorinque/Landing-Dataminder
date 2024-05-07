import data from '../../data.json';
import CustomBtn from '../ui/CustomBtn';
import CustomLink from '../ui/CustomLink';

const Contact = () => {
  const { btn, title } = data['section-seven'];

  return (
    <section className='py-[100px] text-center bg-custom-silver'>
      <h2 className='subtitle mb-2'>{title}</h2>
      <CustomBtn>
        <CustomLink text={btn.text} href={btn.href} />
      </CustomBtn>
    </section>
  );
};
export default Contact;
