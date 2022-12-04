import styles from './home.module.css';
import { Helmet } from 'react-helmet';
import { HashLink as Link } from 'react-router-hash-link';
import { motion, useScroll, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';

// components
import { Heading, HeadingLevel } from '../../../components/atoms/heading';
import { FooterForm } from '../../../components/atoms/footer-form';

// images
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

import { ReactComponent as ScrollRight } from '../../../assets/06-scroll-right.svg';
import { ReactComponent as ScrollLeft } from '../../../assets/07-scroll-left.svg';

import { ReactComponent as StarburstBlue } from '../../../assets/04-starburst-blue.svg';
import { ReactComponent as StarburstGold } from '../../../assets/00-starburst-gold-on-center-no-bounding-box.svg';

import { ReactComponent as IphoneComingSoon } from '../../../assets/c-02-iphone-coming-soon.svg';
import IPhoneWithApp from '../../../assets/c-01-iphone-with-app.png?sizes[]=200,sizes[]=600,sizes[]=1000&format=webp&useResponsiveLoader=true';

import { ReactComponent as NavStretch } from '../../../assets/nav/nav-99-stretch-kludge-for-left-and-right.svg';
import { ReactComponent as VectorClosed } from '../../../assets/vector-closed.svg';

import MuseumPlan from '../../../assets/b-02-museum-plan.png';
import { ReactComponent as MuseumPlanLabels } from '../../../assets/b-01-museum-plan-labels.svg';



export const Home: React.FC<any> = (props) => {

  // custom scroll implementation
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -200;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    sleep(800).then(() => { // wait for impact of screen height resize due to logo scaling and then scroll to element again as it has shifted
      const yCoordinate2 = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: yCoordinate2 + yOffset });
    });
  };

  const detectorOptions: any = {
    refreshMode: 'debounce',
    refreshRate: 300,
    refreshOptions: { trailing: true },
  };

  // define refs for each section
  const logoRef = useRef(null);
  const { ref: logoContainerRef } = useResizeDetector(detectorOptions);
  const museumRef = useRef(null);
  const aboutRef = useRef(null);
  const attractionsRef = useRef(null);
  const getInvolvedRef = useRef(null);
  const newsAndEventsRef = useRef(null);
  const supportTheMuseumRef = useRef(null);



  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const [logoScrollPercent, setLogoScrollPercent] = useState(1);
  const [attractionsProgressPercent, setAttractionsProgressPercent] = useState(1);


  const { scrollYProgress: logoProgress } = useScroll({
    target: logoContainerRef,
    offset: ['500px start', 'start start'],
  });

  const { scrollYProgress: attractionsProgress } = useScroll({
    target: museumRef,
    offset: ['end 100px', 'start 300px'],
  });

  useEffect(() => {
    const attractionsProgressChange = attractionsProgress.onChange((v) => {
      setAttractionsProgressPercent(v);
    });
    return () => {
      attractionsProgressChange();
    };
  }, [attractionsProgress, props.parentRef]);

  const targetWidth = vw > 1000 ? 300 : 300 * (vw / 1000);
  const targetWidth2 = vw > 1000 ? 800 : 800 * (vw / 1000);
  const targetHeaderOffset2 = vw > 1000 ? 222 : 222 * (vw / 1000);

  useEffect(() => {
    const logoProgressChange = logoProgress.onChange((v) => {
      setLogoScrollPercent(v - (1 - v) * 1); //accelerate scale to match header size
    });
    return () => {
      logoProgressChange();
    };
  }, [logoProgress]);

  // determine if content sections are in view to highlight corresponding nav items
  const logoInView = useInView(logoRef, {
    margin: `-250px 0px 0px 0px`,
  });
  const aboutInView = useInView(aboutRef, {
    margin: `-200px 0px 0px 0px`,
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

  const headerClass = !logoInView ? 'headerFade' : '';
  return (
    <>
      <Helmet>
        <title>Museum of Information Explosion</title>
      </Helmet>
      <div className={styles[headerClass]} style={{ minHeight: '150px', position: 'sticky', top: '0px', zIndex: 3, width: '100%' }}>
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'green',
            height: '47px',
            margin: '0 auto',
            left: 'max(calc((100vw - 1000px) / 2),0px)',
            width: '100%',
            maxWidth: '1000px',
            zIndex: '4',
            opacity: '0',
          }}
        >
          <Link to="/#aboutTheMuseum" className={styles.logoLink} scroll={scrollWithOffset}>
            <div style={{ display: 'inline-block', backgroundColor: 'orange', height: '47px', width: '12%' }}></div>
          </Link>
          <Link to="/#museumAttractions" className={styles.logoLink} scroll={scrollWithOffset}>
            <div style={{ display: 'inline-block', backgroundColor: 'yellow', height: '47px', width: '15%' }}></div>
          </Link>
          <Link to="/#getInvolved" className={styles.logoLink} scroll={scrollWithOffset}>
            <div style={{ display: 'inline-block', backgroundColor: 'orange', height: '47px', width: '15%' }}></div>
          </Link>
          <Link to="/#" className={styles.logoLink} scroll={scrollWithOffset}>
            <div style={{ display: 'inline-block', backgroundColor: 'yellow', height: '47px', width: '16%' }}></div>
          </Link>
          <Link to="/#newsAndEvents" className={styles.logoLink} scroll={scrollWithOffset}>
            <div style={{ display: 'inline-block', backgroundColor: 'orange', height: '47px', width: '18%' }}></div>
          </Link>
          <Link to="/#supportTheInfoExplosionMuseum" className={styles.logoLink} scroll={scrollWithOffset}>
            <div style={{ display: 'inline-block', backgroundColor: 'yellow', height: '47px', width: '24%' }}></div>
          </Link>
        </div>
        <NavStretch preserveAspectRatio="none" style={{ height: '47px', position: 'absolute', zIndex: 1, width: 'calc(50vw - 500px)', left: 0 }} />
        <NavStretch preserveAspectRatio="none" style={{ height: '47px', position: 'absolute', zIndex: 1, width: 'calc(50vw - 500px)', right: 0 }} />

        <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
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
                minWidth: `${targetWidth2}px`,
                minHeight: `${targetWidth2}px`,
                display: !logoInView ? 'block' : 'none',
              }}
            >
              <VectorClosed style={{ position: 'absolute', marginTop: `${targetHeaderOffset2}px`, zIndex: 3 }} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#b3c8f1', marginTop: '-50px' }}>
        <div style={{ backgroundColor: '#b3c8f1', position: 'relative', zIndex: '2', marginTop: '-120px', paddingTop: '105px' }}>
          <StarburstBlue
            style={{
              position: 'fixed',
              display: !logoInView ? 'block' : 'none',
              zIndex: 3,
              transform: `translateX(-50%)`,
              left: '50%',
              margin: '0 auto',
              top: 'calc(min(50vw,500px)*-1)',
              maxWidth: 'min(100vw,1000px)',
            }}
          />
          <div style={{ margin: '0 auto', position: 'fixed' }}>
            <div
              className={[styles['whitePulse2']].join(' ')}
              style={{
                position: 'fixed',
                zIndex: 2,
                display: !logoInView ? 'block' : 'none',
                margin: '0 auto',
                transform: `translateX(-50%)`,
                left: `50%`,
                top: 'calc(min(50vw,500px)*-1)',
                minWidth: 'min(100vw,1000px)',
                minHeight: 'min(100vw,1000px)',
              }}
            />
          </div>

          <StarburstGold
            style={{
              position: 'fixed',
              display: !logoInView ? 'block' : 'none',
              zIndex: 1,
              transform: `translateX(-50%)`,
              opacity: '.5',
              left: '50%',
              margin: '0 auto',
              top: 'calc(min(50vw,500px)*-1)',
              maxWidth: 'min(100vw,1000px)',
            }}
          />

          <div style={{ margin: '0 auto', position: 'relative', maxWidth: 1000, marginBottom: '50px', zIndex: 4 }}>
            <div>
              <div ref={logoContainerRef} style={{ minHeight: 'min(80vw,900px)', paddingTop: '50px', marginBottom: '0 auto', padding: '10px', color: 'black' }}>
                <div>
                  <div
                    ref={logoRef}
                    style={{
                      maxWidth: `max(min(80vw,900px)*${logoScrollPercent ?? 1 - (1 - logoScrollPercent ?? 1)},${targetWidth}px)`,
                      margin: '0 auto',
                      position: 'relative',
                      visibility: `${!logoInView ? 'hidden' : 'visible'}`,
                    }}
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

                    <Crest style={{ position: 'relative', zIndex: 2, opacity: '100', visibility: `${logoScrollPercent === 0 ? 'hidden' : 'inherit'}` }} />
                    <StarburstBlue
                      style={{
                        position: 'absolute',
                        zIndex: 1,
                        opacity: `${logoScrollPercent}`,
                        transform: `translateX(-50%)`,
                        left: '50%',
                        margin: '0 auto',
                        top: `calc(((100vw - (min(100vw,500px)/2)) * -.7) * ${1 - (logoScrollPercent - (1 - logoScrollPercent)) * 0.5})`,
                        width: `100vw`,
                      }}
                    />
                    <div
                      className={[styles['whitePulse']].join(' ')}
                      style={{
                        position: 'absolute',
                        zIndex: 1,
                        transform: `translateX(-50%)`,
                        margin: '0 auto',
                        top: `calc(5vw / (-1 * ${logoScrollPercent}))`,
                        width: `max(min(80vw,900px)*${logoScrollPercent ?? 1},${targetWidth}px)`,
                        height: `max(min(80vw,900px)*${logoScrollPercent ?? 1},${targetWidth}px)`,
                      }}
                    />
                    <StarburstGold
                      preserveAspectRatio="none"
                      style={{
                        position: 'absolute',
                        zIndex: 0,
                        opacity: `${logoScrollPercent}`,
                        transform: `translateX(-50%)`,
                        left: '50%',
                        margin: '0 auto',
                        top: `calc(((100vw - (min(100vw,500px)/2)) * -.7) * ${1 - (logoScrollPercent - (1 - logoScrollPercent)) * 0.5})`,
                        width: `100vw`,
                      }}
                    />
                  </div>
                </div>
              </div>

              <motion.div ref={museumRef} style={{ minHeight: '500px', padding: '10px 20px 50px 20px', color: 'white' }}>
                <motion.div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <motion.div style={{ position: 'relative', maxWidth: `${Math.max(attractionsProgressPercent, 0.3) * 100}%` }}>
                    <MuseumPlanLabels style={{ position: 'absolute', zIndex: 1 }} />
                    <img src={MuseumPlan} style={{ position: 'relative' }} alt="Museum Plan" />
                  </motion.div>
                </motion.div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ maxWidth: '500px', backgroundColor: 'rgba(255, 255, 255,0.8)', padding: '20px', color: 'black' }}>
                    <Heading level={HeadingLevel.H1} style={{ textShadow: 'white 0px 0px 2px', color: 'black', textAlign: 'center', width: '100%' }}>
                      The Museum
                    </Heading>
                    <br />
                    Our modern lives depend on effective communication and information management for work, school, and even entertainment. It only takes one click to contact
                    someone across the country or across the world… but it hasn't always been this way. Crucial developments in technology paved the way for where we are now.
                    The Museum of Information Explosion (MIE) brings this story to life through installations, game-play, and the lives of many notable inventors, taking
                    visitors on a journey from the introduction of the telegraph, to what's coming next!
                  </div>
                </div>
              </motion.div>

              <div ref={aboutRef} style={{ minHeight: '500px', padding: '30vw 20px 100px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ maxWidth: '500px', backgroundColor: 'rgba(255, 255, 255,0.8)', padding: '20px', color: 'black' }}>
                  <Heading level={HeadingLevel.H1} id="aboutTheMuseum" style={{ textShadow: 'white 0px 0px 2px', color: 'black', textAlign: 'center', width: '100%' }}>
                    About
                  </Heading>
                  <br />
                  The Museum of Information Explosion is a communication technology museum located in Huntsville, Alabama. It provides a hands-on, immersive experience where
                  guests can explore, interact, and learn about communication technologies throughout history. Visitors will leave the museum with more appreciation for the
                  business leaders and inventors alike that have paved the way for the digital technologies we rely on today.
                </div>
              </div>

              <div ref={attractionsRef} style={{ minHeight: '500px', padding: '30vw 20px 100px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ maxWidth: '500px', backgroundColor: 'rgba(255, 255, 255,0.8)', padding: '20px', color: 'black' }}>
                  <Heading level={HeadingLevel.H1} id="museumAttractions" style={{ textShadow: 'white 0px 0px 2px', color: 'black', textAlign: 'center', width: '100%' }}>
                    Attractions
                  </Heading>
                  <br />
                  Exhibitions designed to tell the stories of communication technology that made it possible for humans to connect on a much larger scale. Within these
                  exhibits, we hope to give you a new perspective on how history has shaped the way we share information. Exhibits feature antiques, artifacts, digital
                  interactive “experiments”, and Augmented and Virtual Reality (AR/VR) content to give visitors an engaging, educational, and fun experience.
                </div>
              </div>

              <div ref={getInvolvedRef} style={{ minHeight: '500px', padding: '30vw 20px 100px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ maxWidth: '500px', backgroundColor: 'rgba(255, 255, 255,0.8)', padding: '20px', color: 'black' }}>
                  <Heading level={HeadingLevel.H1} id="getInvolved" style={{ textShadow: 'white 0px 0px 2px', color: 'black', textAlign: 'center', width: '100%' }}>
                    Get Involved
                  </Heading>
                  <br />
                  Several regional radio clubs now call the Museum of Information Explosion (MIE) home. Each club focuses on a different aspect of computing or radio
                  communication. The MIE is excited to facilitate a workspace for each member to be able to indulge in their hobbies and passions! We highly value our
                  volunteers! We have numerous volunteer opportunities for those that are interested in becoming a part of our museum. Please fill out the contact form below
                  to get started.
                </div>
              </div>

              <div ref={newsAndEventsRef} style={{ minHeight: '500px', padding: '30vw 20px 100px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ maxWidth: '500px', backgroundColor: 'rgba(255, 255, 255,0.8)', padding: '20px', color: 'black' }}>
                  <Heading level={HeadingLevel.H1} id="newsAndEvents" style={{ textShadow: 'white 0px 0px 2px', color: 'black', textAlign: 'center', width: '100%' }}>
                    News &amp; Events
                  </Heading>
                  <br />
                  As we approach our grand opening, we are working towards perfecting each exhibit to share with our future guests. In the meantime, our spaces are available
                  for private events and parties. Contact us below for more information regarding rentals!
                </div>
              </div>

              <div ref={supportTheMuseumRef} style={{ minHeight: '500px', padding: '30vw 20px 100px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ maxWidth: '500px', backgroundColor: 'rgba(255, 255, 255,0.8)', padding: '20px', color: 'black' }}>
                  <Heading
                    level={HeadingLevel.H1}
                    id="supportTheInfoExplosionMuseum"
                    style={{ textShadow: 'white 0px 0px 2px', color: 'black', textAlign: 'center', width: '100%' }}
                  >
                    Support the Museum
                  </Heading>
                  <br />
                  The Museum of Information Explosion is a 501(c)(3) and all donations are tax-deductible. We would love for you to become a part of our mission to hold a
                  meaningful space for visitors of all ages to learn and immerse themselves in communication technology. Return to this page in the coming weeks to learn more
                  ways you can get involved.
                </div>
              </div>

              <div style={{ marginTop: '20px', marginBottom: '100px', minHeight: '500px', padding: '10px 20px 50px 20px', color: 'white', position: 'relative' }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <Heading level={HeadingLevel.H1} style={{ textShadow: 'white 0px 0px 2px', color: 'black', textAlign: 'center', width: '100%' }}>
                    App Coming Soon
                  </Heading>
                  <br />
                </div>
                <IphoneComingSoon style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
                <img
                  src={IPhoneWithApp.src}
                  srcSet={IPhoneWithApp.srcSet}
                  width={IPhoneWithApp.width}
                  height={IPhoneWithApp.height}
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  loading="lazy"
                  alt="iPhone with app"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }}
                />
              </div>

              <div style={{ minHeight: '500px', padding: '30vw 20px 100px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ maxWidth: '500px', backgroundColor: 'rgba(255, 255, 255,0.8)', padding: '20px', color: 'black' }}>
                  <Heading
                    level={HeadingLevel.H1}
                    id="supportTheInfoExplosionMuseum"
                    style={{ textShadow: 'white 0px 0px 2px', color: 'black', textAlign: 'center', width: '100%' }}
                  >
                    Contact Us
                  </Heading>
                  <br />
                  <FooterForm />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
