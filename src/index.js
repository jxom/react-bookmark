import React, { Component, PropTypes } from 'react';

export class Bookmark extends Component {
  handleAddBookmark = () => {
    const { title, href } = this.props;

    if (window.external && window.external.AddFavourite) {
      window.external.AddFavourite(href, title); // eslint-disable-line new-cap
    }
  }

  render() {
    const { className, title, href } = this.props;
    const addToBookmarkLink = props =>
      <a onClick={this.handleAddBookmark} {...props}>Add this page to your bookmarks</a>;

    let commandButton = 'Ctrl';
    if (/Mac/i.test(navigator.userAgent)) {
      commandButton = 'Command (⌘)';
    }

    let bookmarkLink = null;
    if (/Firefox/i.test(navigator.userAgent)) {
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
}

Bookmark.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.string
};

Bookmark.defaultProps = {
  className: '',
  title: '',
  href: '#'
};

export default Bookmark;
