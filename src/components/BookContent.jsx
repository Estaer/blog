import React from 'react';
import Header from './Header';

/* eslint-disable import/no-webpack-loader-syntax */
import Trial from '!babel-loader!@mdx-js/loader!../pages/Trial.mdx'

function BookContent()
{
    return (
      <div className="blogContent">
        <div className="article">
          <Header />
          <Trial />
        </div>
      </div>
    );
  }

export default BookContent;
