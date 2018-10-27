import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
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
  className: 'section',
})``;
