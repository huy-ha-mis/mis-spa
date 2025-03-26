import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavLink = ({ path, children, className, isMagnoliaEdit = false }) => {
  if (isMagnoliaEdit) {
    return <span className={className}>{children}</span>;
  }
  return (
    <Link className={className} to={path}>
      {children}
    </Link>
  );
};

NavLink.propTypes = {
  path: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.string,
  isMagnoliaEdit: PropTypes.bool,
};

export default NavLink;
