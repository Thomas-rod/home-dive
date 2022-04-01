// --------- STYLE IMPORT ---------- //
import sliderStyle from '../../styles/components/slider.module.css'
import fontStyle from '../../styles/utils/fonts.module.css'

// --------- GLOBAL IMPORT ---------- //
import React, { useState } from "react";
import Image from 'next/image';

// --------- LOCAL IMPORT ---------- //
import Button_Vintage from '../button/button_vintage'
import Header_H3 from '../font/header_h3';

// --------- DATA IMPORT ---------- //
import Features from '../../data/features'



export default function Features_Slider() {
    const [activeTab, setActiveTab] = useState(0)

    return (
      <div className={`${sliderStyle.container_features}`}>
          <div className={`${sliderStyle.container_features_tabs}`}>
              <div className={`${sliderStyle.features_tabs_items}`}>
                {
                    Features.dataFeatures.map((feature, index) => (
                        <p  className={`${sliderStyle.feature_tab_item} ${(activeTab === index) ? sliderStyle.feature_tab_item_active : ""} ${fontStyle.subtitle} ${fontStyle.__uppercase} ${fontStyle.__pink} ${fontStyle.__bold}`}
                            key={`feature-${index}`}
                            onClick={() => {setActiveTab(index)}}
                        >
                            <a>{feature.tab_title}</a>
                        </p>
                    )) 
                  }
              </div>
          </div>
          <div className={`${sliderStyle.container_features_content}`}>
              <div className={`${sliderStyle.positioning_container_features_content}`}>
                  <div className={`${sliderStyle.features_content_left}`}>
                      <Header_H3 text={Features.dataFeatures[activeTab].content_title}/>
                      <p className={`${fontStyle.paragraph} ${fontStyle.__white}`} dangerouslySetInnerHTML={{__html: Features.dataFeatures[activeTab].content_text}}/>
                  </div>
                  <div className={`${sliderStyle.features_content_right}`}>
                      <Image 
                          src={Features.dataFeatures[activeTab].url}
                          alt={Features.dataFeatures[activeTab].alt}
                          layout="responsive"
                          width={Features.dataFeatures[activeTab].width}
                          height={Features.dataFeatures[activeTab].height}
                          qualtity={100}
                          />
                  </div>
              </div>
          </div>
          <Button_Vintage text="request access" withForm={true}/>
      </div>
    )
}