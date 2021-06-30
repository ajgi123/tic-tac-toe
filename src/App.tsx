import "./App.scss";
import React from "react";
import { useTransition, config, animated } from "@react-spring/web";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home-page/HomePage";
import SimulationPage from "./pages/simulation-page/SimulationPage";
import { Switch, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    config: config.slow,
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" },
  });

  return (
    <React.Fragment>
      <Navbar />
      {transitions((props, item) => (
        <animated.div style={{ ...props }}>
          <Switch location={item}>
            <Route exact path="/" component={HomePage} />
            <Route path="/sim" component={SimulationPage} />
          </Switch>
        </animated.div>
      ))}
    </React.Fragment>
  );
};

export default App;