import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';
import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>

      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>
      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <VerticalStoryDivider key={story.id}>
            <SecondaryStory  {...story} />
            </VerticalStoryDivider>
          ))}
        </StoryList>
      </SecondaryStorySection>
         
      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <VerticalStoryDivider  key={story.id}>
            <OpinionStory {...story} />
            </VerticalStoryDivider>
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp}{
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
    "main-story secondary-stories"
    "advertisement advertisement"
    "opinion-stories opinion-stories";
    gap: 48px 0;
  }

  @media ${QUERIES.laptopAndUp}{
    grid-template-columns: 5fr 4fr 3fr;
    grid-template-areas:
    "main-story secondary-stories opinion-stories"
    "main-story advertisement advertisement";
    gap: 0px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  @media ${QUERIES.tabletAndUp}{
  padding-right: 16px;
  margin-right: 16px;
  border-right: 1px solid var(--color-gray-300);
  }
  
`;

const VerticalStoryDivider = styled.div`
  &:not(:last-of-type){
   border-bottom: 1px solid var(--color-gray-300);
    padding-bottom: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;


   
  @media ${QUERIES.laptopAndUp}{
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
    margin-right: 16px;
     &  ${VerticalStoryDivider}{
      padding-bottom: 20px;
    }
  }
`;

const StoryList = styled.div`
  display: grid;
  gap: 16px;
`;


const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${ QUERIES.tabletOnly}{
   & ${StoryList}{
      grid-auto-flow: column;
    }
     & ${VerticalStoryDivider}{
    border-bottom: revert;
    padding: revert;
  }
  }

  @media ${ QUERIES.laptopAndUp}{
    margin-top: -10px;
  }

`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp}{
    margin-top: 16px;
    padding-top: 16px;
 
  }
 
`;

export default MainStoryGrid;
