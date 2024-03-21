import React from "react";

const GeneralContext = React.createContext({
  desktopWidth: 1350,
  tabletWidth: 1000,
  mobileWidth: 700,
  scrollToTheTop: () => {
    window.scrollTo({
      top: 0,
    });
  },
  setNavModal: () => {}
});

export default GeneralContext;
