import styles from "./Layout.module.css";
import Head from "next/head";

export type ILayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
