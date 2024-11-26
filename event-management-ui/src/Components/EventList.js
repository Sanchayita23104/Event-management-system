
// import React from 'react';
// import './EventList.css';

// const EventList = () => {
//   const events = [
//     { id: 1, title: 'Tech Conference', date: 'Oct 12, 2024', description: 'A tech conference.', img: 'https://global-uploads.webflow.com/5ee73c29288d4558008fc54a/5efaacfab0a22c72ef40a616_websummit-large.jpg' },
//     { id: 2, title: 'Workshop', date: 'Oct 20, 2024', description: 'A hands-on workshop.', img: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=500&q=60' },
//     { id: 3, title: 'Music Fest', date: 'Nov 5, 2024', description: 'Enjoy live music performances.', img: 'https://www.icmp.ac.uk/sites/default/files/styles/page_background/public/slider-image/festival_1.jpg?itok=znbQfiko' },
//     { id: 4, title: 'Art Expo', date: 'Nov 18, 2024', description: 'An exhibition of modern art.', img: 'https://galeriemagazine.com/wp-content/uploads/2023/04/6.-Installation-view-of-De-Buck-Gallery-at-Expo-Chicago-2023.jpg' },
//     { id: 5, title: 'Food Carnival', date: 'Dec 1, 2024', description: 'Taste diverse cuisines.', img: 'https://i.pinimg.com/564x/1a/a6/53/1aa65372fa503de0461a6f1427d66379.jpg' },
//   ];

//   return (
//     <div className="event-list-container">
//       <h2 className="mt-4">Upcoming Events</h2>
//       {events.map(event => (
//         <div className="event-card card" key={event.id}>
//           <div className="row g-0">
//             <div className="col-md-3">
//             <img src={event.img} className="img-fluid rounded-start custom-image" alt={event.title} />
//             </div>
//             <div className="col-md-9">
//               <div className="card-body">
//                 <h5 className="card-title">{event.title}</h5>
//                 <p className="card-text">{event.description}</p>
//                 <p className="card-text"><small className="text-muted">{event.date}</small></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EventList;


import React from 'react';
import './EventList.css';

const EventList = () => {
  const events = [
    { id: 1, title: 'Tech Conference', date: 'Oct 12, 2024', description: 'Join industry leaders and tech enthusiasts for a day of insightful talks, workshops, and networking opportunities. Stay updated on the latest trends in technology!', img: 'https://global-uploads.webflow.com/5ee73c29288d4558008fc54a/5efaacfab0a22c72ef40a616_websummit-large.jpg' },
    { id: 2, title: 'Workshop', date: 'Oct 20, 2024', description: 'A hands-on workshop designed to enhance your skills. Participate in interactive sessions and gain practical knowledge from experienced professionals.', img: 'https://www.imperial.ac.uk/media/migration/faculty-of-natural-sciences/BG6I9184OPX-08_2--tojpeg_1489574269903_x2.jpg' },
    { id: 3, title: 'Music Fest', date: 'Nov 5, 2024', description: 'Experience an electrifying atmosphere with live performances from renowned artists. A celebration of music, art, and culture that you woud not want to miss!', img: 'https://www.icmp.ac.uk/sites/default/files/styles/page_background/public/slider-image/festival_1.jpg?itok=znbQfiko' },
    { id: 4, title: 'Art Expo', date: 'Nov 18, 2024', description: 'Explore stunning artworks from local and international artists. This exhibition showcases contemporary pieces across various mediums and styles.', img: 'https://galeriemagazine.com/wp-content/uploads/2023/04/6.-Installation-view-of-De-Buck-Gallery-at-Expo-Chicago-2023.jpg' },
    { id: 5, title: 'Food Carnival', date: 'Dec 1, 2024', description: 'Indulge in a culinary adventure featuring diverse cuisines from around the world. Perfect for food lovers and anyone looking to try something new!', img: 'https://i.pinimg.com/originals/d3/84/43/d38443dfba69272cea20c7482ea1dd87.jpg' },
  ];

  return (
    <div className="event-list-container">
      <h2 className="mt-4">Upcoming Events</h2>
      {events.map(event => (
        <div className="event-card card" key={event.id}>
          <div className="row g-0">
            <div className="col-md-3">
              <img src={event.img} className="img-fluid rounded-start custom-image" alt={event.title} />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.description}</p>
                <p className="card-text">
                  <span className="event-date">{event.date}</span>
                </p>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
