import React, { useState } from 'react';

import { Outlet } from 'react-router-dom';

export const SectionLayout: React.FC<any> = (props) => {
  return (
    <>
      <Outlet />
    </>
  );
};