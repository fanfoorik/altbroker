import React from 'react';
import PropTypes from 'prop-types';

import { hostUrl } from 'utils/urls';
import Icon from 'components/Icon';

const Avatar = (props) => {
  const { src, className, sizes, ...rest } = props;

  return src ?
    <span
      className={['avatar', className].join(' ')}
      style={{ backgroundImage: `url(${hostUrl + src})` }}
      {...rest}
    />
    :
    <span className={['avatar', className].join(' ')}>
      <Icon className="avatar__icon" icon="default_avatar" width={sizes} height={sizes} />
      {rest.children}
    </span>;
};

Avatar.defaultProps = {
  src: '',
  sizes: 70,
  className: '',
};

Avatar.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  sizes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Avatar;
