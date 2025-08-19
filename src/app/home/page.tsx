import ProjectsSection from '@/app/components/ProjectsSection';
import Button from './button';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Home = async () => {
  return (
    <div>
      <LanguageSwitcher />
      <div className='h-screen'><Button /></div>
        
      <ProjectsSection />
    </div>
  );
};

export default Home;
