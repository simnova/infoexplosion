import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaFax } from 'react-icons/fa';
import { Heading, HeadingLevel } from '../../components/atoms/heading';
import { Container } from '../../components/atoms/container';

export const SectionLayout: React.FC<any> = (props) => {
  return (
    <>
      <Outlet />

      <footer className="bg-zinc-800 text-white pb-4 flex-none">
        <Container>
          <div className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-sm">
            <div className="mt-4">
              <p>The Museum of Information Explosion</p>
              <p>1806 University Drive NW, Huntsville, AL 35801</p>
              <div className="flex align-baseline my-2">
                <Heading className="mr-2" level={HeadingLevel.H4}>
                  <a href="https://www.facebook.com/infoexplosion" title="Facebook" target="_blank" rel="noreferrer">
                    <AiFillFacebook />
                  </a>
                </Heading>
                <Heading className="mr-2" level={HeadingLevel.H4}>
                  <a href="https://twitter.com/infoexplosion" title="Twitter" target="_blank" rel="noreferrer">
                    <AiFillTwitterSquare />
                  </a>
                </Heading>
                <Heading className="mr-2" level={HeadingLevel.H4}>
                  <a href="https://www.linkedin.com/company/infoexplosion" title="LinkedIn" target="_blank" rel="noreferrer">
                    <AiFillLinkedin />
                  </a>
                </Heading>
              </div>
              <Link to="/privacy-policy" className="text-white hover:text-zinc-300">
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              <Link to="/terms-of-use" className="text-white hover:text-zinc-300">
                Terms of Use
              </Link>
            </div>

            <div className="flex md:justify-end  md:mt-4 md:mr-3">
              <div>
                <div className="flex align-baseline mb-3">
                  <AiOutlinePhone className="mr-2 text-lg" />
                  <p>
                    <a href="tel:+01-256-316-1350" title="Phone">
                      256-316-1350
                    </a>
                  </p>
                </div>

                <div className="flex align-middle mb-3">
                  <FaFax className="mr-2 text-lg" />
                  <p>256-316-XXXX</p>
                </div>

                <div className="flex align-middle mb-3">
                  <AiOutlineMail className="mr-2 text-lg" />
                  <p>
                    <a href="mailto:info@infoexplosion.org" title="Email">
                      info@infoexplosion.org
                    </a>
                  </p>
                </div>
              </div>

            </div>
            
          </div>
        </Container>
      </footer>
    </>
  );
};
