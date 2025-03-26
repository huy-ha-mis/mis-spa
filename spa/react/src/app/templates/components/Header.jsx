import PropTypes, { node } from 'prop-types';
import { useEffect, useState } from 'react';
import { environment } from '../../../environments/environment';

const Header = ({ text }) => {
  const [nav, setNav] = useState([]);

  const getNav = async () => {
    const res = await fetch(environment.pageBase + environment.appBase + '/header');
    const json = await res.json();
    const items = json['@nodes']?.map(nodeName => {
      return json[nodeName];
    });
    if (items) {
      setNav(items.filter(x => x['mgnl:template'] === "uob-lm:components/navigation")[0]?.items);
    }
  }

  useEffect(() => {
    getNav();
  }, []);

  return (
    <>
        <div className="bg-[#4e4e4e] text-white">
          <div className="top-header">
            <div className="max-w-container mx-auto">
              <div className="flex">
                <div className="sm:w-full md:w-5/12">
                  <ul className="info flex gap-2">
                    <li className="inline-block text-white list-none mt-2.5 text-[13px]">
                      <i className="fa fa-volume-control-phone text-[16px] text-[#c33b32] mr-[5px]" aria-hidden="true"></i>
                      <a href="tel:65-6536-9338">+65 6536 9338</a>
                    </li>
                    <li className="inline-block text-white list-none mt-2.5 text-[13px] ">
                      <i className="fa fa-envelope-o text-[16px] text-[#c33b32] mr-[5px]" aria-hidden="true"></i>
                      <a href="mailto:contact@utrade.com.sg">contact&#64;utrade.com.sg</a>
                    </li>
                  </ul>
                </div>

                <div className="sm:w-1/2 md:w-7/12">
                  <nav id="nav" className="relative mx-auto -ml-[60px]">
                    <ul id="navigation2" className="mx-auto relative float-left bg-transparent">
                      <li className="inline text-[14px] font-normal ml-[3px] p-0 float-left relative">
                        <a href="#" className="px-6 py-2.5 text-white inline-block bg-none">You are in <b>UTRADE SINGAPORE</b> <i className="fa fa-caret-down ml-[5px]" aria-hidden="true"></i></a>
                        <ul className="list-none m-0 p-0 invisible absolute z-[99999] w-[275px] bg-[#f8f8f8] shadow-[1px_1px_3px_#ccc] opacity-0 transition-opacity duration-200 ease-linear">
                          <li><a href="http://www.utrade.com.hk/" target="_top">UTRADE HONG KONG</a></li>
                          <li><a href="http://www.utrade.co.id/id/Default.aspx" target="_top">UTRADE INDONESIA</a></li>
                          <li><a href="https://www.utrade.com.my/" target="_top">UTRADE MALAYSIA</a></li>
                          <li><a href="https://www.utrade.co.th/" target="_top">UTRADE THAILAND</a></li>
                        </ul>
                      </li>
                    </ul>

                    <ul id="navigation" className="">
                      <li>
                        <a className="px-2.5 py-2 text-white no-underline inline-block bg-[#c33b32] transition-colors duration-200 ease-linear" href="#">Keycloak Login<i className="fa fa-caret-down ml-[5px]" aria-hidden="true"></i></a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-0 min-h-auto bg-white border-t-[1px] border-[#38374C] rounded-none m-0 py-2.5">
        <div className="max-w-container mx-auto">
            <div className="flex justify-between items-center">
            <div className="m-0">
                <a href="https://www.utrade.com.sg" className="logo-desktop" target="_top">
                <img src="/logo_uob.png" alt="UOB Kay Hian" /></a>
            </div>
              <ul className="flex items-center gap-1">
                <li className="dropdown"><a className="" href="https://www.utrade.com.sg" target="_top">
                  <i className="fa fa-home" aria-hidden="true" style={{ fontSize: '18px' }}></i></a></li>
                  {nav && nav['@nodes']?.map((item, index) => (
                    <li key={index}>
                        <a className="block uppercase font-bold font-sans py-4 px-1.5 text-[#222] text-[.88em]" title="" href="" target="_top">{nav[item].text}</a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
    </>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;

