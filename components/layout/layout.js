const React = require('react');
const PropTypes = require('prop-types');

import styles from './layout.css';

function Layout({
  children,
  inset,
  spacing,
  type,
  initial,
  static: _static,
  auto,
  ...attrs
}) {


  return (
    <div
      {...attrs}
      className={styles.layout}
      data-flex={initial ? 'initial' : _static ? 'static' : 'auto'}
      data-inset={inset}
      data-spacing={spacing}
      data-type={type}
    >
      {children}
    </div>
  );

}

Layout.propTypes = {
  auto: PropTypes.bool,
  initial: PropTypes.bool,
  inset: PropTypes.string,
  spacing: PropTypes.string,
  static: PropTypes.bool,
  type: PropTypes.oneOf(['vertical', 'horizontal'])
};

Layout.defaultProps = {
  type: 'horizontal'
};

export default Layout;
