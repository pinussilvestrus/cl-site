import React from 'react';

import { slide as Menu } from 'react-burger-menu'

import { Link } from "gatsby";

import navigationStyles from './mobile-navigation.module.css';

export default class MobileNavigation extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {

    const styles = {
        bmBurgerButton: {
          position: 'absolute',
          width: '42px',
          height: '30px',
          right: '20px',
          top: '30px',
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
          height: '30px',
          width: '30px',
          top: '15px',
          right: '15px'
        },
        bmCross: {
          background: 'black'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: 'white',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        },
        bmMorphShape: {
          fill: 'none'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em'
        },
        bmItem: {
          display: 'block'
        },
        bmOverlay: {
          background: 'none'
        }
    }

    return (
      <Menu styles={styles} right>
        <ul className={navigationStyles.navigation}>
          <li className={navigationStyles.navigationItem}>
            <Link to="/" activeClassName={navigationStyles.navigationItemActive}>
              hallo.
            </Link>
          </li>
          {/* <li className={`${navigationStyles.navigationItem} ${navigationStyles.itemProjects}`}>
            <Link to="/projects/" activeClassName={navigationStyles.navigationItemActive}>
              projekte
            </Link>
          </li> */}
          <li className={`${navigationStyles.navigationItem} ${navigationStyles.itemBlog}`}>
            <Link
              to="/blog/"
              partiallyActive={true}
              activeClassName={navigationStyles.navigationItemActive}
            >
              blog
            </Link>
          </li>
          <li className={`${navigationStyles.navigationItem} ${navigationStyles.itemContact}`}>
            <Link to="/contact/" activeClassName={navigationStyles.navigationItemActive}>
              kontakt
            </Link>
          </li>
        </ul>
      </Menu>
    );
  }
}