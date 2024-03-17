import React from "react";

const GeneralContext = React.createContext({
  desktopWidth: 1350,
  tabletWidth: 1000,
  mobileWidth: 450,
  scrollToTheTop: () => {
    window.scrollTo({
      top: 0,
    });
  },
  setNavModal: () => {}
});

export default GeneralContext;
