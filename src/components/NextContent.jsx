import React from 'react';
import Header from './Header';

/* eslint-disable import/no-webpack-loader-syntax */
import NextForVercel from '!babel-loader!@mdx-js/loader!../pages/NextForVercel.mdx'

function NextContent()
{
    return (
      <div className="blogContent">
        <div className="article">
          <Header />
          <NextForVercel />
        </div>
      </div>
    );
  }

export default NextContent;
