import { EditableArea } from '@magnolia/react-editor';
import PropTypes from 'prop-types';
import Footer from '../fragments/Footer';

const Basic = ({ main, footer }) => {
  return (
    <div className='flex flex-col justify-between min-h-[calc(100vh-5rem)]'>
      {main && <EditableArea content={main} />}
      {footer && <EditableArea content={footer} customView={Footer} />}
    </div>
  );
};

Basic.propTypes = {
  main: PropTypes.object,
  footer: PropTypes.object,
};

export default Basic;
