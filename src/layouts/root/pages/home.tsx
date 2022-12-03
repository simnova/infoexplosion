import styles from './home.module.css';
import { Helmet } from 'react-helmet';
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


import { ReactComponent as NavStretch } from '../../../assets/nav/nav-99-stretch-kludge-for-left-and-right.svg';


import MuseumPlan from '../../../assets/b-02-museum-plan.png';
import { ReactComponent as MuseumPlanLabels } from '../../../assets/b-01-museum-plan-labels.svg';

import { motion, useScroll, useInView } from 'framer-motion';
import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { useResizeDetector } from 'react-resize-detector';

import AboutBackground from '../../../assets/images/jez-timms-zBF7qkuexmg-unsplash.jpg?sizes[]=200,sizes[]=600,sizes[]=1000&format=webp&useResponsiveLoader=true';
import GetInvolvedBackground from '../../../assets/images/papaioannou-kostas-tysecUm5HJA-unsplash.jpg?sizes[]=200,sizes[]=600,sizes[]=1000&format=webp&useResponsiveLoader=true';
import NewsAndEventsBackground from '../../../assets/images/museums-victoria-QLezSKMJOnw-unsplash.jpg?sizes[]=200,sizes[]=600,sizes[]=1000&format=webp&useResponsiveLoader=true';
import SupportTheMuseumBackground from '../../../assets/images/museums-victoria-TVe0IEdsVc8-unsplash.jpg?sizes[]=200,sizes[]=600,sizes[]=1000&format=webp&useResponsiveLoader=true';
import { Heading, HeadingLevel } from '../../../components/atoms/heading';



export const Home: React.FC<any> = (_props) => {
  const ref = useRef(null);
  //const parentRef = useRef(null);
  const museumRef = useRef(null);
  const aboutRef = useRef(null);
  const attractionsRef = useRef(null);
  const getInvolvedRef = useRef(null);
  const newsAndEventsRef = useRef(null);
  const supportTheMuseumRef = useRef(null);

  const detectorOptions: any = {
    refreshMode: 'debounce',
    refreshRate: 300,
    refreshOptions: { trailing: true },
  };

  const { width: parentWidth, height: parentHeight, ref: parentRef } = useResizeDetector(detectorOptions);
  const { width: childWidth, height: childHeight } = useResizeDetector({ targetRef: ref });

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  const [vvalue, setvvalue] = useState(100);
  const [attractionsProgressPercent, setAttractionsProgressPercent] = useState(1);
  if (!parentRef || !parentRef.current) {
   // console.log('parentRef is null');
  } else {
  //  console.log('parentRef:', parentRef.current.getBoundingClientRect().width);
  }
  const maxWidth = parentWidth ?? Math.min(vw, 780);
//  console.log('maxWidth', maxWidth);
  const [width, setWidth] = useState(maxWidth);
  //const [parentWidth, setParentWidth] = useState(0);

  const { scrollYProgress:logoProgress } = useScroll({
    target: ref,
    offset: ['end 100px', 'start 300px'],
  });

  const { scrollYProgress:attractionsProgress} = useScroll({
    target: museumRef,
    offset: ['end 100px', 'start 300px'],
  });
  useEffect(() => {
    const attractionsProgressChange = attractionsProgress.onChange((v) => {
      console.log('attractionsProgressChange', v);
      setAttractionsProgressPercent(v);
    });
    return () => {
      attractionsProgressChange();
    };
  },[attractionsProgress]);
  


 // console.log('parentRef:', parentRef.current);
  const targetWidth = vw > 1000 ? 300 : 300 * (vw / 1000);
  const targetHeaderOffset = vw > 1000 ? 50 : 50 * (vw / 1000);
  useEffect(() => {
    const unsubProgress = logoProgress.onChange((v) => {
      setvvalue(v);
    //  console.log('scrollPercent:', v);
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
 // console.log('parentWidth', parentWidth);
 // console.log('width', childWidth);
  let backgroundLeftOffset = (parentWidth ?? 0) / 2 + (childWidth ?? 0) / 2; // (width > (600) ? ((parentWidth??0/2) - (width/2)) : (parentWidth??0/2 - width)/2);
  let topOffset = (parentWidth ?? 0) > (childWidth ?? 0) ? (parentWidth ?? 0) / 2 - (childWidth ?? 0) / 2 : 0; // (parentHeight??0)/2;

  const aboutInView = useInView(aboutRef, {
    margin: `-50% 0px -50% 0px`,
  });
  const attractionsInView = useInView(attractionsRef, {
    margin: `-50% 0px -50% 0px`,
  });
  const getInvolvedInView = useInView(getInvolvedRef, {
    margin: `-50% 0px -50% 0px`,
  });
  const newsAndEventsInView = useInView(newsAndEventsRef, {
    margin: `-50% 0px -50% 0px`,
  });
  const supportTheMuseumInView = useInView(supportTheMuseumRef, {
    margin: `-50% 0px -50% 0px`,
  });

  const boxVariant = {
    offscreen: { opacity: 0, x: 200 % vw, rotate: 10 },
    onscreen: { opacity: 1, x: 0, rotate: 0, transition: { duration: 1, ease: 'easeOut' } },
  };
  const headerClass = width === targetWidth ? 'headerFade' : '';
  return (
    <>
      <Helmet>
        <title>Museum of Information Explosion</title>
      </Helmet>
        <div  className={styles[headerClass]} style={{minHeight:'150px',  position: 'sticky', top: '0px', zIndex: 3, width:"100%" }}>
          <NavStretch preserveAspectRatio='none' style={{height:"47px",position:"absolute", zIndex:1, width:"calc(100vw - 1000px)", left:0}}/>
          <NavStretch preserveAspectRatio='none' style={{height:"47px",position:"absolute", zIndex:1, width:"calc(100vw - 1000px)", right:0}}/>
          
          <div style={{ position:'relative', maxWidth:'1000px', margin:'0 auto' }} >
            <div style={{ position: 'static' }}>

            <NavAbout style={{ position: 'absolute', zIndex: 3, display: aboutInView ? 'none' : 'initial' }} />
            <NavAboutHover style={{ position: 'absolute', zIndex: 2, display: !aboutInView ? 'none' : 'initial' }} />
            <NavAttractions style={{ position: 'absolute', zIndex: 3, display: attractionsInView ? 'none' : 'initial' }} />
            <NavAttractionsHover style={{ position: 'absolute', zIndex: 2, display: !attractionsInView ? 'none' : 'initial' }} />
            <NavGetInvolved style={{ position: 'absolute', zIndex: 3, display: getInvolvedInView ? 'none' : 'initial' }} />
            <NavGetInvolvedHover style={{ position: 'absolute', zIndex: 2, display: !getInvolvedInView ? 'none' : 'initial' }} />
            <NavNewsAndEvents style={{ position: 'absolute', zIndex: 3, display: newsAndEventsInView ? 'none' : 'initial' }} />
            <NavNewsAndEventsHover style={{ position: 'absolute', zIndex: 2, display: !newsAndEventsInView ? 'none' : 'initial' }} />
            <NavSupportTheMuseum style={{ position: 'absolute', zIndex: 3, display: supportTheMuseumInView ? 'none' : 'initial' }} />
            <NavSupportTheMuseumHover style={{ position: 'absolute', zIndex: 2, display: !supportTheMuseumInView ? 'none' : 'initial' }} />

            <NavBar style={{ position: 'absolute' }} />
            <div
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%,-28%)',
                minWidth: `${targetWidth}px`,
                minHeight: `${targetWidth}px`,
                display: width === targetWidth ? 'block' : 'none',
              }}
            >
              <MuseumOfInformationExplosionText style={{ position: 'absolute', marginTop: `${targetHeaderOffset}px`, zIndex: 3 }} />

              <MieLogo style={{ position: 'absolute', marginTop: `${targetHeaderOffset}px`, zIndex: 3 }} />
              <RibbonBehindCrest style={{ position: 'absolute', marginTop: `${targetHeaderOffset}px`, zIndex: 3 }} />
              <RightRibbonEnd style={{ position: 'absolute', marginTop: `${targetHeaderOffset}px`, zIndex: 3 }} />
              <LeftRibbonEnd style={{ position: 'absolute', marginTop: `${targetHeaderOffset}px`, zIndex: 3 }} />
              <RibbonFrontOfCrest style={{ position: 'absolute', marginTop: `${targetHeaderOffset}px`, zIndex: 3 }} />
              <LightningBoltsTop style={{ position: 'absolute', marginTop: `${targetHeaderOffset}px`, zIndex: 3 }} />
              <Crest style={{ position: 'absolute', zIndex: 2 }} />
              
            </div>
            </div>  
          </div>
          
        </div>

       <div style={{  backgroundColor: '#b3c8f1'}} >
         
        
       
        
        <div style={{backgroundColor: '#b3c8f1', position:'relative',zIndex:'2' , marginTop: "-120px", paddingTop: "105px"}}>

        <StarburstBlue
                style={{
                  position: 'fixed',
                  display: width === targetWidth ? 'block' : 'none',
                  zIndex: 3,
                  transform: `translateX(-50%)`,
                  left:'50%',
                  margin: '0 auto',
                  top: "calc(min(50vw,500px)*-1)",
                  maxWidth: "min(100vw,1000px)",
                }}
              />
        <div style={{margin:'0 auto', position:"fixed"}}> 
        <div
                className={[styles['whitePulse2']].join(' ')}
                style={{
                  position: 'fixed',
                  zIndex: 2,
                  display: width === targetWidth ? 'block' : 'none',
                  margin: '0 auto',
                  transform: `translateX(-50%)`,
                  left: `50%`,
                  top: "calc(min(50vw,500px)*-1)",
                  minWidth: "min(100vw,1000px)",
                  minHeight: "min(100vw,1000px)",
                }}
              />
        </div>
        
        <StarburstGold
                style={{
                  position: 'fixed',
                  display: width === targetWidth ? 'block' : 'none',
                  zIndex: 1,
                  transform: `translateX(-50%)`,
                  opacity:'.5',
                  left:'50%',
                  margin: '0 auto',
                  top: "calc(min(50vw,500px)*-1)",
                  maxWidth: "min(100vw,1000px)",
                }}
              />
        

        <div style={{ margin: '0 auto', position:'relative', maxWidth: 1000, marginBottom:'50px', zIndex:4 }}>

        <div>
          <div style={{ height: '200px', backgroundColor: 'blue', padding: '10px', color: 'white', display: 'none' }}>Hello</div>
          <div
            ref={parentRef}
            style={{ marginTop:'-150px', minHeight: '400px',  paddingTop: '100px',  padding: '10px', color: 'white', overflow: 'hidden' }}
          >
            <div
              ref={ref}
              style={{ maxWidth: `${width}px`, margin: '0 auto', marginTop: '100px', position: 'relative', visibility: `${width === targetWidth ? 'hidden' : 'visible'}` }}
            >
              <MuseumOfInformationExplosionText style={{ position: 'absolute', zIndex: 3 }} />
              <MieLogo style={{ position: 'absolute', zIndex: 3 }} />
              <BarLeft style={{ position: 'absolute', zIndex: 3 }} />
              <BarRight style={{ position: 'absolute', zIndex: 3 }} />
              <RibbonBehindCrest style={{ position: 'absolute', zIndex: 3 }} />
              <RightRibbonEnd style={{ position: 'absolute', zIndex: 3 }} />
              <LeftRibbonEnd style={{ position: 'absolute', zIndex: 3 }} />
              <RibbonFrontOfCrest style={{ position: 'absolute', zIndex: 3 }} />
              <LightningBoltsTop style={{ position: 'absolute', zIndex: 3 }} />
              <LightningBoltsBottomLeft style={{ position: 'absolute', zIndex: 3 }} />
              <LightningBoltsBottomRight style={{ position: 'absolute', zIndex: 3 }} />
              <MorseCodeM1 className={styles['morsecodem1']} style={{ position: 'absolute', zIndex: 3 }} />
              <MorseCodeM2 className={styles['morsecodem2']} style={{ position: 'absolute', zIndex: 3 }} />
              <MorseCodeI1 className={styles['morsecodei1']} style={{ position: 'absolute', zIndex: 3 }} />
              <MorseCodeI2 className={styles['morsecodei2']} style={{ position: 'absolute', zIndex: 3 }} />
              <MorseCodeE className={styles['morsecodee']} style={{ position: 'absolute', zIndex: 3 }} />

              <ScrollLeft style={{ position: 'absolute', zIndex: 3, left: '0px', top: '0px' }} />
              <ScrollRight style={{ position: 'absolute', zIndex: 3, right: '0px', top: '0px' }} />

              <Crest style={{ position: 'relative', zIndex: 2, opacity: '100', visibility: `${vvalue === 0 ? 'hidden' : 'inherit'}` }} />
              <StarburstBlue
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  opacity: `${vvalue}`,
                  transform: `translateX(-50%)`,
                  left:'50%',
                  margin: '0 auto',
                  top: `-${topOffset}px`,
                  minWidth: `${parentWidth}px`,
                }}
              />
              <div
                className={[styles['whitePulse']].join(' ')}
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  opacity: `${vvalue}`,
                  margin: '0 auto',
                  left: `0px`,
                  top: `-${width / 12}px`,
                  minWidth: `${width}px`,
                  minHeight: `${width}px`,
                }}
              />
              <StarburstGold
                style={{
                  position: 'absolute',
                  zIndex: 0,
                  opacity: `${vvalue}`,
                  transform: `translateX(-50%)`,
                  left:'50%',
                  margin: '0 auto',
                  top: `-${topOffset}px`,
                  minWidth: `${parentWidth}px`,
                }}
              />
            </div>
          </div>
          
          
          <motion.div ref={museumRef} style={{minHeight: '500px',  padding: '10px 20px 50px 20px', color: 'white' }}>
           
      
            <motion.div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <motion.div style={{position:'relative',  maxWidth:`${Math.max(attractionsProgressPercent,.3)*100}%`}}>
              <MuseumPlanLabels style={{position:"absolute", zIndex:1}} />
                <img src={MuseumPlan} style={{position:"relative"}} alt="Museum Plan" />
              </motion.div>
              
            </motion.div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{maxWidth:"500px", backgroundColor: "rgba(255, 255, 255,0.8)", padding:'20px', color:'black'}}>
              <Heading level={HeadingLevel.H1}  style={{textShadow: "white 0px 0px 2px", color:"black"}}>The Museum</Heading><br/>
              Our modern lives depend on effective communication and information management for work, school, and even entertainment. It only takes one click to contact
              someone across the country or across the world… but it hasn't always been this way. Crucial developments in technology paved the way for where we are now. The
              Museum of Information Explosion (MIE) brings this story to life through installations, game-play, and the lives of many notable inventors, taking visitors on a
              journey from the introduction of the telegraph, to what's coming next!
              </div>
            </div>

          </motion.div>

          <div ref={aboutRef} style={{minHeight: '500px',  padding: '30vw 20px 100px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{maxWidth:"500px", backgroundColor: "rgba(255, 255, 255,0.8)", padding:'20px', color:'black'}}>
              <Heading level={HeadingLevel.H1}  style={{textShadow: "white 0px 0px 2px", color:"black"}}>About</Heading><br/>
              The Museum of Information Explosion is a communication technology museum located in Huntsville, Alabama. It provides a hands-on, immersive experience where
                guests can explore, interact, and learn about communication technologies throughout history. Visitors will leave the museum with more appreciation for the
                business leaders and inventors alike that have paved the way for the digital technologies we rely on today.
            </div>
          </div>      

          <div ref={attractionsRef} style={{minHeight: '500px',  padding: '30vw 20px 100px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{maxWidth:"500px", backgroundColor: "rgba(255, 255, 255,0.8)", padding:'20px', color:'black'}}>
              <Heading level={HeadingLevel.H1}  style={{textShadow: "white 0px 0px 2px", color:"black"}}>Attractions</Heading><br/>
              Exhibitions designed to tell the stories of communication technology that made it possible for humans to connect on a much larger scale. Within these
                  exhibits, we hope to give you a new perspective on how history has shaped the way we share information. Exhibits feature antiques, artifacts, digital
                  interactive “experiments”, and Augmented and Virtual Reality (AR/VR) content to give visitors an engaging, educational, and fun experience.
            </div>
          </div>      


          <div  style={{display:'none', position:'relative', marginTop:'20px',minHeight: '500px', padding: '10px 20px 50px 20px', color: 'white' }}>
            <div style={{position:'relative', zIndex:1}}>
              <Heading level={HeadingLevel.H1}  style={{padding:'25px 20px', textShadow: "black 0px 0px 5px", color:"white",background: "linear-gradient(90deg, rgba(0,0,0,.5) 52%, rgba(0,0,0,.2) 100%)"}}>About</Heading>
              <motion.div variants={boxVariant} initial={'offscreen'} whileInView={'onscreen'} viewport={{ once: false }} className={styles['card']}>
                The Museum of Information Explosion is a communication technology museum located in Huntsville, Alabama. It provides a hands-on, immersive experience where
                guests can explore, interact, and learn about communication technologies throughout history. Visitors will leave the museum with more appreciation for the
                business leaders and inventors alike that have paved the way for the digital technologies we rely on today.
              </motion.div>
            </div>
            <img
              src={AboutBackground.src}
              srcSet={AboutBackground.srcSet}
              width={AboutBackground.width}
              height={AboutBackground.height}
              sizes='(min-width: 1024px) 1024px, 100vw'
              loading="lazy"
              alt="About Background"
              style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: 0}}
            />
          </div>
          <div style={{ display:'none', marginTop:'20px',minHeight: '500px', backgroundColor: 'white', padding: '10px 20px', color: 'black' }}>
              <Heading level={HeadingLevel.H1}  style={{textShadow: "white 0px 0px 2px", color:"black"}}>Attractions</Heading>
              <motion.div variants={boxVariant} initial={'offscreen'} whileInView={'onscreen'} viewport={{ once: false }} className={styles['card']}>
                  Exhibitions designed to tell the stories of communication technology that made it possible for humans to connect on a much larger scale. Within these
                  exhibits, we hope to give you a new perspective on how history has shaped the way we share information. Exhibits feature antiques, artifacts, digital
                  interactive “experiments”, and Augmented and Virtual Reality (AR/VR) content to give visitors an engaging, educational, and fun experience.
              </motion.div>
          </div>
          <div ref={getInvolvedRef} style={{position:'relative', marginTop:'20px',minHeight: '500px',  padding: '10px 20px 50px 20px', color: 'white' }}>
          <div style={{position:'relative', zIndex:1}}>
            <Heading level={HeadingLevel.H1}  style={{padding:'25px 20px', textShadow: "black 0px 0px 5px", color:"white",background: "linear-gradient(90deg, rgba(0,0,0,.5) 52%, rgba(0,0,0,.2) 100%)"}}>Get Involved</Heading>
            <motion.div variants={boxVariant} initial={'offscreen'} whileInView={'onscreen'} viewport={{ once: false }} className={styles['card']}>
                Several regional radio clubs now call the Museum of Information Explosion (MIE) home. Each club focuses on a different aspect of computing or radio
                communication. The MIE is excited to facilitate a workspace for each member to be able to indulge in their hobbies and passions! We highly value our
                volunteers! We have numerous volunteer opportunities for those that are interested in becoming a part of our museum. Please fill out the contact form below
                to get started.
            </motion.div>
            </div>
            <img
              src={GetInvolvedBackground.src}
              srcSet={GetInvolvedBackground.srcSet}
              width={GetInvolvedBackground.width}
              height={GetInvolvedBackground.height}
              sizes='(min-width: 1024px) 1024px, 100vw'
              loading="lazy"
              alt="Get Involved"
              style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: 0}}
            />
          </div>
          <div ref={newsAndEventsRef} style={{position:'relative', marginTop:'20px',minHeight: '500px',  padding:'10px 20px 50px 20px', color: 'white' }}>
              <div style={{position:'relative', zIndex:1}}>
              <Heading level={HeadingLevel.H1}  style={{padding:'25px 20px', textShadow: "black 0px 0px 5px", color:"white",background: "linear-gradient(90deg, rgba(0,0,0,.5) 52%, rgba(0,0,0,.2) 100%)"}}>News & Events</Heading>
              <motion.div variants={boxVariant} initial={'offscreen'} whileInView={'onscreen'} viewport={{ once: false }} className={styles['card']}>
                  As we approach our grand opening, we are working towards perfecting each exhibit to share with our future guests. In the meantime, our spaces are available
                  for private events and parties. Contact us below for more information regarding rentals!
              </motion.div>
              </div>
              <img
                src={NewsAndEventsBackground.src}
                srcSet={NewsAndEventsBackground.srcSet}
                width={NewsAndEventsBackground.width}
                height={NewsAndEventsBackground.height}
                sizes='(min-width: 1024px) 1024px, 100vw'
                loading="lazy"
                alt="News and Events Background"
                style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: 0}}
              />

          </div>
          <div ref={supportTheMuseumRef} style={{marginTop:'20px', minHeight: '500px', backgroundColor: 'green', padding: '10px 20px 50px 20px', color: 'white', position:'relative' }}>

 
              <div style={{position:'relative', zIndex:1}}>
                <Heading level={HeadingLevel.H1} style={{position:'relative', padding:'25px 20px', textShadow: "black 0px 0px 5px", color:"white",background: "linear-gradient(90deg, rgba(0,0,0,.5) 52%, rgba(0,0,0,.2) 100%)"}}>Support the Museum</Heading>
                <motion.div variants={boxVariant} initial={'offscreen'} whileInView={'onscreen'} viewport={{ once: false }} className={styles['card']}>
                    The Museum of Information Explosion is a 501(c)(3) and all donations are tax-deductible. We would love for you to become a part of our mission to hold a
                    meaningful space for visitors of all ages to learn and immerse themselves in communication technology. Return to this page in the coming weeks to learn more
                    ways you can get involved.
                </motion.div>
              </div>
              <img
                src={SupportTheMuseumBackground.src}
                srcSet={SupportTheMuseumBackground.srcSet}
                width={SupportTheMuseumBackground.width}
                height={SupportTheMuseumBackground.height}
                sizes='(min-width: 1024px) 1024px, 100vw'
                loading="lazy"
                alt="Support The Museum"
                style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center"}}
              />
          </div>
          </div>
        </div>
      </div>
      </div>

    </>
  );
};
