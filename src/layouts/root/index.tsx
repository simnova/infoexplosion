import { SectionLayout } from "./section-layout";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { PrivacyPolicy } from "./pages/privacy-policy";
import { TermsOfUse } from "./pages/terms-of-use";
import { useRef } from "react";

export const Root: React.FC<any> = (_props) => {
    const ref = useRef(null);
    return (<>
      <div ref={ref} className="flex flex-col min-h-screen" >
  
        <Routes>
          <Route path="" element={<SectionLayout />}>
            <Route path="/" element={<Home parentRef={ref} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
          </Route>
        </Routes>
      </div>
  
    </>)
  }