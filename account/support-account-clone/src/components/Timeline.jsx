import React from 'react';
import HeroSection from './HeroSection';
import QuickLinks from './QuickLinks';
import TrendingTopics from './TrendingTopics';
import Header from './Header';
import YoutubeContainer from './YoutubeContniner';

function Timeline(props) {
    return (
        <div className="App">
        <Header />
        <HeroSection />
        <QuickLinks />
        <YoutubeContainer />
        <TrendingTopics />
      </div>
  
    );
}

export default Timeline;