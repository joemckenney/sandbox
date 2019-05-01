import React from 'react';
import PropTypes from 'prop-types';
import unflatten from  'unflatten';

import layoutStyles from './layout.css';
import colors from '../../styles/properties/color.css';


const styles = unflatten(layoutStyles, { separator: '-' });


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
  inset: PropTypes.oneOf(Object.keys(styles.inset)),
  spacing: PropTypes.oneOf(Object.keys(styles.spacing)),
  static: PropTypes.bool,
  type: PropTypes.oneOf(['vertical', 'horizontal'])
};

Layout.defaultProps = {
  type: 'horizontal'
};

export default Layout;
