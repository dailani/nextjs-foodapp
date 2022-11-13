import Layout from "../src/easymealprep/layouts/primary/Layout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import MealCard from "../src/easymealprep/components/cards/MealCard";
import styles from "../styles/Home.module.css";
import { mockMealCardProps } from "../src/easymealprep/components/cards/MealCard.mocks";
import SidebarLayout from "../src/easymealprep/layouts/sidebar/SidebarLayout";

const Home: NextPageWithLayout = () => {
  const cardsArray: JSX.Element[] = [];
  for (let i = 1; i <= 4; i++) {
    cardsArray.push(<MealCard {...mockMealCardProps.base} />);
  }

  return (
    <section className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <div className="dashboard">{cardsArray.map((card) => card)}</div>
    </section>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <SidebarLayout />
      {page}
    </Layout>
  );
};

export default Home;
