import React from 'react';
import styled from 'styled-components';
import { Container, Section } from '../shared/style';

const team = [
  {
    avatar:
      'https://images.unsplash.com/photo-1529122581445-c5b6773d7cdf?ixlib=rb-0.3.5&s=d64a00f304a197ee56b0f6fe385da95e&auto=format&fit=crop&w=500&q=60',
    name: 'Marko Markovic',
    job: 'Programmer',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1493136289900-28660d718589?ixlib=rb-0.3.5&s=ff2a1eea7d9e9e574a43df1404fd9d07&auto=format&fit=crop&w=500&q=60',
    name: 'Jelena Misic',
    job: 'Web Designer',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1476983109555-18ebaf412d7c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8c508869d7645131d98c453dd9ce0ae6&auto=format&fit=crop&w=500&q=60',
    name: 'Ivana Ivanovic',
    job: 'Web Designer',
  },
];

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

const Title = styled.h1`
  font-size: 75px;
  font-weight: 900;
  color: #f8f8f8;
  text-align: center;
  text-transform: uppercase;
  margin: 1rem 0;
`;

const MeetOurTeamSection = () => (
  <SectionWrapper>
    <Container>
      <Title>Upoznajte naš tim</Title>

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
