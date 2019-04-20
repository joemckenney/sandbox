import React from 'react'
import styles from '../styles/app.css';
import Layout from '../components/layout/layout.js';
const HelloJoe = () => {
  return (
    <React.Fragment>
      <Layout />
      <Layout type='vertical'>
        <Layout/>
        <Layout static>
          <Layout/>
          <div className={styles.app}>Hello Joe</div>
          <Layout/>
        </Layout>
        <Layout/>
      </Layout>
      <Layout />
    </React.Fragment>
  );
}
export default HelloJoe
