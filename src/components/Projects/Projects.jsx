import data from '../../data.json';
import ProjectsItem from './ProjectsItem';

const Projects = () => {
  const { title, projects } = data['section-six'];

  return (
    <section className='py-[100px]' id='projects'>
      <h2 className='subtitle mb-[30px]'>{title}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[80px] md:gap-[20px]'>
        {projects.map((p) => (
          <ProjectsItem key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
