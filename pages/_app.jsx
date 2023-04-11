import { useState, useEffect } from 'react';
import '../styles/app.scss';

function MyApp({ Component, pageProps }) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState('white');
  const [cursorSize, setCursorSize] = useState(1);

  useEffect(() => {
    const onMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
      setCursorColor('black');
      setCursorSize(1.5);
    };

    const onMouseUp = () => {
      setCursorColor('white');
      setCursorSize(1);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <div
        className="circle-cursor"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          backgroundColor: cursorColor,
          transform: `scale(${cursorSize})`,
        }}
      ></div>
    </>
  );
}

export default MyApp;

