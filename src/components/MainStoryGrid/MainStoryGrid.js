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
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

`;

const StoryList = styled.div`
  display: grid;
  gap: 16px;
  

`;

const VerticalStoryDivider = styled.div`
  &:not(:last-of-type){
   border-bottom: 1px solid var(--color-gray-300);
  padding-bottom: 16px;
  }
 
`;


const OpinionSection = styled.section`
  grid-area: opinion-stories;
  border: 1px solid red;

  @media ${ QUERIES.tabletOnly}{
   & ${StoryList}{
      grid-template-columns: repeat()(4, 1fr);
      grid-auto-flow: column;
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
