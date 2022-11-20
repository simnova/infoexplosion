import { SectionLayout } from "./section-layout";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";

export const Root: React.FC<any> = (_props) => {
    return (<>
      <div className="flex flex-col min-h-screen">
  
        <Routes>
          <Route path="" element={<SectionLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </div>
  
    </>)
  }