'use client';

import classes from './GooglemapsLocation.module.css';

export default function GooglemapsLocation() {
  return (
    <iframe className={classes.location} title="OurLocation" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.729390790609!2d-1.4606795850758007!3d53.38112987993578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487962754417c98d%3A0x382764a176db8b70!2sSheffield%2C%20UK!5e0!3m2!1sen!2sus!4v1677445850449!5m2!1sen!2sus" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

  );
}
