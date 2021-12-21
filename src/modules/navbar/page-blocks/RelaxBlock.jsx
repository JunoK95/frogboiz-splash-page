import React from 'react'
import RelaxGif from '../../../resources/gifs/relax.gif';
import Brand from '../../../resources/frogboiz-branding/frogboiz-color.png';
import PlayButton from '../../../resources/buttons/press-play.png';

function RelaxBlock() {
  return (
    <div style={styles.container}>
      <div style={styles.topGradient} />
      <div style={styles.bottomGradient} />
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
    backgroundImage: `url(${RelaxGif})`
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

export default RelaxBlock
