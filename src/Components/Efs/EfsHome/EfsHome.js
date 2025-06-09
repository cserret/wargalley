import React from 'react';
import { Link } from 'react-router-dom';
import './EfsHome.scss';
import BsrLink from "../BsrLink/BsrLink";
import gamesGroup from "../../../images/efsgroup.jpg";
import awaitingOrders from "../../../images/awaitingorders.jpg";

const EfsHome = (props) => {
    return (
        <div className="efs-home">


            <div className="info">
                <div>


                </div>
                <div className="new-rules-notice">
                        <div className="first-para">
                        Latest release:
                        </div>
                        <a className="product-link" href="https://www.gmtgames.com/p-594-barbarossa-army-group-center-1941-2nd-edition.aspx" target="_blank" rel="noopener noreferrer">
                        <div className="product-style">
                            <div>BARBAROSSA</div>
                            <div>ARMY GROUP CENTER, 1941</div>
                            <div>SECOND EDITION</div>
                        </div>
                        </a>
                        <div>
                            This site is being updated to reflect<br />
                            the newest version of the rules -
                        </div>
                        <div className="bsr-link">
                            <a href="https://gmtwebsiteassets.s3.us-west-2.amazonaws.com/bagc/Barb-AGC_StandardRules_Final_Lo-Res.pdf"
                                target="_blank" rel="noopener noreferrer" className="new-rules">Barbarossa Standard Rules 2.0</a>
                        </div>
                    </div>
            </div>
            <img src={gamesGroup} alt="games group" />

            <div className="contents">
                <div className="contents-list">
                    <div>CONTENTS</div>
                    <span>
                        <ul>
                            <li><Link to="./efs/overview">Overview</Link></li>
                            <li><Link to="./efs/units">Units</Link></li>
                            <li><Link to="./efs/sop">Sequence of Play</Link></li>
                            <li><Link to="./efs/supply">Supply</Link></li>
                            <li><Link to="./efs/movement">Movement</Link></li>
                            <li><Link to="./efs/combat">Combat</Link></li>
                            <li><Link to="./efs/airpower">Airpower</Link></li>
                            <li><Link to="./efs/headquarters">Headquarters</Link></li>
                            <li><Link to="./efs/special">Special Units</Link></li>
                            <li><Link to="./efs/weather">Weather</Link></li>
                        </ul>
                    </span>

                </div>
                <div className="images">
                    <img src={awaitingOrders} alt="awaiting orders" />
                </div>
            </div>
        </div>
    );
}

export default EfsHome;

/*

<div className="notice-box">
                <div>NOTICE</div>

                <div className="content-notice">
                    <span>
                    The East Front Series is produced by GMT Games. The designer is Vance von Borries. This website is not connected to GMT Games
                    or Vance von Borries in any way, it is purely a "fan" page. Any mistakes or confusion or misinformation here is the
                    fault of my own muddled mind. This is not meant to be a comprehensive review, or replacement, of the EFS rules. It
                    is a look at major features of the EFS system. The actual rules are available as "living rules" on the GMT website
                    at
                    </span>
                </div>
                <div className="linky">
                    <a href="http://www.gmtgames.com/" target="gmt">www.gmtgames.com</a>
                </div>
                <div className="please">
                <span>
                    Please send comments and corrections to Cisco Serret at cisco_s@yahoo.com
                    </span>
                </div>
            </div>


                    <span>
                    In 1941 Germany invaded the Soviet Union. Attempting to deal a "knock-out blow" to the Soviet colossus, Germany and its allies
                    sent in 21 panzer divisions, 10 motorized divisions, and 163 infantry divisions. The biggest military
                    effort ever in the history of mankind. The battles in 1941 laid bare the deficiencies of the Soviet military
                    forces. Led by mostly inexperienced officers, paralyzed by rigid command structure, and bereft of initiative,
                    the Soviets suffered terribly against the well oiled Axis armies. The GMT Barbarrossa games simulate
                    these military operations in 1941 on the Eastern Front.
                    </span>
                </div>

                <div>
                    <span>
                    Vance von Borries created <span className="tm">Typhoon!</span> as the first game for his new game system, titled the "<span className="b">EAST FRONT SERIES</span>" (EFS), in 1995. It was an instant
                    hit, and is out of print and a very desired collectable game, demanding high prices whenever offered. Vance followed
                    up this hit with a series of 3 games, the Barbarossa games, each named after one of 3 army groups of the Axis effort in the
                    east: <span className="tm">Army Group South</span> (1996), <span className="tm">Army Group Center</span> (1998), and <span className="tm">Army Group North</span> (2000).
                    Then came  <span className="tm">Barbarossa: Kiev to Rostov, 1941</span> (2008), and <span className="tm">Barbarossa: Crimea, 1941-42</span> (2010). They are all out of print as of now (2019).
                    </span>
                </div>
                <div>
                    <span>
                    In this discussion I will primarily keep to the newer games, although most of it should apply to Typhoon! as well. The newer revisions of the system can be
                    applied to Typhoon!, although you'll have to come up with some updated counters and use some of the charts and rules from the later Barbarossa games (<a href="https://www.gmtgames.com/bags/gmtefret.htm">link</a>). Kiev to Rostov and Crimea have some updates and minor changes to the rules.
                </span>
                */