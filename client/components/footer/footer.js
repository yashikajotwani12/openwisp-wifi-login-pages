/* eslint-disable camelcase */
import "./index.css";

import PropTypes from "prop-types";
import React from "react";
import {t} from "ttag";

import getText from "../../utils/get-text";
import shouldLinkBeShown from "../../utils/should-link-be-shown";

export default class Footer extends React.Component {
  render() {
    const {footer, language, isAuthenticated, userData} = this.props;
    const {links, secondary_text} = footer;
    return (
      <div className="footer-container">
        <div className="footer-row-1">
          <div className="footer-row-1-inner">
            {links.map((link, index) => {
              if (shouldLinkBeShown(link, isAuthenticated, userData)) {
                return (
                  <a
                    href={link.url}
                    className={`footer-link
                  footer-link-${index + 1}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    key={link.url}
                  >
                    {getText(link.text, language)}
                  </a>
                );
              }
              return null;
            })}
          </div>
        </div>
        {secondary_text && (
          <div className="footer-row-2">
            <div className="footer-row-2-inner">{t`FOOTER_SECONDARY_TXT`}</div>
          </div>
        )}
      </div>
    );
  }
}

Footer.defaultProps = {
  isAuthenticated: false,
};
Footer.propTypes = {
  language: PropTypes.string.isRequired,
  footer: PropTypes.shape({
    links: PropTypes.array,
    secondary_text: PropTypes.bool,
  }).isRequired,
  isAuthenticated: PropTypes.bool,
  userData: PropTypes.object.isRequired,
};
