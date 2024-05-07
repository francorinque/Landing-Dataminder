import CustomBtn from '../ui/CustomBtn';
import CustomLink from '../ui/CustomLink';

const MenuDesktop = ({ data }) => {
  return (
    <nav className='w-full hidden md:flex md:justify-between'>
      <ul
        className={`
       flex items-center mx-auto gap-2
        `}
      >
        {data.links.map((link) => (
          <li key={link.id} className='p-2'>
            <CustomLink {...link} colorText='text-custom-neutral' />
          </li>
        ))}
      </ul>
      <CustomBtn className='btn'>
        <CustomLink {...data.button} />
      </CustomBtn>
    </nav>
  );
};
export default MenuDesktop;
