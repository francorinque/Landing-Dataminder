import CustomBtn from '../ui/CustomBtn';
import CustomLink from '../ui/CustomLink';

const MenuMobile = ({ isOpen, onClick, data }) => {
  console.log(data);
  return (
    <div
      className={`${
        isOpen ? 'flex' : 'hidden'
      } bg-black/10 w-full h-screen fixed inset-0 md:hidden`}
      onClick={onClick}
    >
      <ul
        className={`
        fixed  left-0 top-0 px-2 py-5 h-screen
        w-[250px] flex flex-col gap-4  items-start text-white bg-custom-silver shadow-md shadow-black/10
        `}
      >
        {data.links.map((link) => (
          <li key={link.id} className='p-2'>
            <CustomLink {...link} colorText='text-custom-neutral' />
          </li>
        ))}
        <li className='p-2'>
          <CustomBtn className='btn'>
            <CustomLink {...data.button} />
          </CustomBtn>
        </li>
      </ul>
    </div>
  );
};
export default MenuMobile;
