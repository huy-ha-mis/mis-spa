import PropTypes from 'prop-types';

const Text = ({ text }) => {
  return (
    <div
      className='py-6 px-8 bg-light-green'
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

Text.propTypes = {
  text: PropTypes.string,
};

export default Text;
