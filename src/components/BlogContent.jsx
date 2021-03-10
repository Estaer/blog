import React from 'react';
import Header from './Header';

/* eslint-disable import/no-webpack-loader-syntax */
import NextForVercel from '!babel-loader!@mdx-js/loader!../pages/NextForVercel.mdx'

function BlogContent()
{
    return (
      <div className="blogContent">
        <Header />
        <NextForVercel />
      </div>
    );
  }

export default BlogContent;
