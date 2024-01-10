import dataStore from "@/src/redux/dataStore";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";

const LandingPage = dynamic(() => import("../src/pages/landingPage"));

const Home: NextPage = (): JSX.Element => {
  return (
    <Provider store={dataStore}>
      <LandingPage />
    </Provider>
  );
};

export default Home;
