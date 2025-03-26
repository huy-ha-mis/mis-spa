import PropTypes from 'prop-types';
import Image from '../fragments/Image';

const TextImage = ({ image, altText, text, caption }) => {
  return (
    <div className='py-6 px-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div dangerouslySetInnerHTML={{ __html: text }} />
        <Image image={image} alt={altText} caption={caption} />
      </div>
    </div>
  );
};

TextImage.propTypes = {
  caption: PropTypes.string,
  image: PropTypes.object,
  altText: PropTypes.string,
  text: PropTypes.string,
};

export default TextImage;
