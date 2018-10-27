import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg.attrs({
  width: '1920',
  height: '1080',
})`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;

  @media screen and (max-width: 1200px) {
    width: 1280px;
    height: 720px;
  }

  @media screen and (max-width: 960px) {
    width: 960px;
    height: 540px;
  }

  @media screen and (max-width: 600px) {
    width: 700px;
    height: 400px;
  }
`;

const st0 = {
  display: 'none',
  fill: '#FFFFFF',
};

const st1 = {
  display: 'none',
};

const st2 = {
  fill: '#FFFFFF',
};

const Svg404 = () => (
  <Svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 1920 1080">
    <polygon
      style={st0}
      points="1171,0 1196,53 1299,53 1312.1,216 1414.1,201 1414.1,325 1478,336 1474.1,381 1539,408 1548,448.1
 1600.7,459 1598.2,508.5 1700.7,494 1708,547 1773,556.8 1773,624 1830,646 1920,683 1920,1 "
    />
    <g id="Layer_2" style={st1} />
    <g>
      <path
        style={st2}
        d="M1897.7,436.3l-28.7,31.2l22.4,20.7l-38.6,42l-42-38.7l13.1-14.3l-18.2-16.8l-24.1,26.2l37.8,34.8l-38.6,42
   l-31.4-28.9l-30.4,33.2l21.9,20.2l-32,34.9l25.5,23.5l18.6-20.3l32.4,29.8l-29.8,32.4l-28.2-25.9l-18.6,20.3l-32.4-29.8l23.2-25.3
   l-33.8-31.1l-23.3,25.4l-28.1-25.9l-5,5.5l31.4,29l-38.6,42l-31.4-29l-22.8,24.8l25.8,23.7l-32.4,35.3l32.4,29.8l-34.3,37.4
   l30,27.6l-29.8,32.4l-32.4-29.8L1533,797l-35.6-32.8l-21.5,23.5l-31.7-29.2l-22.3,24.3l32.6,30l-36.9,40.2l28.9,26.6l-38.6,42
   l-35.8-33l-12.2,13.2l-15.4-14.1l-32.6,35.5l25.2,23.3l31.3-34.1l36.4,33.5l26-28.4l32.4,29.8l-29.8,32.4l-26.8-24.7l-34.8,38
   l-29.7-27.4l-30.7,33.5l26,24l-38.6,42l-26-24l-30.1,32.8l-26.6-24.5l-12.6,13.7l18.1,16.7h38.2l13.9-15.2l16.5,15.2h41.1
   l-12.4-11.5l29.8-32.4l32.4,29.8l-12.9,14.1h40l-6.6-6.1l21.3-23.2l23.2,21.4l-7.3,8h63.3l20.4-22.2l23.2,21.4l-0.8,0.9h30.7
   l-13.1-12.1l15.2-16.6l16.6,15.2l-12.3,13.4h87.9l-6.3-5.8l11.2-12.2l12.2,11.2l-6.3,6.8h70.1l-7.7-7.1l11.2-12.2l12.2,11.2
   l-7.4,8.1H1920V913.5l-5.9,6.5l-12.2-11.2l11.2-12.2l6.9,6.4V421.7l-17.5,19.1L1897.7,436.3z M1734.4,945.7l-15.2,16.6l-16.6-15.2
   l15.2-16.6L1734.4,945.7z M1705.7,854.2l-23.2-21.4l21.3-23.2l23.2,21.4L1705.7,854.2z M1701.3,711.3l32.4,29.8l-29.8,32.4
   l-32.4-29.8L1701.3,711.3z M1643.3,652.1l32.4,29.8l-29.8,32.4l-32.4-29.8L1643.3,652.1z M1630.8,897.7l23.2,21.4l-21.3,23.2
   l-23.2-21.4L1630.8,897.7z M1587.2,877.6l21.3-23.2l23.2,21.4l-21.3,23.2L1587.2,877.6z M1647.7,852.1l-23.2-21.4l21.3-23.2
   l23.2,21.4L1647.7,852.1z M1593.4,772.7l29.8-32.4l32.4,29.8l-29.8,32.4L1593.4,772.7z M1567.1,723.6l29.8-32.4l32.4,29.8
   l-29.8,32.4L1567.1,723.6z M1587.8,819.6l23.2,21.4l-21.3,23.2l-23.2-21.4L1587.8,819.6z M1449.5,846.9l29.8-32.4l32.4,29.8
   l-29.8,32.4L1449.5,846.9z M1405.7,1047.3l-32.4-29.8l29.8-32.4l32.4,29.8L1405.7,1047.3z M1444.5,1007.1l21.3-23.2l23.2,21.4
   l-21.3,23.2L1444.5,1007.1z M1476.7,1075.6l-23.2-21.4l21.3-23.2l23.2,21.4L1476.7,1075.6z M1487.5,979.3l21.3-23.2l23.2,21.4
   l-21.3,23.2L1487.5,979.3z M1540.2,1043.1l-23.2-21.4l21.3-23.2l23.2,21.4L1540.2,1043.1z M1556.8,973.4l-23.2-21.4l21.3-23.2
   l23.2,21.4L1556.8,973.4z M1556.8,918.8l-18.6-17.2l-29.5,32.1l-32.4-29.8l29.8-32.4l27.8,25.6l21-22.9l23.2,21.4L1556.8,918.8z
    M1606.7,1024.9l-23.2-21.4l21.3-23.2l23.2,21.4L1606.7,1024.9z M1648.3,1037.9l-16.6-15.2l15.2-16.6l16.6,15.2L1648.3,1037.9z
    M1661.1,985.3l-16.6-15.2l15.2-16.6l16.6,15.2L1661.1,985.3z M1669.5,886.1l21.3-23.2l23.2,21.4l-21.3,23.2L1669.5,886.1z
    M1697.2,995.6l15.2-16.6l16.6,15.2l-15.2,16.6L1697.2,995.6z M1729.1,1038.2l-12.2-11.2l11.2-12.2l12.2,11.2L1729.1,1038.2z
    M1791.5,717.5l21.3-23.2l23.2,21.4l-21.3,23.2L1791.5,717.5z M1800.4,790.2l-21.3,23.2l-23.2-21.4l21.3-23.2L1800.4,790.2z
    M1832.8,795.2l16.6,15.2l-15.2,16.6l-16.6-15.2L1832.8,795.2z M1838.9,849.5l16.6,15.2l-15.2,16.6l-16.6-15.2L1838.9,849.5z
    M1846.6,763.5l21.3-23.2l23.2,21.4l-21.3,23.2L1846.6,763.5z M1881.7,703.9l-23.2-21.4l21.3-23.2l23.2,21.4L1881.7,703.9z
    M1830.4,682.7l-32.4-29.8l29.8-32.4l32.4,29.8L1830.4,682.7z M1764,596.8l29.8-32.4l32.4,29.8l-29.8,32.4L1764,596.8z
    M1766.5,705.2l23.2,21.4l-21.3,23.2l-23.2-21.4L1766.5,705.2z M1743,870.9l15.2-16.6l16.6,15.2l-15.2,16.6L1743,870.9z
    M1770.4,1005.4l-12.2-11.2l11.2-12.2l12.2,11.2L1770.4,1005.4z M1771.6,937.5l15.2-16.6l16.6,15.2l-15.2,16.6L1771.6,937.5z
    M1807.2,1049.6l-12.2-11.2l11.2-12.2l12.2,11.2L1807.2,1049.6z M1804,901.1l-16.6-15.2l15.2-16.6l16.6,15.2L1804,901.1z
    M1834.8,984.5l-12.2-11.2l11.2-12.2l12.2,11.2L1834.8,984.5z M1845.5,920.5l11.2-12.2l12.2,11.2l-11.2,12.2L1845.5,920.5z
    M1876.1,1049.6l-12.2-11.2l11.2-12.2l12.2,11.2L1876.1,1049.6z M1912.5,967.3l-11.2,12.2l-12.2-11.2l11.2-12.2L1912.5,967.3z
    M1894.1,867.1l-16.6-15.2l15.2-16.6l16.6,15.2L1894.1,867.1z M1883.5,614.2l-32.4-29.8l29.8-32.4l32.4,29.8L1883.5,614.2z"
      />
      <polygon style={st2} points="1510.4,742 1525.8,725.3 1509.6,710.4 1494.2,727.1 	" />
    </g>
  </Svg>
);

export default Svg404;