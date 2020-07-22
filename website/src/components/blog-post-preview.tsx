import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';
import { rhythm } from '../utils/typography';
import { TagsList } from './tags-list';

export interface IBlogPostPreviewProps {
  slug: string;
  title: string;
  date: Date | string;
  excerpt: string;
  tags: string[];
}

export const BlogPostPreview: React.FC<IBlogPostPreviewProps> = props => {
  return (
    <div
      css={css`
        display: inline-block;
      `}
    >
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
            &:hover {
              color: #1ca086;
            }
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
        <p
          css={css`
            margin-bottom: ${rhythm(1 / 4)};
          `}
        >
          {props.excerpt}
        </p>
        <TagsList tags={props.tags} />
      </Link>
    </div>
  );
};
