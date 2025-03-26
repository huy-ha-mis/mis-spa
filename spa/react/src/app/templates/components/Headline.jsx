import PropTypes from 'prop-types';

const Headline = ({ text }) => {
  return (
    <div
      className='py-6 px-8 bg-light-green'
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

Headline.propTypes = {
  text: PropTypes.string,
};

export default Headline;
