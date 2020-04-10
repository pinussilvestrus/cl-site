import React from 'react';

import { slide as Menu } from 'react-burger-menu'

export default class MobileNavigation extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {

    var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '42px',
          height: '30px',
          right: '36px',
          top: '36px',
          background: 'white',
          padding: '10px 5px 10px 5px',
          background: '#FFFFFF',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '5px'
        },
        bmBurgerBars: {
          background: '#373a47',
          position: 'relative',
          display: 'block',
          marginTop: '6px',
          height: '3px',
          marginLeft: '5px',
          marginRight: '5px'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#373a47',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em'
        },
        bmItem: {
          display: 'inline-block'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
    }

    return (
      <Menu styles={styles} right>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/blog">Blog</a>
        <a id="about" className="menu-item" href="/projects">Projekte</a>
        <a id="contact" className="menu-item" href="/contact">Kontakt</a>
      </Menu>
    );
  }
}