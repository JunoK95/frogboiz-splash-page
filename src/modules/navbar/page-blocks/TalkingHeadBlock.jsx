import React from 'react'
import TalkingHead from '../../../resources/gifs/talking-head-cropped.gif';
import TalkingHeadSpeechBubble from '../../../resources/boxes/white-speech-bubble.png';
import MintButton from '../../../resources/buttons/mint.png';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

function TalkingHeadBlock() {
  const { isMobile } = useWindowDimensions();

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <img style={styles.headImage} src={TalkingHead} alt="" />
        <div style={styles.bubbleContainer}>
          <img src={TalkingHeadSpeechBubble} alt="" style={styles.phaseImage} />
          <div style={styles.phaseText}>
            <div style={{
              ...styles.paragraph,
              ...(isMobile) ? { fontSize: '12px', lineHeight: '100%' } : { fontSize: '18px' },
            }}>
              <span style={styles.yellow}>FROGBOIZ</span> are a collection of 
              <span style={styles.yellow}> 5555 thirsty frogs</span>  
              <span style={styles.yellow}> existing peacefully on the Solana blockchain...</span> 
              until now! Bitcoin miners have f*cked the environment and dried up the FROGBOIZ home in the Pixel Pond. 
              Now they’re on a pilgrimage to the Solana Sea in search of a new place to call home. Which frogboi will 
              you rescue as they leap into the water on 
              <span style={styles.yellow}> October 29th!</span>
            </div>
            <img src={MintButton} alt="" style={styles.mintButton} />
        </div>
      </div>
      </div>
    </div>
  )
}

const styles = { 
  container: {
    position: 'relative',
    backgroundColor: '#18144c',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '43vw',
    minHeight: '800px',
    minWidth: '1200px',
  },
  content: {
    width: '85%',
    position: 'relative',
  },
  headImage: {
    position: 'absolute',
    width: '20%',
    bottom: '10%',
    left: '0',
  },
  bubbleContainer: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 'calc(10% + 96px)',
    right: 0,
    width: '80%',
    minHeight: '400px',
  },
  phaseContainer: {
    margin: 'auto',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '90%',
    height: 'auto',
    fontFamily: 'VideoGame',
    color: 'white',
  },
  phaseImage: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    right: 0,
    bottom: 'calc(10% + 96px)',
  },
  phaseText: {
    position: 'absolute',
    textAlign: 'center',
    lineHeight: '150%',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '12px 64px',
    fontFamily: 'VideoGame',
    color: 'white',
  },
  mintButton: {
    width: '180px',
    cursor: 'pointer',
  },
  yellow: {
    color: 'yellow',
  },
}

export default TalkingHeadBlock
