import React from 'react'
import Navbar from '../modules/navbar/Navbar'
import DaJourneyBlock from '../modules/navbar/page-blocks/DaJourneyBlock'
import FinalBlock from '../modules/navbar/page-blocks/FinalBlock'
import FooterBlock from '../modules/navbar/page-blocks/FooterBlock'
import HeroGifBlock from '../modules/navbar/page-blocks/HeroGifBlock'
import JoinCommunityBlock from '../modules/navbar/page-blocks/JoinCommunityBlock'
import PhasesBlock from '../modules/navbar/page-blocks/PhasesBlock'
import RelaxBlock from '../modules/navbar/page-blocks/RelaxBlock'
import TalkingHeadBlock from '../modules/navbar/page-blocks/TalkingHeadBlock'

function HomePage() {
  return (
    <div style={{ minWidth: '1200px' }}>
      {/* <Navbar /> */}
      <HeroGifBlock />
      <TalkingHeadBlock />
      <DaJourneyBlock />
      <PhasesBlock />
      <RelaxBlock />
      <JoinCommunityBlock />
      <FinalBlock />
      <FooterBlock />
    </div>
  )
}

export default HomePage
