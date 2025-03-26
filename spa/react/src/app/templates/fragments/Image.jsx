import PropTypes from 'prop-types';
import { environment } from '../../../environments/environment';

const Image = ({ image, alt, caption }) => {
  if (image) {
    const damURL = `${environment.damRawBase}${image['@link']}`;
    return (
      <div>
        <img src={damURL} alt={alt} />
        {caption && <div className='text-center'>{caption}</div>}
      </div>
    );
  }
  return null;
};

Image.propTypes = {
  image: PropTypes.object,
  alt: PropTypes.string,
  caption: PropTypes.string,
};

export default Image;
