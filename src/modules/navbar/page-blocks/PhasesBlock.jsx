import React from 'react'
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import Phase1 from '../../../resources/boxes/phase1.png';
import Phase2 from '../../../resources/boxes/phase2.png';
import Phase3 from '../../../resources/boxes/phase3.png';
import Phase4 from '../../../resources/boxes/phase4.png';
import Phase5 from '../../../resources/boxes/phase5.png';
import potion from '../../../resources/gifs/IMG_5229.GIF';
import ImageGrid from '../../image-grid/ImageGrid';

const PHASE_CONTENT = [
  {
    title: 'F*CK GLOBAL WARMIN’',
    content: "Global warming has absolutely f'ed me and da boiz up. Our homeland of Pixel Pond dried up like a damn raisin in the sun after all the bitcoin miners overran our home and dried up all the water! After many leapless nights me and my boiz have decided to set on a journey to the luscious Solana Sea. The boiz need ur help!",
  },
  {
    title: 'GATHER DA BOIZ',
    content: 'We need to gather all da BOIZ. All 5,555 of da BOIZ will make the journey to Solana Sea on Thursday, October 28th. 6 out of the 21 ultra rare FROGBOIZ will be reserved and airdropped to random holders of FROGBOIZ. The other 15 ultra rare FROGBOIZ will be available in the random mint.',
  },
  {
    title: 'SHARE DA WATER',
    content: 'Us FROGBOIZ had our life ruined by Global Warming. We don’t want da other BOIZ to feel our pain and suffer the same fate. We’re gonna donate 10% of mint to help prevent Climate Change and do our part in protecting the life of planet earth and all its inhabitants. The FROGBOIZ community will suggest and vote on which charity organization to donate to. Donation will be done live on our Instagram after the mint for all to watch and catch a vibe.',
  },
  {
    title: 'SEXY POTION',
    content: 'All 30 day+ FROGBOIZ holders will get airdropped Sexy Potion which they can use to make their FROGBOIZ more sexy. As long as the FROGBOIZ holder hasn’t moved their FROGBOIZ in 30 days+ on the day of the screenshot - they will be eligible. Every FROGBOIZ that each holder owns will be eligible for 1 Sexy Potion.',
  },
  {
    title: 'SOLANA SEA ORGY',
    content: 'After drinking the Sexy Potion, da BOIZ were blessed with mad sex appeal. The baddies at the Solana Sea can’t keep away from da BOIZ and nature has taken it’s course. What do you think will happen next?'
  }
]

function PhasesBlock() {
  const { isMobile } = useWindowDimensions();

  return (
    <div style={styles.container}>
      <div style={styles.phaseContainer}>
        <img src={Phase1} alt="" style={styles.phaseImage} />
        <div style={{
          ...styles.phaseTextLeft,
          ...styles.phase1,
          ...(isMobile) ? styles.phaseTextMobile : styles.phaseText,
        }}>
          <div style={styles.phaseTitle}>
            {PHASE_CONTENT[0].title}
          </div>
          <p>
            {PHASE_CONTENT[0].content}
          </p>
        </div>
      </div>
      <div style={styles.phaseContainer}>
        <img src={Phase2} alt="" style={styles.phaseImage} />
        <div style={{
          ...styles.phaseTextRight,
          ...styles.phase2,
          ...(isMobile) ? styles.phaseTextMobile : styles.phaseText,
        }}>
          <div style={styles.phaseTitle}>
            {PHASE_CONTENT[1].title}
          </div>
          <p>
            {PHASE_CONTENT[1].content}
          </p>
          <ImageGrid />
        </div>
      </div>
      <div style={styles.phaseContainer}>
        <img src={Phase3} alt="" style={styles.phaseImage} />
        <div style={{
          ...styles.phaseTextLeft,
          ...styles.phase3,
          ...(isMobile) ? styles.phaseTextMobile : styles.phaseText,
        }}>
          <div style={styles.phaseTitle}>
            {PHASE_CONTENT[2].title}
          </div>
          <p>
            {PHASE_CONTENT[2].content}
          </p>
        </div>
      </div>
      <div style={styles.phaseContainer}>
        <img src={Phase4} alt="" style={styles.phaseImage} />
        <div style={{
          ...styles.phaseTextRight,
          ...styles.phase4,
          ...(isMobile) ? styles.phaseTextMobile : styles.phaseText,
        }}>
          <div style={styles.phaseTitle}>
            {PHASE_CONTENT[3].title}
          </div>
          <p style={{ display: 'flex', flexDirection: 'row',  }}>
            <img
              style={{ 
                ...(isMobile) ? {height: '160px'} : {height: '220px'},
              }}
              src={potion}
              alt=""
            />
            {PHASE_CONTENT[3].content}
          </p>
        </div>
      </div>
      <div style={styles.phaseContainer}>
        <img src={Phase5} alt="" style={styles.phaseImage} />
        <div style={{
          ...styles.phaseTextLeft,
          ...styles.phase5,
          ...(isMobile) ? styles.phaseTextMobile : styles.phaseText,
        }}>
          <div style={styles.phaseTitle2}>
            {PHASE_CONTENT[4].title}
          </div>
          <p>
            {PHASE_CONTENT[4].content}
          </p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#18144c',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: '0',
    justifyContent: 'center',
    width: '100%',
    minHeight: '80vh',
  },
  phaseContainer: {
    margin: 'auto',
    marginTop: '32px',
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
  },
  phaseTitle: {
    color: '#cf47d7',
    paddingBottom: '8px',
    fontSize: '48px',
    fontWeight: 'bold',
    fontFamily: 'VideoGame',
  },
  phaseTitle2: {
    color: '#71bd4b',
    paddingBottom: '8px',
    fontSize: '48px',
    fontWeight: 'bold',
    fontFamily: 'VideoGame',
  },
  phaseText: {
    position: 'absolute',
    padding: '0px 72px',
    lineHeight: '150%',
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
  phaseTextMobile: {
    position: 'absolute',
    padding: '0px 72px',
    lineHeight: '120%',
    fontSize: '14px',
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
  phaseTextLeft: {
    width: 'calc(100% - 144px)',
    textAlign: 'left',
  },
  phaseTextRight: {
    width: 'calc(100% - 132px)',
    textAlign: 'right',
  },
  phase1: {
    top: '27%',
  },
  phase2: {
    top: '12%',
    height: '75%',
  },
  phase3: {
    top: '27%',
  },
  phase4: {
    top: '27%',
  },
  phase5: {
    top: '33%',
  }
}

export default PhasesBlock
