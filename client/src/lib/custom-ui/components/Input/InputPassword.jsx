import zxcvbn from 'zxcvbn';
import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Icon, Input, Progress } from 'semantic-ui-react';
import { useToggle } from '../../../hooks';

import styles from './InputPassword.module.css';

const STRENGTH_SCORE_COLORS = ['red', 'orange', 'yellow', 'olive', 'green'];

const InputPassword = React.forwardRef(
  ({ value, withStrengthBar, minStrengthScore, className, ...props }, ref) => {
    const [isVisible, toggleVisible] = useToggle();

    const strengthScore = useMemo(() => {
      if (!withStrengthBar) {
        return undefined;
      }

      return zxcvbn(value).score;
    }, [value, withStrengthBar]);

    const handleToggleClick = useCallback(() => {
      toggleVisible();
    }, [toggleVisible]);

    const inputProps = {
      ...props,
      ref,
      type: isVisible ? 'text' : 'password',
      icon: <Icon link name={isVisible ? 'eye' : 'eye slash'} onClick={handleToggleClick} />,
    };

    if (!withStrengthBar) {
      return (
        <Input
          {...inputProps} // eslint-disable-line react/jsx-props-no-spreading
          className={className}
        />
      );
    }

    return (
      <div className={className}>
        <Input
          {...inputProps} // eslint-disable-line react/jsx-props-no-spreading
          error={!!value && strengthScore < minStrengthScore}
        />
        <Progress
          value={value ? strengthScore + 1 : 0}
          total={5}
          color={STRENGTH_SCORE_COLORS[strengthScore]}
          size="tiny"
          className={styles.strengthBar}
        />
      </div>
    );
  },
);

InputPassword.propTypes = {
  value: PropTypes.string.isRequired,
  withStrengthBar: PropTypes.bool,
  minStrengthScore: PropTypes.number,
  className: PropTypes.string,
};

InputPassword.defaultProps = {
  withStrengthBar: false,
  minStrengthScore: 2,
  className: undefined,
};

export default React.memo(InputPassword);
