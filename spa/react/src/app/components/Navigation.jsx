import PropTypes from 'prop-types';
import NavItem from './NavItem';

const Navigation = ({ nodeName, content, currentLanguage, isMagnoliaEdit }) => {
  return (
    <header className='sticky top-0 h-20 px-8 flex justify-between items-center bg-white border-b border-[#a9a9a9]'>
      <a href='/'>
        <img src='/Magnolia_logo.png' className='w-52' alt='Magnolia logo' />
      </a>
      <nav>
        <ul className='flex space-x-6'>
          <NavItem
            content={content}
            nodeName={nodeName}
            currentLanguage={currentLanguage}
            isMagnoliaEdit={isMagnoliaEdit}
          />
        </ul>
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  nodeName: PropTypes.string,
  content: PropTypes.object,
  currentLanguage: PropTypes.string,
  isMagnoliaEdit: PropTypes.bool,
};

export default Navigation;
