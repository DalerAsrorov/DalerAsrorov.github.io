import { css } from '@emotion/core';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import React from 'react';
import { rhythm } from '../utils/typography';

export const TagsList: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <ul css={css('list-style: none;')}>
      {tags.map(tag => (
        <li
          css={css`
            float: left;
            margin: 0 0 0 ${rhythm(1 / 4)};
          `}
          key={tag}
        >
          <Link to={`/tags/${kebabCase(tag)}/`}>#{tag}</Link>
        </li>
      ))}
    </ul>
  );
};
