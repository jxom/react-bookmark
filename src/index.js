import React, { Component } from 'react';
import PropTypes from 'prop-types';
import platform from 'platform';
import styled from 'styled-components';
import { SAFARI_SHARE, MENU_ICON, STAR_ICON } from './images';

const MobileImage = styled.img`
  width: 30px;
  border-radius: 5px;
`;

const Icon = styled.img`
  width: 20px;
  filter: invert(100%);
`;

export class Bookmark extends Component {
  handleAddBookmark = () => {
    const { title, href, onAddBookmark } = this.props;

    if (window.external && window.external.AddFavourite) {
      window.external.AddFavourite(href, title); // eslint-disable-line new-cap
    }

    onAddBookmark();
  }

  renderDesktop = () => {
    const { className, linkClassName, title, href } = this.props;
    const addToBookmarkLink = props =>
      <a className={linkClassName} onClick={this.handleAddBookmark} {...props}>Add this page to your bookmarks</a>;

    let commandButton = 'Ctrl';
    if (platform.os.family && platform.os.family === 'OS X') {
      commandButton = 'Command (⌘)';
    }

    let bookmarkLink = null;
    if (platform.name && platform.name.includes('Firefox')) {
      const props = {
        href,
        rel: 'sidebar',
        title
      };
      bookmarkLink = addToBookmarkLink(props);
    }
    if (window.external && window.external.AddFavourite) {
      bookmarkLink = addToBookmarkLink();
    }

    return (
      <div className={className}>
        {
          bookmarkLink ||
          <span>Press <strong>{commandButton} + D</strong> to add this page to your bookmarks.</span>
        }
      </div>
    );
  }

  renderMobile = content => {
    const { className } = this.props;
    let newContent = content;

    if (platform.name && platform.manufacturer && platform.name.includes('Safari') && platform.manufacturer.includes('Apple')) {
      newContent = (
        <div>Press <MobileImage src={SAFARI_SHARE}/> then <strong>Add to Home Screen</strong> to add this page to your home screen.</div>
      );
    } else if (platform.name && (platform.name.includes('Chrome') || platform.name.includes('Firefox'))) {
      newContent = (
        <div>Press <Icon src={MENU_ICON}/> then <Icon src={STAR_ICON}/> to add this page to your bookmarks.</div>
      );
    }

    return (
      <div className={className}>
        {newContent}
      </div>
    );
  }

  renderTablet = content => {
    const { className } = this.props;
    let newContent = content;

    if (platform.name && (platform.name.includes('Chrome') || platform.name.includes('Firefox'))) {
      newContent = (
        <div>Press <Icon src={STAR_ICON}/> next to the address bar to add this page to your bookmarks.</div>
      );
    }

    return (
      <div className={className}>
        {newContent}
      </div>
    );
  }

  render() {
    let content = <div>Remember to add this page to your bookmarks!</div>;
    if (/Mobile/i.test(navigator.userAgent)) {
      return this.renderMobile(content);
    } else if (/Android/i.test(navigator.userAgent)) {
      return this.renderTablet(content);
    }
    return this.renderDesktop();
  }
}

Bookmark.propTypes = {
  className: PropTypes.string,
  linkClassName: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.string,
  onAddBookmark: PropTypes.func
};

Bookmark.defaultProps = {
  className: '',
  linkClassName: '',
  title: '',
  href: '#',
  onAddBookmark: () => {}
};

export default Bookmark;
