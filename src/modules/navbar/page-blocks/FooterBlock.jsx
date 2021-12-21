import React from 'react'
import Brand from '../../../resources/frogboiz-branding/frogboiz-white.png'
import Discord from '../../../resources/frogboiz-branding/discord-green.png'
import Twitter from '../../../resources/frogboiz-branding/twitter-green.png'
import Instagram from '../../../resources/frogboiz-branding/instagram-green.png'

const socials = {
  twitter: 'https://twitter.com/FrogBoizNFT',
  discord: 'https://discord.com/invite/frogboiz',
  instagram: 'https://www.instagram.com/frogboiznft/',
}

function FooterBlock() {
  const openWindow = (url) => {
    window.open(url);
  }

  return (
    <div style={styles.container}>
      <img style={styles.brand} src={Brand} alt="" />
      <div style={styles.copyrightText}>
        ALL RIGHTS RESERVED | FROGBOIZ - 2021
      </div>
      <div style={styles.buttonrow}>
        <img src={Discord} alt="" style={styles.button} onClick={() => openWindow(socials.discord)} />
        <img src={Twitter} alt="" style={styles.button} onClick={() => openWindow(socials.twitter)} />
        <img src={Instagram} alt="" style={styles.button} onClick={() => openWindow(socials.instagram)} />
      </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#18144c',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '400px',
  },
  brand: {
    width: '180px',
  },
  copyrightText: {
    color: 'white',
    textAlign: 'center',
    padding: '24px 0',
  },
  buttonrow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '48px',
    margin: '0 24px',
    cursor: 'pointer',
  }
}

export default FooterBlock
