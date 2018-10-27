import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  z-index: 9999;
  transition: all 300ms;
  cursor: pointer;

  &:hover {
    -webkit-filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.7));
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.7));
  }
`;

const Logo = () => (
  <Svg version="1.1" id="logo" x="0px" y="0px" viewBox="0 0 300 80">
    <path
      style={{ fill: '#fff' }}
      d="M56.5,71l3.4-0.6l0.6,3.4l-3.4,0.6L56.5,71z M61.8,70.5l3.4-0.6l0.6,3.4l-3.4,0.6L61.8,70.5z M67.4,69.6
	l3.4-0.6l0.6,3.4L68,73L67.4,69.6z M55.1,65.7l3.4-0.6l0.6,3.4l-3.4,0.6L55.1,65.7z M60.2,65.1l3.4-0.6l0.6,3.4l-3.4,0.6L60.2,65.1z
	 M66,64.5l3.4-0.6l0.6,3.4l-3.4,0.6L66,64.5z M54.1,61.2l3.4-0.6l0.6,3.4l-3.4,0.6L54.1,61.2z M59.5,60.2l3.4-0.6l0.6,3.4l-3.4,0.6
	L59.5,60.2z M64.7,59.5l3.4-0.6l0.6,3.4l-3.4,0.6L64.7,59.5z M39,58.5l3.4-0.6l0.6,3.4l-3.4,0.6L39,58.5z M43.7,57.7l3.4-0.6
	l0.6,3.4l-3.4,0.6L43.7,57.7z M48.4,56.9l3.4-0.6l0.6,3.4L49,60.3L48.4,56.9z M53.4,56.3l3.4-0.6l0.6,3.4L54,59.7L53.4,56.3z
	 M58.9,55.2l3.4-0.6l0.6,3.4l-3.4,0.6L58.9,55.2z M64.5,54.3l3.4-0.3l0.3,3.4l-3.4,0.3L64.5,54.3z M70.4,53.9l3.5-0.1l0.1,3.5
	l-3.5,0.1L70.4,53.9z M38.2,53.8l3.4-0.6l0.6,3.4l-3.4,0.6L38.2,53.8z M76.9,53.9l2.3-0.1l0.1,2.3L77,56.2L76.9,53.9z M42.9,53
	l3.4-0.6l0.6,3.4l-3.4,0.6L42.9,53z M82.9,55.2l0.1-1.7l1.7,0.1l-0.1,1.7L82.9,55.2z M47.6,52.2l3.4-0.6l0.6,3.4l-3.4,0.6L47.6,52.2
	z M52.6,51.3l3.4-0.6l0.6,3.4l-3.4,0.6L52.6,51.3z M57.9,50.5l3.4-0.6l0.6,3.4l-3.4,0.6L57.9,50.5z M63.2,49.7l3.4-0.6l0.6,3.4
	l-3.4,0.6L63.2,49.7z M68.9,49l3.4-0.6l0.6,3.4l-3.4,0.6L68.9,49z M75.8,48.4l2.3-0.3l0.3,2.3l-2.3,0.3L75.8,48.4z M46.8,47.5
	l3.4-0.6l0.6,3.4l-3.4,0.6L46.8,47.5z M82,47.5l1.7-0.2l0.2,1.7l-1.7,0.2L82,47.5z M52.1,46.6l3.4-0.6l0.6,3.4L52.7,50L52.1,46.6z
	 M57.1,45.8l3.4-0.6l0.6,3.4l-3.4,0.6L57.1,45.8z M62.5,44.8l3.4-0.6l0.6,3.4l-3.4,0.6L62.5,44.8z M67.8,44l3.3-0.9l0.9,3.3
	l-3.3,0.9L67.8,44z M74.4,42.6l2.2-0.7l0.7,2.2l-2.2,0.7L74.4,42.6z M51.1,42.1l3.4-0.6l0.6,3.4l-3.4,0.6L51.1,42.1z M56.5,41.2
	l3.4-0.6l0.6,3.4l-3.4,0.6L56.5,41.2z M61.8,40.3l3.4-0.6l0.6,3.4l-3.4,0.6L61.8,40.3z M80.6,40.5l1.7-0.4l0.4,1.7L81,42.2
	L80.6,40.5z M50.7,37.5l3.4-0.6l0.6,3.4l-3.4,0.6L50.7,37.5z M56.1,36.7l3.4-0.6l0.6,3.4l-3.4,0.6L56.1,36.7z M61.3,35.6l3.4-0.6
	l0.6,3.4L61.9,39L61.3,35.6z M49.7,33l3.4-0.6l0.6,3.4l-3.4,0.6L49.7,33z M54.9,32l3.4-0.6l0.6,3.4l-3.4,0.6L54.9,32z M59.9,31
	l3.4-0.6l0.6,3.4l-3.4,0.6L59.9,31z M38.8,29.5l3.4-0.6l0.6,3.4l-3.4,0.6L38.8,29.5z M43.5,28.7l3.4-0.6l0.6,3.4l-3.4,0.6L43.5,28.7
	z M48.5,28l3.4-0.6l0.6,3.4l-3.4,0.6L48.5,28z M53.4,26.9l3.4-0.6l0.6,3.4L54,30.3L53.4,26.9z M58.6,26.3l3.4-0.6l0.6,3.4l-3.4,0.6
	L58.6,26.3z M64.3,25.5l3.4-0.6l0.6,3.4l-3.4,0.6L64.3,25.5z M37.9,24.8l3.4-0.6l0.6,3.4l-3.4,0.6L37.9,24.8z M71.1,24.6l2.3-0.5
	l0.5,2.3l-2.3,0.5L71.1,24.6z M42.6,23.9l3.4-0.6l0.6,3.4l-3.4,0.6L42.6,23.9z M77.5,24.1l1.6-0.6l0.6,1.6L78,25.7L77.5,24.1z
	 M47.5,23.1l3.4-0.6l0.6,3.4l-3.4,0.6L47.5,23.1z M52.3,22.1l3.4-0.6l0.6,3.4l-3.4,0.6L52.3,22.1z M57.6,21.5l3.4-0.6l0.6,3.4
	l-3.4,0.6L57.6,21.5z M63.4,20.5l3.4-0.6l0.6,3.4L64,23.9L63.4,20.5z M41.8,19.2l3.4-0.6l0.6,3.4l-3.4,0.6L41.8,19.2z M69.4,19.5
	l2.2-0.7l0.7,2.2l-2.2,0.7L69.4,19.5z M46.5,18.4l3.4-0.6l0.6,3.4l-3.4,0.6L46.5,18.4z M51.4,17.6l3.4-0.6l0.6,3.4L52,21L51.4,17.6z
	 M56.7,16.6l3.4-0.6l0.6,3.4L57.3,20L56.7,16.6z M75.6,17.2l1.6-0.6l0.6,1.6l-1.6,0.6L75.6,17.2z M62,15.5l3.4-0.6l0.6,3.4l-3.4,0.6
	L62,15.5z M67.6,14.5l2.2-0.7l0.7,2.2l-2.2,0.7L67.6,14.5z M45.7,13.7l3.4-0.6l0.6,3.4l-3.4,0.6L45.7,13.7z M51.1,12.9l3.4-0.6
	l0.6,3.4l-3.4,0.6L51.1,12.9z M56.2,12.1l3.4-0.6l0.6,3.4l-3.4,0.6L56.2,12.1z M73.4,11l1.6-0.7l0.7,1.6l-1.6,0.7L73.4,11z M45.6,9
	L49,8.4l0.6,3.4l-3.4,0.6L45.6,9z M50.7,8.2l3.4-0.6l0.6,3.4l-3.4,0.6L50.7,8.2z M55.9,7.2l3.4-0.6l0.6,3.4l-3.4,0.6L55.9,7.2z
	 M44.3,4.3l3.4-0.6l0.6,3.4l-3.4,0.6L44.3,4.3z M49.4,3.5l3.4-0.6l0.6,3.4L50,6.9L49.4,3.5z M54.6,2.5L58,1.9l0.6,3.4l-3.4,0.6
	L54.6,2.5z M24.3,6.8l3.4-0.6l0.6,3.4l-3.4,0.6L24.3,6.8z M19,7.3l3.4-0.6l0.6,3.4l-3.4,0.6L19,7.3z M13.4,8.2l3.4-0.6l0.6,3.4
	L14,11.6L13.4,8.2z M25.7,12.1l3.4-0.6l0.6,3.4l-3.4,0.6L25.7,12.1z M20.6,12.7l3.4-0.6l0.6,3.4l-3.4,0.6L20.6,12.7z M14.8,13.3
	l3.4-0.6l0.6,3.4l-3.4,0.6L14.8,13.3z M26.7,16.6l3.4-0.6l0.6,3.4L27.3,20L26.7,16.6z M21.3,17.6l3.4-0.6l0.6,3.4L21.9,21L21.3,17.6
	z M16.1,18.2l3.4-0.6l0.6,3.4l-3.4,0.6L16.1,18.2z M37.1,20.1l3.4-0.6l0.6,3.4l-3.4,0.6L37.1,20.1z M32.4,20.9l3.4-0.6l0.6,3.4
	L33,24.3L32.4,20.9z M27.4,21.5l3.4-0.6l0.6,3.4L28,24.9L27.4,21.5z M21.9,22.6l3.4-0.6l0.6,3.4L22.5,26L21.9,22.6z M16.8,22.8
	l3.4-0.3l0.3,3.4L17,26.2L16.8,22.8z M14.4,26.7L11,26.8l-0.1-3.5l3.5-0.1V26.7z M6.7,24.5L9,24.4l0.1,2.3l-2.3,0.1L6.7,24.5z
	 M3.2,26l-0.1,1.7l1.7,0.1l0.1-1.7L3.2,26z M33.2,25.6l3.4-0.6l0.6,3.4L33.8,29L33.2,25.6z M28.2,26.5l3.4-0.6l0.6,3.4l-3.4,0.6
	L28.2,26.5z M22.9,27.3l3.4-0.6l0.6,3.4l-3.4,0.6L22.9,27.3z M17.6,28.1l3.4-0.6l0.6,3.4l-3.4,0.6L17.6,28.1z M11.9,28.8l3.4-0.6
	l0.6,3.4l-3.4,0.6L11.9,28.8z M7.6,30.3L9.9,30l0.3,2.3l-2.3,0.3L7.6,30.3z M34,30.3l3.4-0.6l0.6,3.4l-3.4,0.6L34,30.3z M4.2,31
	l1.7-0.2l0.2,1.7l-1.7,0.2L4.2,31z M28.8,31.2l3.4-0.6l0.6,3.4l-3.4,0.6L28.8,31.2z M23.7,32l3.4-0.6l0.6,3.4l-3.4,0.6L23.7,32z
	 M18.3,33l3.4-0.6l0.6,3.4l-3.4,0.6L18.3,33z M12.8,34.1l3.3-0.9l0.9,3.3l-3.3,0.9L12.8,34.1z M8.4,35.6l2.2-0.7l0.7,2.2l-2.2,0.7
	L8.4,35.6z M29.7,35.7l3.4-0.6l0.6,3.4l-3.4,0.6L29.7,35.7z M24.3,36.6l3.4-0.6l0.6,3.4L24.9,40L24.3,36.6z M19,37.5l3.4-0.6
	l0.6,3.4l-3.4,0.6L19,37.5z M4.9,37.9l1.7-0.4L7,39.2l-1.7,0.4L4.9,37.9z M30.1,40.3l3.4-0.6l0.6,3.4l-3.4,0.6L30.1,40.3z
	 M24.7,41.1l3.4-0.6l0.6,3.4l-3.4,0.6L24.7,41.1z M19.5,42.2l3.4-0.6l0.6,3.4l-3.4,0.6L19.5,42.2z M31.1,44.8l3.4-0.6l0.6,3.4
	l-3.4,0.6L31.1,44.8z M25.9,45.8l3.4-0.6l0.6,3.4l-3.4,0.6L25.9,45.8z M20.6,46.8l3.4-0.6l0.6,3.4l-3.4,0.6L20.6,46.8z M42,48.3
	l3.4-0.6l0.6,3.4l-3.4,0.6L42,48.3z M37.3,49.1l3.4-0.6l0.6,3.4l-3.4,0.6L37.3,49.1z M32.4,49.4l3.4-0.6l0.6,3.4L33,52.8L32.4,49.4z
	 M27.2,50.5l3.4-0.6l0.6,3.4l-3.4,0.6L27.2,50.5z M21.8,51.3l3.4-0.6l0.6,3.4l-3.4,0.6L21.8,51.3z M15.9,52.1l3.4-0.6l0.6,3.4
	l-3.4,0.6L15.9,52.1z M10.8,53.6l2.3-0.5l0.5,2.3l-2.3,0.5L10.8,53.6z M38.2,53.8l3.4-0.6l0.6,3.4l-3.4,0.6L38.2,53.8z M6.7,55.6
	L8.3,55l0.6,1.6l-1.6,0.6L6.7,55.6z M33.3,54.7l3.4-0.6l0.6,3.4l-3.4,0.6L33.3,54.7z M27.9,55.4l3.4-0.6l0.6,3.4l-3.4,0.6L27.9,55.4
	z M22.3,56.2l3.4-0.6l0.6,3.4l-3.4,0.6L22.3,56.2z M17.2,57l3.4-0.6l0.6,3.4l-3.4,0.6L17.2,57z M39,58.6l3.4-0.6l0.6,3.4L39.6,62
	L39,58.6z M12.4,59.7l2.2-0.7l0.7,2.2l-2.2,0.7L12.4,59.7z M34.3,59.4l3.4-0.6l0.6,3.4l-3.4,0.6L34.3,59.4z M28.9,59.9l3.4-0.6
	l0.6,3.4l-3.4,0.6L28.9,59.9z M24,60.9l3.4-0.6l0.6,3.4l-3.4,0.6L24,60.9z M7.8,60.7l1.6-0.6l0.6,1.6l-1.6,0.6L7.8,60.7z M19.1,62.2
	l3.4-0.6l0.6,3.4l-3.4,0.6L19.1,62.2z M14.3,64l2.2-0.7l0.7,2.2L15,66.2L14.3,64z M34.8,64.1l3.4-0.6l0.6,3.4l-3.4,0.6L34.8,64.1z
	 M29.9,64.8l3.4-0.6l0.6,3.4l-3.4,0.6L29.9,64.8z M24.5,65.7l3.4-0.6l0.6,3.4l-3.4,0.6L24.5,65.7z M10.1,66.4l1.6-0.7l0.7,1.6
	L10.8,68L10.1,66.4z M35.2,68.8l3.4-0.6l0.6,3.4l-3.4,0.6L35.2,68.8z M30.1,69.6l3.4-0.6l0.6,3.4L30.7,73L30.1,69.6z M25,70.4
	l3.4-0.6l0.6,3.4l-3.4,0.6L25,70.4z M36.5,73.5l3.4-0.6l0.6,3.4l-3.4,0.6L36.5,73.5z M31.4,74.3l3.4-0.6l0.6,3.4L32,77.7L31.4,74.3z
	 M26.2,75.3l3.4-0.6l0.6,3.4l-3.4,0.6L26.2,75.3z M95.3,56.8c0-11.9,0-23.8,0-35.7c11.9,0,23.8,0,35.7,0c0,9.7,0,19.3,0,29
	c-7.4,0-14.8,0-22.3,0c0-3,0-5.9,0-8.9c4.4,0,8.9,0,13.3,0c0-3.7,0-7.4,0-11.1c-5.9,0-11.9,0-17.8,0c0,8.9,0,17.8,0,26.8
	C101.3,56.8,98.3,56.8,95.3,56.8z M172.5,56.8c0-3,0-5.9,0-8.9c-4.5,0-8.9,0-13.4,0c0-2.3,0-4.5,0-6.7c-3,0-5.9,0-8.9,0
	c0,2.2,0,4.5,0,6.7c-4.5,0-8.9,0-13.4,0c0,3,0,5.9,0,8.9C148.7,56.8,160.6,56.8,172.5,56.8z M150.2,36.7c3,0,5.9,0,8.9,0
	c0-2.2,0-4.5,0-6.7c4.5,0,9,0,13.4,0c0-3,0-5.9,0-8.9c-11.9,0-23.8,0-35.7,0c0,3,0,5.9,0,8.9c4.5,0,8.9,0,13.4,0
	C150.2,32.2,150.2,34.5,150.2,36.7z M184.4,56.8c9.9-9.9,19.7-19.7,29.6-29.6c-2.1-2-4.3-4-6.5-6.1c-3.7,3.7-7.5,7.6-11.3,11.5
	c-4-3.9-7.8-7.7-11.8-11.5c-2,2.1-4.1,4.2-6.2,6.4c3.8,3.8,7.6,7.6,11.6,11.6c-3.9,3.8-7.8,7.6-11.5,11.3
	C180.4,52.5,182.4,54.7,184.4,56.8z M213.8,50.5c-2.8-2.8-5.5-5.5-8.3-8.3c-2.1,2.1-4.1,4.1-6.2,6.2c2.8,2.8,5.5,5.5,8.3,8.3
	C209.7,54.6,211.7,52.5,213.8,50.5z M255.5,56.8c0-3,0-5.9,0-8.9c-8.9,0-17.8,0-26.8,0c0-6,0-11.9,0-17.9c8.9,0,17.9,0,26.8,0
	c0-3,0-5.9,0-8.9c-11.9,0-23.8,0-35.7,0c0,11.9,0,23.8,0,35.7C231.7,56.8,243.6,56.8,255.5,56.8z M255.5,43.3c0-2.9,0-5.9,0-8.8
	c-7.4,0-14.8,0-22.3,0c0,2.9,0,5.9,0,8.8C240.7,43.3,248.1,43.3,255.5,43.3z M296.9,56.8c0-3,0-5.9,0-8.9c-8.9,0-17.8,0-26.8,0
	c0-2.3,0-4.5,0-6.7c-3,0-5.9,0-8.9,0c0,5.2,0,10.4,0,15.6C273.1,56.8,285,56.8,296.9,56.8z M261.2,36.7c3,0,5.9,0,8.9,0
	c0-5.2,0-10.4,0-15.6c-3,0-5.9,0-8.9,0C261.2,26.3,261.2,31.5,261.2,36.7z"
    />
  </Svg>
);

export default Logo;
