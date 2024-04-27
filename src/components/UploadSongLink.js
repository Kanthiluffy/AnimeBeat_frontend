import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for routing
import TextWithHover from './shared/TextWithHover';
const UploadSongLink = ({ targetLink }) => (
  <Link to={targetLink} className="block">
    <TextWithHover displayText="Upload Song" />
  </Link>
);

// Assuming TextWithHover is another component that handles the hover effect


export default UploadSongLink;
