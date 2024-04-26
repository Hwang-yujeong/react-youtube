import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";

import VideoCards from '../components/videos/VideoCards'

import { webdText } from "../data/webd";

function Webd() {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false);
        }, 300);
    },[]);
    const weebdPageClass = loading ? 'isLoading' : 'isLoaded';

    return (        
        <Main
            title="웹디자인 기능사"
            description="웹디자인 기능사 튜토리얼 강의입니다."
        >
           <section id="webdPage" className={weebdPageClass}>
             <h2>😮 웹디자인기능사 한번에 따자!3</h2>
             <div className="video__inner">
                {/* {webdText.map((video, key)=>(
                    <div className="video" key={key}>
                        <div className="video__thumb play_icon">
                            <Link to={`/video/${video.videoId}`}>
                                <img src={video.img} alt={video.title}/>
                            </Link>
                        </div>
                    </div>
                ))} */}
                <VideoCards videos={webdText}/>
             </div>
        </section>
        </Main>
    )
}

export default Webd