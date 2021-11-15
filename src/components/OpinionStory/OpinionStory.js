import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';
const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  display: grid;
  gap: 7px 21px;
  color: var(--color-gray-900);
  grid-template-columns: 1fr 48px;
  grid-template-areas:
  "author avatar"
  "title avatar"
  ;

@media ${QUERIES.tabletOnly}{
  grid-template-areas:
  "avatar avatar"
  "author author"
  "title title";
}
`;

const Avatar = styled.img`
  grid-area: avatar;
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  grid-area: author;
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);

`;

const ArticleTitle = styled.h3`
grid-area: title;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
