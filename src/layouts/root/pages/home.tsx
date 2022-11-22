import styles from './home.module.css'; 
import { ReactComponent as Crest } from '../../../assets/13-crest.svg';
import { ReactComponent as MuseumOfInformationExplosionText } from '../../../assets/25-museum-of-information-explosion-text.svg';
import { ReactComponent as MieLogo } from '../../../assets/14-mie-logo.svg';

import { ReactComponent as BarRight } from '../../../assets/08-bar-right.svg';
import { ReactComponent as BarLeft } from '../../../assets/09-bar-left.svg';
import { ReactComponent as RibbonBehindCrest } from '../../../assets/10-ribbon-behind-crest.svg';
import { ReactComponent as RightRibbonEnd } from '../../../assets/12-right-ribbon-end.svg';
import { ReactComponent as LeftRibbonEnd } from '../../../assets/11-left-ribbon-end.svg';

import { ReactComponent as RibbonFrontOfCrest } from '../../../assets/15-ribbon-front-of-crest.svg';
import { ReactComponent as LightningBoltsTop } from '../../../assets/16-lightening-bolts-top.svg';
import { ReactComponent as LightningBoltsBottomLeft } from '../../../assets/17-lightening-bolts-bottom-left.svg';
import { ReactComponent as LightningBoltsBottomRight } from '../../../assets/18-lightening-bolts-bottom-right.svg';


import { ReactComponent as MorseCodeM1 } from '../../../assets/26-morse-code-m1.svg';
import { ReactComponent as MorseCodeM2 } from '../../../assets/27-morse-code-m2.svg';
import { ReactComponent as MorseCodeI1 } from '../../../assets/28-morse-code-i1.svg';
import { ReactComponent as MorseCodeI2 } from '../../../assets/29-morse-code-i2.svg';
import { ReactComponent as MorseCodeE } from '../../../assets/30-morse-code-e.svg';

import { ReactComponent as NavBar } from '../../../assets/nav/nav-00-bar.svg';
import { ReactComponent as NavAbout } from '../../../assets/nav/nav-01-about.svg';
import { ReactComponent as NavAboutHover } from '../../../assets/nav/nav-01b-about-over.svg';
import { ReactComponent as NavAttractions } from '../../../assets/nav/nav-02-attractions.svg';
import { ReactComponent as NavAttractionsHover } from '../../../assets/nav/nav-02b-attractions-over.svg';
import { ReactComponent as NavGetInvolved } from '../../../assets/nav/nav-03-get-involved.svg';
import { ReactComponent as NavGetInvolvedHover } from '../../../assets/nav/nav-03b-get-involved-over.svg';
import { ReactComponent as NavNewsAndEvents } from '../../../assets/nav/nav-04-news-and-events.svg';
import { ReactComponent as NavNewsAndEventsHover } from '../../../assets/nav/nav-04b-news-and-events-over.svg';
import { ReactComponent as NavSupportTheMuseum } from '../../../assets/nav/nav-05-support-the-museum.svg';
import { ReactComponent as NavSupportTheMuseumHover } from '../../../assets/nav/nav-05b-support-the-museum-over.svg';
import { ReactComponent as NavVisit } from '../../../assets/nav/nav-99-visit.svg';






import { ReactComponent as ScrollRight } from '../../../assets/06-scroll-right.svg';
import { ReactComponent as ScrollLeft } from '../../../assets/07-scroll-left.svg';


import { ReactComponent as StarburstBlue } from '../../../assets/04-starburst-blue.svg';
import { ReactComponent as StarburstGold } from '../../../assets/00-starburst-gold-on-center-no-bounding-box.svg';


import { useScroll, useInView } from 'framer-motion';
import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { useResizeDetector } from 'react-resize-detector';

export const Home: React.FC<any> = (_props) => {
  const ref = useRef(null);
  //const parentRef = useRef(null);

  const aboutRef = useRef(null);
  const attractionsRef = useRef(null);
  const getInvolvedRef = useRef(null);
  const newsAndEventsRef = useRef(null);
  const supportTheMuseumRef = useRef(null);

  const detectorOptions: any = {
    refreshMode: 'debounce',
    refreshRate: 300,
    refreshOptions: { trailing: true },
  }

  const { width:parentWidth, height:parentHeight, ref: parentRef } = useResizeDetector(detectorOptions);
  const { width:childWidth, height:childHeight } = useResizeDetector({ targetRef: ref });

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  const [vvalue, setvvalue] = useState(100);
  if(!parentRef || !parentRef.current){
    console.log("parentRef is null");
  }else{
    console.log("parentRef:", parentRef.current.getBoundingClientRect().width);
  };
  const maxWidth = parentWidth??(Math.min(vw, 780));
  console.log('maxWidth', maxWidth);
  const [width, setWidth] = useState(maxWidth);
  //const [parentWidth, setParentWidth] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end 100px', 'start 300px'],
  });
  console.log('parentRef:', parentRef.current);
  const targetWidth = vw > 1000 ? 300: (300 * (vw/1000));
  useEffect(() => {
    const unsubProgress = scrollYProgress.onChange((v) => {
        setvvalue(v);
        console.log('scrollPercent:',v);
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


  const aboutInView = useInView(aboutRef,{
    margin: `-50% 0px -50% 0px`
  })
  const attractionsInView = useInView(attractionsRef,{
    margin: `-50% 0px -50% 0px`
  })
  const getInvolvedInView = useInView(getInvolvedRef,{
    margin: `-50% 0px -50% 0px`
  })
  const newsAndEventsInView = useInView(newsAndEventsRef,{
    margin: `-50% 0px -50% 0px`
  })
  const supportTheMuseumInView = useInView(supportTheMuseumRef,{
    margin: `-50% 0px -50% 0px`
  })


  return (
    <div style={{margin:'0 auto',maxWidth:1000}}>
      <div style={{  backgroundColor: 'yellow', margin: '0 auto', position:'sticky', top:'0px', zIndex:3 }}>
            <NavAbout style={{position:'absolute',zIndex:3,display:aboutInView?'none':'initial'}} />
            <NavAboutHover style={{position:'absolute',zIndex:2,display:!aboutInView?'none':'initial'}} />
            <NavAttractions style={{position:'absolute',zIndex:3,display:attractionsInView?'none':'initial'}} />
            <NavAttractionsHover style={{position:'absolute',zIndex:2,display:!attractionsInView?'none':'initial'}} />
            <NavGetInvolved style={{position:'absolute',zIndex:3,display:getInvolvedInView?'none':'initial'}} />
            <NavGetInvolvedHover style={{position:'absolute',zIndex:2,display:!getInvolvedInView?'none':'initial'}} />
            <NavNewsAndEvents style={{position:'absolute',zIndex:3,display:newsAndEventsInView?'none':'initial'}} />
            <NavNewsAndEventsHover style={{position:'absolute',zIndex:2,display:!newsAndEventsInView?'none':'initial'}} />
            <NavSupportTheMuseum style={{position:'absolute',zIndex:3,display:supportTheMuseumInView?'none':'initial'}} />
            <NavSupportTheMuseumHover style={{position:'absolute',zIndex:2,display:!supportTheMuseumInView?'none':'initial'}} />

            
            <NavBar style={{position:'absolute'}} />
            <div  style={{position:'absolute',left:'50%',transform:'translate(-50%,-28%)',minWidth: `${targetWidth}px`,minHeight:`${targetWidth}px`,display:(vvalue === 0?'block':'none')}}>
              <MuseumOfInformationExplosionText style={{position:'absolute', marginTop:"50px",zIndex:3  }} />
              
              <MieLogo style={{position:'absolute', marginTop:"50px" ,zIndex:3}} />
              <BarLeft style={{position:'absolute', marginTop:"50px",zIndex:3 }} />
              <BarRight style={{position:'absolute', marginTop:"50px",zIndex:3}} />
              <RibbonBehindCrest style={{position:'absolute', marginTop:"50px",zIndex:3}} />
              <RightRibbonEnd style={{position:'absolute', marginTop:"50px",zIndex:3}} />
              <LeftRibbonEnd style={{position:'absolute', marginTop:"50px",zIndex:3}} />
              <RibbonFrontOfCrest style={{position:'absolute', marginTop:"50px",zIndex:3}} />
              <LightningBoltsTop style={{position:'absolute', marginTop:"50px",zIndex:3}} />
              <Crest style={{position:'absolute',zIndex:1}} />
            </div>
            
      </div>
      <div>
        <div style={{ height: '200px', backgroundColor: 'blue', padding: '10px', color: 'white', display:'none' }}>Hello</div>
        <div ref={parentRef} style={{ minHeight: '400px', maxHeight:'800px', paddingTop:'100px', backgroundColor: '#b3c8f1', padding: '10px', color: 'white', overflow:'hidden' }}>
          <div ref={ref}  style={{maxWidth: `${width}px`, margin: '0 auto', marginTop:'100px', position:'relative', visibility:`${vvalue === 0?'hidden':'visible'}` }}>
              <MuseumOfInformationExplosionText style={{position:'absolute',zIndex:3  }} />
              <MieLogo style={{position:'absolute' ,zIndex:3}} />
              <BarLeft style={{position:'absolute',zIndex:3 }} />
              <BarRight style={{position:'absolute',zIndex:3}} />
              <RibbonBehindCrest style={{position:'absolute',zIndex:3}} />
              <RightRibbonEnd style={{position:'absolute',zIndex:3}} />
              <LeftRibbonEnd style={{position:'absolute',zIndex:3}} />
              <RibbonFrontOfCrest style={{position:'absolute',zIndex:3}} />
              <LightningBoltsTop style={{position:'absolute',zIndex:3}} />
              <LightningBoltsBottomLeft style={{position:'absolute',zIndex:3}} />
              <LightningBoltsBottomRight style={{position:'absolute',zIndex:3}} />
              <MorseCodeM1 className={styles['morsecodem1']} style={{position:'absolute',zIndex:3}} />
              <MorseCodeM2 className={styles['morsecodem2']} style={{position:'absolute',zIndex:3}} />
              <MorseCodeI1 className={styles['morsecodei1']} style={{position:'absolute',zIndex:3}} />
              <MorseCodeI2 className={styles['morsecodei2']} style={{position:'absolute',zIndex:3}} />
              <MorseCodeE className={styles['morsecodee']} style={{position:'absolute',zIndex:3}} />


              <ScrollLeft style={{position:'absolute',zIndex:3, left: '0px', top: '0px' }} />
              <ScrollRight style={{position:'absolute',zIndex:3, right: '0px', top: '0px' }} />

              <Crest style={{position:'static', zIndex:2, opacity:'100', visibility:`${vvalue===0?'hidden':'inherit'}` }} />
              <StarburstBlue style={{position:'absolute', zIndex:1,  opacity:`${vvalue}`,transform:`translateX(-${backgroundLeftOffset}px)`, margin:'0 auto', top:`-${topOffset}px`,  minWidth:`${parentWidth}px`}} />
              <div className={[ styles['whitePulse']].join(' ')} style={{position:'absolute', zIndex:1,  opacity:`${vvalue}`, margin:'0 auto',  left:`0px`, top:`-${width/12}px`, minWidth:`${width}px`, minHeight:`${width}px`}} />
              <StarburstGold style={{position:'absolute', zIndex:0,  opacity:`${vvalue}`,transform:`translateX(-${backgroundLeftOffset}px)`, margin:'0 auto', top:`-${topOffset}px`,  minWidth:`${parentWidth}px`}} />



          </div>

        </div>
        Hello World! {scrollYProgress.get()} -width: {width}px -vvalue: {vvalue}
        <div ref={aboutRef} style={{ height: '500px', backgroundColor: 'blue', padding: '10px', color: 'white' }}>About</div>
        <div ref={attractionsRef} style={{ height: '500px', backgroundColor: 'green', padding: '10px', color: 'white' }}>Attractions</div>
        <div ref={getInvolvedRef} style={{ height: '500px', backgroundColor: 'orange', padding: '10px', color: 'white' }}>Get Involved</div>
        <div ref={newsAndEventsRef} style={{ height: '500px', backgroundColor: 'blue', padding: '10px', color: 'white' }}>News & Events</div>
        <div ref={supportTheMuseumRef} style={{ height: '500px', backgroundColor: 'green', padding: '10px', color: 'white' }}>Support the Museum</div>
        <div style={{ height: '500px', backgroundColor: 'orange', padding: '10px', color: 'white' }}>Footer</div>
      </div>
    </div>
  );
};
