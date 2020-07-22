import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';
import { rhythm } from '../utils/typography';

export interface IBlogPostPreviewProps {
  slug: string;
  title: string;
  date: Date | string;
  excerpt: string;
}

export const BlogPostPreview: React.FC<IBlogPostPreviewProps> = props => {
  return (
    <>
      <Link
        to={props.slug}
        css={css`
          text-decoration: none;
          color: inherit;
        `}
      >
        <h3
          css={css`
            margin-bottom: ${rhythm(1 / 4)};
          `}
        >
          {props.title}{' '}
          <span
            css={css`
              color: #bbb;
            `}
          >
            — {props.date}
          </span>
        </h3>
        <p>{props.excerpt}</p>
      </Link>
    </>
  );
};
