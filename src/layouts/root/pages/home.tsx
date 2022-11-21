import { ReactComponent as Crest } from '../../../assets/13-crest.svg';
import { ReactComponent as StarburstGold } from '../../../assets/00-starburst-gold-on-center-no-bounding-box.svg';
import { ReactComponent as MuseumOfInformationExplosionText } from '../../../assets/25-museum-of-information-explosion-text.svg';
import { ReactComponent as MieLogo } from '../../../assets/14-mie-logo.svg';
import { useScroll } from 'framer-motion';
import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { useResizeDetector } from 'react-resize-detector';

export const Home: React.FC<any> = (_props) => {
  const ref = useRef(null);
  const parentRef = useRef(null);
  const { width:parentWidth, height:parentHeight } = useResizeDetector({ targetRef: parentRef });
  const { width:childWidth, height:childHeight } = useResizeDetector({ targetRef: ref });

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const [vvalue, setvvalue] = useState(100);
  const maxWidth = Math.min(vw * 0.8, 1000);
  const [width, setWidth] = useState(maxWidth);
  //const [parentWidth, setParentWidth] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['100px 100px', 'start 300px'],
  });
  console.log(parentRef.current);
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
  });
  /*
  useLayoutEffect(() => {

    if (parentRef.current) {
      setParentWidth(parentRef.current?.['offsetWidth']);
    }
  }, []);
  */
  console.log("parentWidth",parentWidth);
  console.log("width",childWidth);
  let backgroundLeftOffset =   ((parentWidth??0)/2) + ((childWidth??0)/2) ; // (width > (600) ? ((parentWidth??0/2) - (width/2)) : (parentWidth??0/2 - width)/2);
  let topOffset = (parentWidth??0) > (childWidth??0 )?  ((parentWidth??0)/2)-((childWidth??0)/2): 0;// (parentHeight??0)/2;
  return (
    <div>
      <div style={{ maxWidth: `${targetWidth}px`, backgroundColor: 'yellow', margin: '0 auto', display: (vvalue === 0?'block':'none'),  position:'sticky', top:'0px', zIndex:3 }}>
            <Crest />
      </div>
      <div>
        <div style={{ height: '200px', backgroundColor: 'blue', padding: '10px', color: 'white' }}>Hello</div>
        <div ref={parentRef} style={{ minHeight: '400px', maxHeight:'800px', backgroundColor: '#b3c8f1', padding: '10px', color: 'white', overflow:'hidden' }}>
          <div ref={ref}  style={{maxWidth: `${width}px`, margin: '0 auto', position:'relative' }}>
              <MuseumOfInformationExplosionText style={{position:'absolute', stroke:'white', }} />
              <MieLogo style={{position:'absolute' }} />
              <Crest style={{position:'static', zIndex:2, strokeOpacity:0,opacity:`${vvalue===0?0:100},` }} />
              <StarburstGold style={{position:'absolute', strokeOpacity:0, opacity:`${vvalue}`,transform:`translateX(-${backgroundLeftOffset}px)`, margin:'0 auto', top:`-${topOffset}px`, zIndex:0, minWidth:`${parentWidth}px`}} />



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
