import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Container, Section, Heading } from '../shared/common';
import team from './teamMembers';

const SectionWrapper = styled(Section)`
  background: -webkit-radial-gradient(90% -20%, circle, rgba(29, 16, 124, 1), rgba(30, 6, 51, 1), transparent 100%),
    -webkit-radial-gradient(0% -40%, circle, rgba(14, 6, 20, 1), rgba(30, 6, 51, 1), transparent 40%),
    -webkit-radial-gradient(105% 15%, rgba(14, 6, 20, 1), rgba(29, 19, 99, 1));
  background: -o-radial-gradient(90% -20%, circle, rgba(29, 16, 124, 1), rgba(30, 6, 51, 1), transparent 100%),
    -o-radial-gradient(0% -40%, circle, rgba(14, 6, 20, 1), rgba(30, 6, 51, 1), transparent 40%),
    -o-radial-gradient(105% 15%, rgba(14, 6, 20, 1), rgba(29, 19, 99, 1));
  background: radial-gradient(90% -20%, circle, rgba(29, 16, 124, 1), rgba(30, 6, 51, 1), transparent 100%),
    radial-gradient(0% -40%, circle, rgba(14, 6, 20, 1), rgba(30, 6, 51, 1), transparent 40%),
    radial-gradient(105% 15%, rgba(14, 6, 20, 1), rgba(29, 19, 99, 1));
  background: -moz-radial-gradient(90% -20%, circle, rgba(29, 16, 124, 1), rgba(30, 6, 51, 1), transparent 100%),
    -moz-radial-gradient(0% -40%, circle, rgba(14, 6, 20, 1), rgba(30, 6, 51, 1), transparent 40%),
    -moz-radial-gradient(105% 15%, rgba(14, 6, 20, 1), rgba(29, 19, 99, 1));
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 1rem;
  overflow: hidden;
  width: 320px;
  height: 320px;
`;

const Figcaption = styled.figcaption`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 1;

  & h2,
  p {
    margin: 0;
    width: 100%;
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
  }

  & > h2 {
    padding: 0 30px 10px;
    display: inline-block;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 24px;
  }

  & > p {
    padding: 0 50px;
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: -45px;
  }
`;

const Figure = styled.figure`
  position: relative;
  display: block;
  color: black;
  text-align: center;

  &::after {
    content: '';
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    position: absolute;
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
    opacity: 0.7;
    -webkit-transform: skew(-45deg) scaleX(0);
    -ms-transform: skew(-45deg) scaleX(0);
    transform: skew(-45deg) scaleX(0);
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    -webkit-transform: skew(-45deg) scaleX(1);
    -ms-transform: skew(-45deg) scaleX(1);
    transform: skew(-45deg) scaleX(1);
    -moz-transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -o-transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -webkit-transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover {
    ${Figcaption} > h2, ${Figcaption} > p {
      -moz-transform: translate3d(0%, 0%, 0);
      -webkit-transform: translate3d(0%, 0%, 0);
      transform: translate3d(0%, 0%, 0);
      -webkit-transition-delay: 0.2s;
      transition-delay: 0.2s;
      transition: 400ms;
    }
  }

  &:hover {
    ${Figcaption} > h2 {
      filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
      opacity: 1;
    }
  }

  &:hover {
    ${Figcaption} > p {
      filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
      opacity: 0.7;
      margin-top: 0;
    }
  }
`;

const Image = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
  border: 2px solid #fff;
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
  max-width: 100%;
  min-width: 100%;
  -moz-transition: opacity 0.35s ease;
  -o-transition: opacity 0.35s ease;
  -webkit-transition: opacity 0.35s ease;
  transition: opacity 0.35s ease;
`;

const HeadingWhite = styled(Heading)`
  color: ${props => props.theme.white};
`;

const MeetOurTeamSection = () => (
  <SectionWrapper>
    <Container>
      <HeadingWhite>
        <FormattedMessage id="Team.Title" defaultMessage="Meet Our Team" />
      </HeadingWhite>

      <Grid>
        {team.map(({ avatar, name, job }) => (
          <Member key={avatar}>
            <Figure>
              <Image src={avatar} alt={name} />
              <Figcaption>
                <h2>{name}</h2>
                <p>{job}</p>
              </Figcaption>
            </Figure>
          </Member>
        ))}
      </Grid>
    </Container>
  </SectionWrapper>
);

export default MeetOurTeamSection;
