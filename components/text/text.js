/**
 * Trifacta Inc. Confidential
 *
 * Copyright 2017 Trifacta Inc.
 * All Rights Reserved.
 *
 * Any use of this material is subject to the Trifacta Inc., Source License located
 * in the file 'SOURCE_LICENSE.txt' which is part of this package.  All rights to
 * this material and any derivative works thereof are reserved by Trifacta Inc.
 */

import  React from 'react';
import PropTypes from 'prop-types';

import styles from './text.css';

function Text({
  alignment,
  children,
  className = '',
  decoration,
  direction,
  display,
  size,
  transform,
  weight,
  wrap,
  ...attrs
}) {
  return (
    <div
      {...attrs}
      className={`${styles.text}  ${className}`}
      data-alignment={alignment}
      data-decoration={decoration}
      data-direction={direction}
      data-display={display}
      data-size={size}
      data-transform={transform}
      data-weight={weight}
      data-wrap={wrap}
    >
      {children}
    </div>
  );
}

Text.propTypes = {
  alignment: PropTypes.oneOf(['start', 'center', 'end']),
  decoration: PropTypes.oneOf(['underline', 'line-through', 'highlight', 'dotted']),
  direction: PropTypes.oneOf(['ltr', 'rtl']),
  display: PropTypes.oneOf(['block', 'inline']),
  font: PropTypes.oneOf(['normal', 'mono']),
  size: PropTypes.oneOf(['extra-small', 'small', 'medium', 'large', 'title', 'header']),
  transform: PropTypes.oneOf(['capitalize', 'lowercase', 'uppercase']),
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'bold', 'bolder', 'black']),
  wrap: PropTypes.oneOf(['true', 'false'])
};

export default Text;
