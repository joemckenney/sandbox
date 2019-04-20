const React = require('react');
const PropTypes = require('prop-types');

import styles from './layout.css';

function Layout({
  children,
  contentRef,
  inset,
  insetHorizontal,
  insetVertical,
  overflow,
  overflowX,
  overflowY,
  primaryAlignment,
  secondaryAlignment,
  spacing,
  type,
  size,
  span,
  initial,
  static: _static,
  auto,
  ...attrs
}) {


  return (
    <div
      {...attrs}
      ref={contentRef}
      className={`layout ${styles.layout}`}
      data-flex={initial ? 'initial' : _static ? 'static' : 'auto'}
      data-inset={inset}
      data-inset-horizontal={insetHorizontal}
      data-inset-vertical={insetVertical}
      data-overflow={overflow}
      data-overflow-x={overflowX}
      data-overflow-y={overflowY}
      data-primary-alignment={primaryAlignment}
      data-secondary-alignment={secondaryAlignment}
      data-size={size}
      data-spacing={spacing}
      data-span={span}
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
  insetHorizontal: PropTypes.string,
  insetVertical: PropTypes.string,
  overflow: PropTypes.oneOf(['auto', 'hidden', 'overlay', 'visible']),
  overflowX: PropTypes.oneOf(['auto', 'hidden', 'overlay', 'visible']),
  overflowY: PropTypes.oneOf(['auto', 'hidden', 'overlay', 'visible']),
  primaryAlignment: PropTypes.oneOf(['start', 'center', 'end']),
  secondaryAlignment: PropTypes.oneOf(['start', 'center', 'end']),
  spacing: PropTypes.string,
  static: PropTypes.bool,
  type: PropTypes.oneOf(['vertical', 'horizontal'])
};

Layout.defaultProps = {
  type: 'horizontal'
};

export default Layout;
