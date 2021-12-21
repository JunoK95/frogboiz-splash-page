import React from 'react'

import DaJourneyGif from '../../../resources/gifs/DaJourney.gif';
import Brand from '../../../resources/frogboiz-branding/frogboiz-color.png';
import DaJourneyButton from '../../../resources/buttons/da-journey.png';
import { Element } from 'react-scroll';

function DaJourneyBlock() {
  return (
    <>
      <Element name="da-journey"></Element>
      <div style={styles.container}>
        <img style={styles.playButton} src={DaJourneyButton} alt="" />
      </div>
    </>
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
    backgroundImage: `url(${DaJourneyGif})`
  },
  gif: {
    width: '80%',
    height: 'auto',
  },
  playButton: {
    width: '60%',
    height: 'auto',
  }
}

export default DaJourneyBlock
