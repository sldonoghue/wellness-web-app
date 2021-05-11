import classNames from 'classnames';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import React from 'react';
import requireIf from 'react-required-if';


const propTypes = exact({
  blockName: PropTypes.string,
  buttonType: PropTypes.string,
  elementType: PropTypes.oneOf(['button', 'link']),
  handleClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  modifier: PropTypes.string,
  text: PropTypes.string.isRequired,
  url: requireIf(PropTypes.string, props => props.elementType === 'link'),
});

const defaultProps = {
  blockName: null,
  buttonType: 'button',
  elementType: 'button',
  isDisabled: false,
  isLoading: false,
  modifier: 'ghost',
};


function Button(props) {
  const {
    blockName,
    buttonType,
    elementType,
    handleClick,
    isDisabled,
    isLoading,
    modifier,
    text,
    url,
  } = props;

  const buttonClasses = classNames(
    blockName,
    'Button',
    `Button-${modifier}`,
    {
      disabled: isDisabled,
      loading: isLoading,
    },
  );

  if (elementType === 'button') {
    return (
      <button
        type={buttonType}
        onClick={handleClick}
        className={buttonClasses}
        disabled={isDisabled}
      >
        <span className="Button_text">
          {text}
        </span>
        {isLoading
          && (
            <div className="Button_loading">
              <div className="Button_loadingItem"></div>
              <div className="Button_loadingItem"></div>
              <div className="Button_loadingItem"></div>
              <div className="Button_loadingItem"></div>
            </div>
          )
        }
      </button>
    );
  }

  if (props.elementType === 'link') {
    return (
      <a href={url} className={buttonClasses}>
        <span className="Button_text">
          {text}
        </span>
      </a>
    );
  }
}


Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;