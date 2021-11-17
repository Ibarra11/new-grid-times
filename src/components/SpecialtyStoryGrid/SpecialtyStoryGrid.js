import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';
import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
  
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-areas: "markets"
  "sports";
  @media ${QUERIES.tabletAndUp}{
    gap: 64px;
  }
  @media ${QUERIES.laptopAndUp}{
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "markets sports";
    gap: 0;
  }
`;

const MarketsSection = styled.section`
  grid-area: markets;
  @media ${QUERIES.laptopAndUp}{
    border-right: 1px solid var(--color-gray-300);
   margin-right: 16px;
   padding-right: 16px;
  };
`;

const MarketCards = styled.div`
    display: grid;
     gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(183px, 1fr)) ;
`;

const SportsSection = styled.section`
  grid-area: sports;
  overflow: hidden;
`;

const SportsStories = styled.div`
display: grid;
gap: 16px;
 grid-template-columns: repeat(auto-fit, minmax(183px, 1fr)) ;
overflow: auto;

 @media ${  QUERIES.tabletAndUp}{
   grid-template-columns: repeat(5, 220px);
   padding-bottom: 16px;
 }
`;

export default SpecialtyStoryGrid;
