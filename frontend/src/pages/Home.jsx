import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection.jsx'
import BestSeller from '../components/BestSeller.jsx'
import OurPolicies from '../components/OurPolicies.jsx'
import LetterBox from '../components/LetterBox.jsx'

function Home() {
  return (
    <div>
        <Hero/>
        <LatestCollection/>
        <BestSeller/>
        <OurPolicies/>
        <LetterBox/>
    </div>
  )
}

export default Home