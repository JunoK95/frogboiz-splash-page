import React from 'react'
import CityGif from '../../../resources/gifs/CityFinal.gif';
import Brand from '../../../resources/frogboiz-branding/frogboiz-color.png';
import PlayButton from '../../../resources/buttons/press-play.png';

function FinalBlock() {
  return (
    <div style={styles.container}>
      <img src={CityGif} alt="" style={{ width: '100%' }} />
      <div style={styles.bottomGradient} />
    </div>
  )
}

const styles = { 
  container: {
    position: 'relative',
    width: '100%',
    minHeight: '95vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom',
  },
  topGradient: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '140px',
    backgroundImage: 'linear-gradient(to top, #18144c00, #18144cff 100%)',
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '140px',
    backgroundImage: 'linear-gradient(to bottom, #2b032f00, #2b032fff 100%)',
  }
}

export default FinalBlock
