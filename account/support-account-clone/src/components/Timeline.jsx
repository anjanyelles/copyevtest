import React from 'react';
import HeroSection from './HeroSection';
import QuickLinks from './QuickLinks';
import TrendingTopics from './TrendingTopics';
import Header from './Header';

function Timeline(props) {
    return (
        <div className="App">
        <Header />
        <HeroSection />
        <QuickLinks />
        <TrendingTopics />
      </div>
  
    );
}

export default Timeline;