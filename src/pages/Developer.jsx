import React from "react";
import Main from "../components/section/Main";

import { developerText } from "../data/developer";
import { Link } from "react-router-dom";

function Developer() {
    return (
        <Main
            title="추천개발자"
            description="오늘의 추천 개발자 유튜버입니다.">
                <section id="developerPage">
                    <h2>🥰 오늘의 추천 개발자입니다.</h2>
                    <div className="developer__inner">
                        {developerText.map((Developer, key) => (
                            <div className="developer" key={key}>
                                <div className="developer__img play__icon">
                                    <Link to = {`/channel/${Developer.channelId}`}>
                                        <img src={Developer.img} alt={Developer.name}/>
                                    </Link>
                                </div>
                                <div className="developer__info">
                                    <Link to={`/channel/${Developer.channelId}`}>
                                        {Developer.name}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
        </Main>
    )
}

export default Developer
