import React from 'react'
import HeroGif from '../../../resources/gifs/HeroGif.gif';
import Brand from '../../../resources/frogboiz-branding/frogboiz-color.png';
import PlayButton from '../../../resources/buttons/press-play.png';
import DiscordButton from '../../../resources/buttons/discord.png';
import TwitterButton from '../../../resources/buttons/twitter.png';

const socials = {
  twitter: 'https://twitter.com/FrogBoizNFT',
  discord: 'https://discord.com/invite/frogboiz',
}

function HeroGifBlock() {
  const openWindow = (url) => {
    window.open(url);
  }
  
  return (
    <div style={styles.container}>
      <div style={styles.right}>
        <div style={styles.imageButtonContainer}>
          <img style={styles.imageButton} src={DiscordButton} alt="" onClick={() => openWindow(socials.discord)} />
        </div>
        <div style={styles.imageButtonContainer}>
          <img style={styles.imageButton} src={TwitterButton} alt="" onClick={() => openWindow(socials.twitter)} />
        </div>
      </div>
      <img style={styles.gif} src={Brand} alt="" />
      <img style={styles.playButton} src={PlayButton} alt="" onClick={() => openWindow('https://youtu.be/58jnEMANsJE')} />
    </div>
  )
}

const styles = { 
  container: {
    position: 'relative',
    width: '100%',
    height: '95vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom',
    backgroundImage: `url(${HeroGif})`
  },
  gif: {
    width: '80%',
    height: 'auto',
  },
  playButton: {
    width: '20%',
    height: 'auto',
    cursor: 'pointer',
  },
  right: {
    position: 'absolute',
    display: 'flex',
    right: '36px',
    top: '36px',
  },
  imageButtonContainer: {
    height: '48px',
    width: 'auto',
    cursor: 'pointer',
  },
  imageButton: {
    height: '100%',
  }
}

export default HeroGifBlock
