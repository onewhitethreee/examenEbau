import { css } from '@emotion/react'
import styled from '@emotion/styled'
const light = css`
  h2 {
    /* font-size: 1.6em; */

    /* border-bottom: 2px solid var(--ifm-link-color); */
    /* padding-top: 0.4em;
    padding-bottom: 0.3em; */
  }

  h3 {
    /* font-size: 1em; */
    /* color: var(--ifm-link-color); */
  }

  /* h2,
  h3 {
    color: var(--post-title-color);
  } */

  p,
  li,
  a {
    /* font-size: 1em; */
    /* font-size: 18px; */
    /* text-align: justify; */
    /* letter-spacing: 0.04em; */
  }

  p,
  li {
    /* color: var(--text-color); */
  }
`

export const MarkdownSection = styled.section<{ isBlogPostPage: boolean; isDark: boolean }>`
  ${({ isDark }) => (isDark ? `` : light)};
  ${({ isBlogPostPage }) =>
    isBlogPostPage
      ? ''
      : css`
          margin: 1rem 0;

          /* img {
            width: 100%;
            height: 40%;
            max-width: 100%;
            max-height: 400px;
            object-fit: cover;
            object-position: top;
          } */
        `}
`

export const StyledBlogItem = styled.div<{ isBlogPostPage: boolean; isDark: boolean }>`
  margin-top: 0em;
  margin-bottom: 1.5em;

  ${({ isBlogPostPage }) =>
    isBlogPostPage &&
    css`
      ${'' /* box-shadow: var(--post-shadow); */}
      border-radius: var(--ifm-pagination-nav-border-radius);
      margin-top: 0;
      margin-bottom: -2em;
    `}

  @media (max-width: 570px) {
    .blog__readingTime {
      display: none;
    }
    .blog__author {
      display: none;
    }
  }

  article {
    .single-post--date {
      color: var(--ifm-color-primary);
      font-size: 0.9em;
    }

    > header {
      > h1 {
        font-size: 2em;
        @media (max-width: 570px) {
          & {
            font-size: 1.6em;
            text-align: center;
          }
        }
      }

      > h2 {
        font-size: 1.6em;
        /* line-height: 1.5em; */
        font-family: var(--ifm-heading-font-family);
        margin-bottom: 10px !important;
        a {
          color: var(--ifm-heading-color);
          &:hover {
            text-decoration: none;
          }
        }
        @media (max-width: 570px) {
          & {
            font-size: 1.7em;
          }
        }
      }

      > div > time {
        color: var(--post-pub-date-color);
      }
    }

    .markdown p,
    .markdown ul {
      font-family: var(--content-font-family);
    }

    > section {
      /*pre {
        > code {
          padding: 1.8rem 1rem 1rem 1rem;
        }
      }

       pre:before {
        content: '';
        position: absolute;
        top: 9px;
        left: 15px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #fc625d;
        box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
        z-index: 1;
      } */
    }
  }

  /* 卡片新拟态特效 */
  .blog-list--item {
    border-radius: 12px;
    background: var(--blog-item-background-color);
    box-shadow: var(--blog-item-shadow);
    padding: 1em 1em;

    position: relative;
  }

  .testt {
    position: absolute;
    font-size: 12vw;
    color: #c8a3ff;
  }

  /* @media (max-width: 570px) {
    box-shadow: none;
    padding: 0;
  } */

  .post__tags {
    opacity: 0.8;
  }

  hr {
    background-color: #eaecef;
    border: 0;
    height: var(--ifm-hr-height);
    margin: 0.25rem 0;
  }
`
