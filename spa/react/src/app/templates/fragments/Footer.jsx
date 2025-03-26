import { EditableComponent } from '@magnolia/react-editor';
import PropTypes from 'prop-types';

const Footer = ({ content }) => {
  return (
    <footer className='py-4 bg-[#2f383d] text-white border-t-4 border-[#c33b32] mt-[-10px]'>
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-9/12 px-4 social-icons">
            <h3 className='font-bold m-0 mb-4 text-sm'>Disclaimer</h3>
            <p className='text-[10px] text-white my-3.5 leading-[12px]'>
              Whilst care and effort has been taken to ensure the accuracy of the information provided herein, UOB Kay Hian Pte Ltd does not warrant the information expressed or implied is absolutely true, correct, timely or fit for any particular purpose or use. We are not liable for any loss or damage arising from the use of this information. Use of this site may involve the electronic transmission of personal financial information. Using this site is consent to such transmission of this information; such consent is effective at all times when using this site. UOB Kay Hian Pte Ltd utilizes Secure Socket Layer (SSL) encryption as a security standard. Usage of UOB Kay Hian Internet Trading constitutes agreement of the Terms and Conditions Governing Internet Trading. Please read it carefully before you invest. Certain information displayed on this site are links from public domain sites; if we have in any way violated any copyrights and other proprietary rights, kindly inform us immediately and we will remove the indicated content from this web-site.
            </p>
            <p className='text-[10px] text-white my-3.5 leading-[12px]'>
              This site is not directed at residents of the United States and countries belonging to the European Economic Area and is not intended for distribution to, or use by any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
            </p>
          </div>

          <div className="w-full md:w-3/12 px-4 get-in-touch">
            <h3 className='font-bold m-0 mb-4 text-sm'>
              <a href="Contacts.html" target="_top" style={{ color: '#FFFFFF' }}>Contact Us</a>&nbsp;&nbsp;<small style={{ color: '#FFF' }}>|</small>&nbsp;&nbsp;
              <a href="https://www.uobkayhian.com/about-us.html" target="_top" style={{ color: '#FFFFFF' }}>About Us</a>&nbsp;&nbsp;<small style={{ color: '#FFF' }}>|</small>&nbsp;&nbsp;
              <a href="Career.html" target="_top" style={{ color: '#FFFFFF' }}>Careers</a>
            </h3>
            <ul>
              <li className='list-none mb-2.5 text-xs'>
                <i className="text-[10px] mr-2.5 fa fa-map-marker" aria-hidden="true"></i>8 Anthony Road, #01-01, Singapore 229957
              </li>
              <li className='list-none mb-2.5 text-xs'>
                <i className="text-[10px] mr-2.5 fa fa-clock-o" aria-hidden="true"></i>Mon to Fri - 8:30am to 5:30pm
              </li>
              <li className='list-none mb-2.5 text-xs'>
                <i className="text-[10px] mr-2.5 fa fa-phone" aria-hidden="true"></i>
                <a href="tel:65-6536-9338" style={{ color: '#c33b32' }}>(65) 6536 9338</a>
              </li>
              <li className='list-none mb-2.5 text-xs'>
                <i className="text-[10px] mr-2.5 fa fa-envelope-o" aria-hidden="true"></i>
                <a href="mailto:contact@utrade.com.sg" style={{ color: '#c33b32' }}>contact@utrade.com.sg</a>
              </li>
              <li className='list-none mb-2.5 text-xs'>
                <i className="text-[10px] mr-2.5 text-center p-1 border border-white w-[12px] h-[12px] rounded-full border-radius-full vertical-align-middle fa fa-facebook fb-circle-icon-footer" aria-hidden="true" style={{ color: '#fffff', fontSize: '7px', padding: '2px' }}></i>
                <a href="https://www.facebook.com/UOBKayHian.sg" target="_blank" style={{ color: '#c33b32' }}>UTRADE Singapore</a>
              </li>
              <li className='list-none mb-2.5 text-xs'>
                <i className="text-[10px] mr-2.5 fa fa-telegram" aria-hidden="true" style={{ fontSize: '11px' }}></i>
                <a href="https://t.me/uobkhtradingideas" target="_blank" style={{ color: '#c33b32' }}>UOBKH Trading Ideas</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  content: PropTypes.object,
};

export default Footer;
