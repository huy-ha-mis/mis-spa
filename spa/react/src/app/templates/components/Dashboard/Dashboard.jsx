import React, { useEffect, useState } from 'react';
import ProjectList from './ProjectList';
import RecentSearch from './RecentSearch';
import LeaseExpiries from './LeaseExpiries';
import ListingAnalytics from './ListingAnalytics';
import NotificationHistory from './NotificationHistory';
// import RequestOwnership from './RequestOwnership';
// import { useUtils } from '../lib/api/Authorization';
// import { useAppContext } from '../../AppContext';

const Dashboard = () => {
  // const { generateAndSetToken } = useUtils();
  // const { oktaUserProfile, setOktaUserProfile } = useAppContext();
  const [notification, setNotification] = useState(null);
  const [notificationType, setNotificationType] = useState('success');

  // useEffect(() => {
  //   const userProfile = JSON.parse(localStorage.getItem("oktaUserProfile"));
  //   setOktaUserProfile(userProfile);
  //   // console.log('userProfile ', userProfile);

  //   const fetchToken = async () => {
  //     const success = await generateAndSetToken();
  //     if (success) {
  //       console.log('Token generated and set successfully');
  //     } else {
  //       console.error('Failed to generate and set token');
  //     }
  //   };

  //   fetchToken();
  // }, []);


  const showNotification = (message, type = 'success') => {
    setNotification(message);
    setNotificationType(type);
    setTimeout(() => {
      setNotification(null);
      setNotificationType('success');
    }, 5000);
  };


  return (
    <div className="max-w-container mx-auto relative px-4 pb-4 pt-2 h-full bg-neutral-100">
      <h1 className="text-lg font-bold mb-2 text-neutral-500">Welcome Back, <span className='text-neutral-700'>Name</span> </h1>
      {notification && (
        <div className={`absolute top-5 right-5 text-white px-4 py-2 rounded shadow-lg z-50 animate-fade-in-out
                        ${notificationType === 'success' ? 'bg-green-500' : 'bg-red-500'}
                    `}>
          {notification}
        </div>
      )}
      <div className="flex h-full pb-7 overflow-y-auto">
        <div className="flex flex-col w-4/5 space-y-4 pr-4">
          <div className="bg-white shadow-md rounded-md flex-grow ">
            <ProjectList />
          </div>
          <div className="flex space-x-4 h-56">
            <div className="bg-gray-300 shadow-md rounded-md w-1/2 flex-grow">
              <RecentSearch />
            </div>
            <div className="bg-gray-300 shadow-md rounded-md w-1/2 flex-grow">
              <LeaseExpiries />
            </div>
          </div>
          {/* <div className="rounded-md h-3/6">
            <ListingAnalytics />
          </div> */}
          <div className="rounded-md h-3/6">
          </div>
        </div>
        <div className="bg-neutral-200 shadow-md rounded-md p-2 w-1/5 h-full">
          <NotificationHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
