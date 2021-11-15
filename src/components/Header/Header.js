import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
          <DesktopActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </DesktopActionGroup>
        <Logo />
        
        <HeaderActionGroup>
            <Button >Subscribe</Button>
           <Link>Already a subscriber?</Link>
          </HeaderActionGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${ QUERIES.laptopAndUp}{
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }

`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;

  @media ${ QUERIES.laptopAndUp}{
    
    display: flex;
  }
`

const HeaderActionGroup = styled.div`
display: none;

  @media ${  QUERIES.laptopAndUp}{
    display: revert;
    position: relative;
    justify-self: end;
  }


`;

const Link = styled.a`
  position: absolute;
  margin-top: 8px;
  width: 100%;
  text-align: center;
  
  color: var(--color-gray-900);
  font-size: ${14/16}rem;
  font-style: italic;
  text-decoration: underline;

`;

const MainHeader = styled(MaxWidthWrapper)`
  
  display: flex;
  justify-content:center;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 48px;
  
 @media ${QUERIES.tabletAndUp}{
   margin-top: 48px;
   margin-bottom: 72px;
 }
  @media ${QUERIES.laptopAndUp}{
    position: relatve;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: revert;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

export default Header;
