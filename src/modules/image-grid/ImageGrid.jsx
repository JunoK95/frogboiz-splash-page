import React from 'react'
import angel from '../../resources/animated/angel.gif';
import astro from '../../resources/animated/astro.gif';
import baloon from '../../resources/animated/baloon.gif';
import bones from '../../resources/animated/bones.gif';
import burger from '../../resources/animated/burger.gif';
import devil from '../../resources/animated/devil.gif';
import finn from '../../resources/animated/finn.gif';
import ghost from '../../resources/animated/ghost.gif';
import glasses from '../../resources/animated/glasses.gif';
import invaders from '../../resources/animated/invaders.gif';
import king from '../../resources/animated/king.gif';
import mickey from '../../resources/animated/mickey.gif';
import minion from '../../resources/animated/minion.gif';
import monopoly from '../../resources/animated/monopoly.gif';
import ninja from '../../resources/animated/ninja.gif';
import pirate from '../../resources/animated/pirate.gif';
import poomerica from '../../resources/animated/poomerica.gif';
import poopie from '../../resources/animated/poopie.gif';
import sailormoon from '../../resources/animated/sailormoon.gif';
import toad from '../../resources/animated/toad.gif';
import zombie from '../../resources/animated/zombie.gif';

function ImageGrid() {
  return (
    <div style={styles.flexContainer}>
      <div style={styles.flexRow}>
        <div style={styles.flexItem}>
          <img style={styles.image} src={angel} alt="" />
        </div>
        <div style={styles.flexItem}>
          <img style={styles.image} src={astro} alt="" />
        </div>
        <div style={styles.flexItem}>
          <img style={styles.image} src={baloon} alt="" />
        </div>
        <div style={styles.flexItem}>
          <img style={styles.image} src={bones} alt="" />
        </div>
        <div style={styles.flexItem}>
          <img style={styles.image} src={burger} alt="" />
        </div>
        <div style={styles.flexItem}>
          <img style={styles.image} src={devil} alt="" />
        </div>
        <div style={styles.flexItem}>
          <img style={styles.image} src={finn} alt="" />
        </div>
      </div>
      <div style={styles.flexRow}>
        <div style={styles.flexItem}>
          <img style={styles.image} src={ghost} alt="" />
        </div>
        <div style={styles.flexItem}>
          <img style={styles.image} src={glasses} alt="" />
        </div>
        <div style={styles.flexItem}>
          <img style={styles.image} src={invaders} alt="" />
        </div>
        <div style={styles.flexItem}>
          <img style={styles.image} src={king} alt="" />
        </div>
        <div style={styles.flexItem}>
          <img style={styles.image} src={mickey} alt="" />
        </div>
        <div style={styles.flexItem}>
          <img style={styles.image} src={minion} alt="" />
        </div>
        <div style={styles.flexItem}>
          <img style={styles.image} src={monopoly} alt="" />
        </div>
      </div>
      <div style={styles.flexRow}>
        <div style={styles.flexItem}>
          <img style={styles.image} src={ninja} alt="" />
        </div>
        <div style={styles.flexItem}>
          <img style={styles.image} src={pirate} alt="" />
        </div>
        <div style={styles.flexItem}>
          <img style={styles.image} src={poomerica} alt="" />
        </div>
        <div style={styles.flexItem}>
          <img style={styles.image} src={poopie} alt="" />
        </div>
        <div style={styles.flexItem}>
          <img style={styles.image} src={sailormoon} alt="" />
        </div>
        <div style={styles.flexItem}>
          <img style={styles.image} src={toad} alt="" />
        </div>
        <div style={styles.flexItem}>
          <img style={styles.image} src={zombie} alt="" />
        </div>
      </div>
    </div>
  )
}

const styles = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '90%',
  },
  flexRow: {
    padding: '0 32px',
    display: 'flex',
    flexDirection: 'row',
  },
  flexItem: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: '24px',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
  }
};

export default ImageGrid
