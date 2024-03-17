import { Outlet } from "react-router";
import Nav from "../MainLayout/Nav";
import Footer from "../MainLayout/Footer";
import ContentContainer from "../MainLayout/ContentContainer";
import GetInTouchDiv from "../MainLayout/GetInTouchDiv";
import { useContext, useEffect, useState } from "react";
import NavModal from "../NavModal/NavModal";
import Backdrop from "../NavModal/Backdrop";
import GeneralContext from "../Context/general-context";
import { AnimatePresence } from "framer-motion";

function RootPage() {
  const [isNavModal, setIsNavModal] = useState(false);
  const isScrolling = !isNavModal;

  const hamHandler = () => {
    setIsNavModal((prev) => !prev);
  };

  const closeModal = () => {
    setIsNavModal(false);
  };

  useEffect(() => {
    if (isNavModal) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }

    return () => {
      document.body.classList.remove("disable-scroll");
    };
  }, [isNavModal]);

  return (
    <div className="rootPage">
      <Nav place="nav" hamHandler={hamHandler} closeModal={closeModal} />
      <ContentContainer>
        <AnimatePresence>
          {isNavModal && (
            <NavModal hamHandler={hamHandler} closeModal={closeModal} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isNavModal && <Backdrop setIsNavModal={setIsNavModal} />}
        </AnimatePresence>
        <Outlet />
      </ContentContainer>
      <Footer closeModal={closeModal}>
        <GetInTouchDiv />
      </Footer>
    </div>
  );
}

export default RootPage;
