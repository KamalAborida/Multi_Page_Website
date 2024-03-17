import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GeneralContext from "./Components/Context/general-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GeneralContext.Provider
      value={{
        desktopWidth: 1350,
        tabletWidth: 1000,
        mobileWidth: 450,
        scrollToTheTop: () => {
          window.scrollTo({
            top: 0,
          });
        },
        setNavModal: () => {},
      }}
    >
      <App />
    </GeneralContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
