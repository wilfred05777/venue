import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453.5336473280241!2d125.7197888166688!3d7.3924703729551435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f94e155af28219%3A0xfb3f4384d387e4e5!2sCj+Motor+Parts!5e0!3m2!1sen!2sph!4v1547187091008" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                // style="border:0" 
                allowFullscreen>
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;