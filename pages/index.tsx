import { NextPage } from "next/types";
import { ReactElement } from "react";

import Layout from "../components/Layout";

import { GridComponent } from "../components/GridComponent";

const Home: NextPage = (): ReactElement => {
  return (
    <Layout title="Home - openJira">
      <GridComponent />
    </Layout>
  );
};
export default Home;
