import PropTypes from 'prop-types';
import { environment } from '../../environments/environment';
import NavLink from './NavLink';

const NavItem = ({ content, nodeName, currentLanguage, isMagnoliaEdit }) => {
  const baseName =
    currentLanguage === environment.languages[0] ? '' : '/' + currentLanguage;

  if (!content) {
    return null;
  }

  const children = content['@nodes']?.map((name) => (
    <NavItem
      key={name}
      content={content[name]}
      nodeName={nodeName}
      currentLanguage={currentLanguage}
      isMagnoliaEdit={isMagnoliaEdit}
    />
  ));

  return (
    <>
      <NavLink
        className='navbar-item'
        path={baseName + content['@path'].replace(nodeName || '', '') || '/'}
        isMagnoliaEdit={isMagnoliaEdit}
      >
        {content.navigationTitle || content.title || content['@name']}
      </NavLink>
      {children}
    </>
  );
};

NavItem.propTypes = {
  nodeName: PropTypes.string,
  content: PropTypes.object,
  currentLanguage: PropTypes.string,
  isMagnoliaEdit: PropTypes.bool,
};

export default NavItem;
