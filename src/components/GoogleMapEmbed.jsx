import React from 'react';

const GoogleMapEmbed = ({ iframeSrc, width, height }) => {
  return (
    <div className="map-overlay">
      <iframe
        title="Google Map Embed"
        src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26480.93514597749!2d-118.21136447595467!3d33.93812150468322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cc11a345b71f%3A0x9143068419df6ad2!2sSouth%20Gate%2C%20CA!5e0!3m2!1sen!2sus!4v1680315722184!5m2!1sen!2sus'}
        width={'100%'}
        height={'100px'}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;