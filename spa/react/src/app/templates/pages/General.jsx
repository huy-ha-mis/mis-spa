import { EditableArea } from '@magnolia/react-editor';
import PropTypes from 'prop-types';
import Footer from '../fragments/Footer';
import FooterBottom from '../fragments/FooterBottom';
import Newsletter from '../fragments/Newsletter';
import Header from '../components/Header';

const General = ({ main, footer }) => {
  return (
    <>
      <Header />
      <div className='flex flex-col justify-between min-h-[calc(100vh-25rem)]'>
        {main && <EditableArea content={main} />}
        
      </div>
      <Newsletter />
      <Footer />
      <FooterBottom />
    </>
  );
};

General.propTypes = {
  main: PropTypes.object,
  footer: PropTypes.object,
};

export default General;
