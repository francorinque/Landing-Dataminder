import CustomBtn from '../ui/CustomBtn';
import CustomLink from '../ui/CustomLink';

const MenuMobile = ({ isOpen, onClick, data }) => {
  console.log(data);
  return (
    <div
      className={`${
        isOpen ? 'flex' : 'hidden'
      } bg-black/10 w-full h-screen fixed inset-0 lg:hidden`}
      onClick={onClick}
    >
      <ul
        className={`
        fixed  left-0 top-0 p-5 h-screen
        w-[250px] flex flex-col gap-8 items-start bg-custom-neutral shadow-md shadow-black/10
        `}
      >
        {data.links.map((link) => (
          <li key={link.id}>
            <CustomLink {...link} colorText='text-custom-silver' />
          </li>
        ))}
        <li>
          <CustomBtn className='btn'>
            <CustomLink {...data.button} />
          </CustomBtn>
        </li>
      </ul>
    </div>
  );
};
export default MenuMobile;
