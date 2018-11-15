import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const Section = styled.section.attrs({
  className: 'section fp-responsive-auto-height',
})``;

// *********************************************************
export const Heading = styled.h1`
  font-size: 45px;
  font-weight: 900;
  color: ${props => props.theme.primary};
  text-align: center;
  text-transform: uppercase;
  margin: 1rem 0;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 980px) {
    padding: 100px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
