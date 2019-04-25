import React from 'react'
import styles from '../styles/app.css';
import Layout from '../components/layout/layout.js';
import Text from '../components/text/text.js';
const HelloJoe = () => {
  return (
    <React.Fragment>
      <Layout />
      <Layout type='vertical'>
        <Layout/>
        <Layout static>
          <Layout/>
          <Text alignment='center' className={styles.app}>Hello Joe</Text>
          <Layout/>
        </Layout>
        <Layout/>
      </Layout>
      <Layout />
    </React.Fragment>
  );
}
export default HelloJoe
