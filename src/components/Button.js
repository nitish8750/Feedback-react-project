import PropTypes from "prop-types";

function Button({ children, type, version, isDisabled }) {
    return (
      <button
        className={`btn btn-${version}`}
            type={type}
            disabled={isDisabled}
      >
        {children}
      </button>
    );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
    isDisabled: true,
    version: "primary"
};

export default Button;
