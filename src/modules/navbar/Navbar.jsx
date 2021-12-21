import React from 'react'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import FrogBoizWhite from '../../resources/frogboiz-branding/frogboiz-white.png';
import DiscordButton from '../../resources/buttons/discord.png';
import TwitterButton from '../../resources/buttons/twitter.png';

const NAV_CONTENT = [
  {
    title: 'HOME',
    to: 0,
  },
  {
    title: 'JOURNEY',
    to: 'da-journey',
  },
]

const NavbarItem = ({item, onClick}) => {
  const { title, to } = item;

  return (
    <div style={itemStyles.container} onClick={() => onClick(to)}>
      {title}
    </div>
  )
}

function Navbar() {
  const scrollTo = (element) => {
    scroller.scrollTo(element, {
      duration: 750,
      delay: 0,
      smooth: true,
      offset: 0,
    })
  }

  const navitems = NAV_CONTENT.map((obj, index) => <NavbarItem key={`navitem-${index}`} item={obj} onClick={scrollTo} />)

  const openWindow = (url) => {
    window.open(url);
  }

  return (
    <div style={styles.container}>
      <div style={styles.brandingContainer}>
        <img style={styles.brandingImage} src={FrogBoizWhite} alt="" />
      </div>
      <div style={styles.navitemContainer}>
        {navitems}
      </div>
      {/* <div style={styles.right}>
      <div style={styles.imageButtonContainer}>
          <img style={styles.imageButton} src={DiscordButton} alt="" onClick={() => openWindow(socials.discord)} />
        </div>
        <div style={styles.imageButtonContainer}>
          <img style={styles.imageButton} src={TwitterButton} alt="" onClick={() => openWindow(socials.twitter)} />
        </div>
      </div> */}
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#18144c',
    height: '128px',
  },
  brandingContainer: {
    display: 'flex',
    height: 'auto',
    padding: '24px 8vw 24px 4vw',
  },
  brandingImage: {
    height: '100%',
  },
  navitemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  right: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    right: '4vw',
    height: '100%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: '4vw',
    marginLeft: '2vw',
  },
  connectButton: {
    backgroundColor: 'white',
    borderRadius: '24px',
    padding: '8px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  imageButtonContainer: {
    height: '36px',
    width: 'auto',
    cursor: 'pointer',
  },
  imageButton: {
    height: '100%',
  }
}

const itemStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    color: 'white',
    height: '100%',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '0 24px',
  }
}

export default Navbar
