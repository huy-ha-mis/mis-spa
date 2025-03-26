import PropTypes from 'prop-types';

const ListItem = ({ label, url }) => {
  return (
    <a href={url} target='_blank' className='hover:underline' rel='noreferrer'>
      {label}
    </a>
  );
};

ListItem.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
};

export default ListItem;
