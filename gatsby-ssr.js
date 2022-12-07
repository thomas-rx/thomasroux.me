import React from 'react';
import { withPrefix } from 'gatsby';

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <link
      href={withPrefix('resources/asciinema-player.css')}
      key='asciinema-player.css'
      rel='stylesheet'
      type='text/css'
    />,
  ]);

  setPostBodyComponents([
    <script
      key='asciinema-player.min.js'
      src={withPrefix('resources/asciinema-player.min.js')}
      type='text/javascript'
    />,
  ]);
};
