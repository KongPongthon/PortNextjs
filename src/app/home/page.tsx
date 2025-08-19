import ProjectsSection from '@/app/home/components/ProjectsSection';
import Button from './button';
import LanguageSwitcher from '../components/LanguageSwitcher';
import TextHeader from './components/TextHeader';

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
