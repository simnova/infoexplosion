import { ReactComponent as Crest } from '../../../assets/13-crest.svg';
import { useScroll } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export const Home: React.FC<any> = (_props) => {
  const ref = useRef(null);
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const [vvalue, setvvalue] = useState(100);
  const maxWidth = Math.min(vw * 0.8, 1000);
  const [width, setWidth] = useState(maxWidth);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['100px 100px', 'start 300px'],
  });

  const targetWidth = 100;
  useEffect(() => {
    const unsubProgress = scrollYProgress.onChange((v) => {
        setvvalue(v);
        console.log(v);
      var newWidth = Math.max(maxWidth * v, targetWidth);
      setWidth(newWidth);
    });
    return () => {
      unsubProgress();
    };
  }, []);

  return (
    <div>
      <div style={{ maxWidth: `${targetWidth}px`, backgroundColor: 'yellow', margin: '0 auto', display: (vvalue === 0?'block':'none'),  position:'sticky', top:'0px' }}>
            <Crest />
      </div>
      <div>
        <div style={{ height: '200px', backgroundColor: 'blue', padding: '10px', color: 'white' }}>Hello</div>
        <div style={{ minHeight: '400px', backgroundColor: 'red', padding: '10px', color: 'white' }}>
          <div ref={ref} style={{ maxWidth: `${width}px`, backgroundColor: 'yellow', margin: '0 auto' }}>
            <Crest />
          </div>
        </div>
        Hello World! {scrollYProgress.get()} -width: {width}px
        <div style={{ height: '200px', backgroundColor: 'blue', padding: '10px', color: 'white' }}>Hello</div>
        <div style={{ height: '200px', backgroundColor: 'blue', padding: '10px', color: 'white' }}>Hello</div>
        <div style={{ height: '200px', backgroundColor: 'blue', padding: '10px', color: 'white' }}>Hello</div>
        <div style={{ height: '200px', backgroundColor: 'blue', padding: '10px', color: 'white' }}>Hello</div>
      </div>
    </div>
  );
};
