import React, { useEffect, useState } from 'react';
import { useSignal } from "@preact/signals-react"
import Snap from 'snapsvg-cjs';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import BsrLink from "../BsrLink/BsrLink";
import barrels from "../../../images/efs/supply/barrels.gif";
//import german_supply from "../../../images/efs/supply/german_supply.jpg";
import general_supply_example1 from "../../../images/efs/supply/general_supply_example1.jpg";
import general_supply_example2 from "../../../images/efs/supply/general_supply_example2.jpg";
import general_supply_example3 from "../../../images/efs/supply/general_supply_example3.jpg";
import supplystrip from "../../../images/efs/supply/supplystrip.gif"
import germanrations_pic from "../../../images/efs/supply/germanrations_pic.jpg"
import sovietrations from "../../../images/efs/supply/sovietrations.jpg"
import efs_minsk_map from "../../../images/efs/supply/efs_minsk_map.jpg"
import efs_minsk_map_mainroad from "../../../images/efs/supply/efs_minsk_map_mainroad.jpg";
import efs_minsk_map_road from "../../../images/efs/supply/efs_minsk_roadsc.jpg";
import efs_minsk_map_minorRoads from "../../../images/efs/supply/efs_minsk_map_minorRoads.jpg";
import efs_minsk_map_rail from "../../../images/efs/supply/efs_minsk_map_rail.jpg";
import town_connect from "../../../images/efs/supply/town_connect.jpg";
import town_connected from "../../../images/efs/supply/town_connected.jpg";
import town_connect2 from "../../../images/efs/supply/town_connect2.jpg";
import town_connected2 from "../../../images/efs/supply/town_connected2.jpg";
import town_connect3 from "../../../images/efs/supply/town_connect3.jpg";
import town_connected3 from "../../../images/efs/supply/town_connected3.jpg";
import german_infantry_unit from "../../../images/efs/supply/german_infantry_division_120.png";
import './Supply.scss';
let mina = window.mina


const Supply = (props) => {
    const [paper, setPaper] = useState(null)
    const sgStoryBoard = useSignal([]);
    const sgLastPageGroup = useSignal(null);
    const sgDimensInitial = useSignal({ width: 0, height: 0 });
    const sgAxisCombatUnit = useSignal(null);
    const [storyBoardStarted, setStoryBoardStarted] = useState(false)

    // Snap SVG Easing
    // 
    // Extends Snap SVG easing functions with Robert Penner's easing equations
    // http://www.robertpenner.com/easing/
    // 

    // Quad
    // 


    /*   
       let mina = Snap.mina || {};
       mina.easeInQuad = function (n) {
           return Math.pow(n, 2);
       };
       mina.easeOutQuad = function (n) {
           return -1 * n * (n - 2);
       };
       mina.easeInOutQuad = function (n) {
           if ((n *= 2) < 1) return 0.5 * Math.pow(n, 2);
           return -0.5 * ((--n) * (n - 2) - 1);
       };
   
   
       // Cubic
       // 
       mina.easeInCubic = function (n) {
           return Math.pow(n, 3);
       };
       mina.easeOutCubic = function (n) {
           return Math.pow(n - 1, 3) + 1;
       };
       mina.easeInOutCubic = function (n) {
           if ((n *= 2) < 1) return 0.5 * Math.pow(n, 3);
           return 0.5 * (Math.pow(n - 2, 3) + 2);
       };
   
   
       // Quart
       // 
       mina.easeInQuart = function (n) {
           return Math.pow(n, 4);
       };
       mina.easeOutQuart = function (n) {
           return -1 * (Math.pow(n - 1, 4) - 1);
       };
       mina.easeInOutQuart = function (n) {
           if ((n *= 2) < 1) return 0.5 * Math.pow(n, 4);
           return -0.5 * (Math.pow(n - 2, 4) - 2);
       };
   
   
       // Quint
       // 
       mina.easeInQuint = function (n) {
           return Math.pow(n, 5);
       };
       mina.easeOutQuint = function (n) {
           return Math.pow(n - 1, 5) + 1;
       };
       mina.easeInOutQuint = function (n) {
           if ((n *= 2) < 1) return 0.5 * Math.pow(n, 5);
           return 0.5 * (Math.pow(n - 2, 5) + 2);
       };
   
   
       // Sine
       // 
       mina.easeInSine = function (n) {
           return -1 * Math.cos(n * (Math.PI / 2)) + 1;
       };
       mina.easeOutSine = function (n) {
           return Math.sin(n * (Math.PI / 2));
       };
       mina.easeInOutSine = function (n) {
           return -0.5 * (Math.cos(Math.PI * n) - 1);
       };
   
   
       // Circ
       // 
       mina.easeInCirc = function (n) {
           return -1 * (Math.sqrt(1 - n * n) - 1);
       };
       mina.easeOutCirc = function (n) {
           return Math.sqrt(1 - Math.pow(n - 1, 2));
       };
       mina.easeInOutCirc = function (n) {
           if ((n *= 2) < 1) return -0.5 * (Math.sqrt(1 - n * n) - 1);
           return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
       };
   
   
       // Expo
       // 
       mina.easeInExpo = function (n) {
           return (n == 0) ? 0 : Math.pow(2, 10 * (n - 1));
       };
       mina.easeOutExpo = function (n) {
           return (n == 1) ? 1 : -Math.pow(2, -10 * n) + 1;
       };
       mina.easeInOutExpo = function (n) {
           if (n == 0) return 0;
           if (n == 1) return 1;
           if ((n *= 2) < 1) return 0.5 * Math.pow(2, 10 * (n - 1));
           return 0.5 * (-Math.pow(2, -10 * --n) + 2);
       };
   
   
       // Elastic
       // 
       mina.easeInElastic = function (n) {
           var s = 1.70158, p = 0.3;
           if (n == 0) return 0;
           if (n == 1) return 1;
           s = p / (2 * Math.PI) * Math.asin(1);
           return -(Math.pow(2, 10 * (n -= 1)) * Math.sin((n - s) * (2 * Math.PI) / p));
       };
       mina.easeOutElastic = function (n) {
           var s = 1.70158, p = 0.3;
           if (n == 0) return 0;
           if (n == 1) return 1;
           s = p / (2 * Math.PI) * Math.asin(1);
           return Math.pow(2, -10 * n) * Math.sin((n - s) * (2 * Math.PI) / p) + 1;
       };
       mina.easeInOutElastic = function (n) {
           var p = 0.45, s = p / (2 * Math.PI) * Math.asin(1);
           if (n == 0) return 0;
           if ((n *= 2) == 2) return 1;
           if (n < 1) return -0.5 * (Math.pow(2, 10 * (n -= 1)) * Math.sin((n - s) * (2 * Math.PI) / p));
           return Math.pow(2, -10 * (n -= 1)) * Math.sin((n - s) * (2 * Math.PI) / p) * 0.5 + 1;
       };
   
   
       // Back
       // 
       mina.easeInBack = function (n, s) {
           if (s == undefined) s = 1.70158;
           return Math.pow(n, 2) * ((s + 1) * n - s);
       };
       mina.easeOutBack = function (n, s) {
           if (s == undefined) s = 1.70158;
           return (Math.pow(--n, 2) * ((s + 1) * n + s) + 1);
       };
       mina.easeInOutBack = function (n, s) {
           if (s == undefined) s = 1.70158;
           if ((n *= 2) < 1) return 0.5 * (Math.pow(n, 2) * (((s *= 1.525) + 1) * n - s));
           return 0.5 * (Math.pow((n -= 2), 2) * (((s *= 1.525) + 1) * n + s) + 2);
       };
   
   
       // Bounce
       // 
       mina.easeInBounce = function (n) {
           return 1 - mina.easeOutBounce(1 - n);
       };
       mina.easeOutBounce = function (n) {
           if (n < (1 / 2.75)) {
               return 7.5625 * n * n;
           } else if (n < (2 / 2.75)) {
               return 7.5625 * (n -= (1.5 / 2.75)) * n + 0.75;
           } else if (n < (2.5 / 2.75)) {
               return 7.5625 * (n -= (2.25 / 2.75)) * n + 0.9375;
           } else {
               return 7.5625 * (n -= (2.625 / 2.75)) * n + 0.984375;
           }
       };
       mina.easeInOutBounce = function (n) {
           if (n < 0.5) return mina.easeInBounce(n * 2) * 0.5;
           return mina.easeOutBounce(n * 2 - 1) * 0.5 + 1 * 0.5;
       };
   
   */
    useEffect(() => {
        let _paper = Snap('#supply_examples');
        if (_paper) {
            setPaper(_paper)
        }

        return () => {
            if (paper) {
                paper.clear()
                setPaper(null)
            }
        }

    }, []);

    useEffect(() => {
        if (paper) {
            setupStoryboard()
        }
        else {
        }
    }, [paper])



    const setupStoryboard = () => {
        console.log('setupStoryboard called');


        var backgroundImage = paper.image(efs_minsk_map, 0, 0, 0, 0);
        backgroundImage.attr({
            'xlink:href': efs_minsk_map,
            'width': '100%',
            'height': '100%',
            'opacity': 1
        });

        var dimensInitial = backgroundImage.node.getBoundingClientRect();
        console.log('initial backgroundImage:', dimensInitial.width, dimensInitial.height)
        sgDimensInitial.value = { width: dimensInitial.width, height: dimensInitial.height }

        const nsw = perc => {
            console.log('window.innerWidth:', window.innerWidth, 'perc:', perc)
            console.log('result:', window.innerWidth * perc)
            return window.innerWidth * perc
        }
        const nsh = perc => {
            return window.innerHeight * perc
        }

        let page1 = {
            label: 'intro',
            delay: 1100,
            duration: 5000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                let windowWidth = window.innerWidth;
                let whiteRect = g.rect(14, 13, 931, 98).attr({
                    fill: "#ddffff",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 0
                });
                whiteRect.animate({ opacity: 1 }, 500);
                setTimeout(() => {
                    whiteRect.animate({ opacity: 0 }, 500);
                }, 4500);

                let msText = g.text(47, 61, "This is a map sample from EFS").attr({
                    "textAnchor": "left",
                    "dominant-baseline": "central",
                    "fontSize": 65,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })
                msText.animate({ opacity: 1 }, 500);
                setTimeout(() => {
                    msText.animate({ opacity: 0 }, 500);
                }, 4500);



                let msText2 = g.text(48, 62, "This is a map sample from EFS").attr({
                    "textAnchor": "left",
                    "dominant-baseline": "central",
                    "fontSize": 65,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                msText2.animate({ opacity: 0.2 }, 500);
                setTimeout(() => {
                    msText2.animate({ opacity: 0 }, 500);
                }, 4500);

                let msText3 = g.text(49, 63, "This is a map sample from EFS").attr({
                    "textAnchor": "left",
                    "dominant-baseline": "central",
                    "fontSize": 65,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                msText3.animate({ opacity: 0.2 }, 500);
                setTimeout(() => {
                    msText3.animate({ opacity: 0 }, 500);
                }, 4500);

                //g.transform(`s${300 / windowWidth}, ${300 / windowWidth}, 0, 0`)
                return { discrete: g, percentage: null }
            }
        }


        let page1b = {
            label: 'description',
            delay: 1100,
            duration: 5000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                let windowWidth = window.innerWidth;
                let whiteRect = g.rect(14, 13, 1725, 98).attr({
                    fill: "#ddffff",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 0
                });
                whiteRect.animate({ opacity: 1 }, 500);
                setTimeout(() => {
                    whiteRect.animate({ opacity: 0 }, 500);
                }, 4500);

                let msText = g.text(47, 61, "Let's look at the map features that are important for supply").attr({
                    "textAnchor": "left",
                    "dominant-baseline": "central",
                    "fontSize": 65,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })
                msText.animate({ opacity: 1 }, 500);
                setTimeout(() => {
                    msText.animate({ opacity: 0 }, 500);
                }, 4500);



                let msText2 = g.text(48, 62, "Let's look at the map features that are important for supply").attr({
                    "textAnchor": "left",
                    "dominant-baseline": "central",
                    "fontSize": 65,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                msText2.animate({ opacity: 0.2 }, 500);
                setTimeout(() => {
                    msText2.animate({ opacity: 0 }, 500);
                }, 4500);

                let msText3 = g.text(49, 63, "Let's look at the map features that are important for supply").attr({
                    "textAnchor": "left",
                    "dominant-baseline": "central",
                    "fontSize": 65,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                msText3.animate({ opacity: 0.2 }, 500);
                setTimeout(() => {
                    msText3.animate({ opacity: 0 }, 500);
                }, 4500);

                //g.transform(`s${300 / windowWidth}, ${300 / windowWidth}, 0, 0`)
                return { discrete: g, percentage: null }
            }
        }

        let page2 = {
            label: 'fade in main road',
            delay: 0,
            duration: 5000,
            remove: true,
            async: true,
            fn: () => {
                let g2 = paper.g()
                let g = paper.g()

                let cw = paper.clientHeight
                let ch = paper.clientWidth
                console.log('paper:', paper.node.clientWidth)


                let windowWidth = window.innerWidth;
                console.log('paper:', paper.node.clientWidth)


                sgLastPageGroup.value = g
                console.log('fn for page1, sgLastPageGroup.value:', sgLastPageGroup.value)

                var image2 = g2.image(efs_minsk_map_mainroad, 0, 0, 0, 0);
                image2.attr({
                    'xlink:href': efs_minsk_map_mainroad,
                    'width': "100%",
                    'height': "100%",
                    'opacity': 0
                });

                let zocText = g.text(360, 360, "Motorway").attr({
                    "textAnchor": "middle",
                    "dominant-baseline": "central",
                    "fontSize": 54,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let rotateGroup = g.g();

                let arrow1 = rotateGroup.path("M 0 6 L -16 6 -16 14 0 14 Z").attr({
                    fill: "red",
                    "strokeWidth": 1,
                    stroke: "black",
                    opacity: 1,
                    transform: `t460, 420 s3, 3 `
                });


                let arrow2 = rotateGroup.path("M 0,0 L 18,8 L 0,18 Z").attr({
                    fill: "red",
                    "strokeWidth": 1,
                    stroke: "black",
                    opacity: 1,
                    transform: `t475, 420 s3, 3`
                });

                let arrow1c = rotateGroup.path("M 5 7 L -5 7 -5 13 5 13 Z").attr({
                    fill: "red",
                    stroke: "none",
                    opacity: 1,
                    transform: `t460, 420 s3, 3 `
                });

                arrow2.animate({ transform: `s3 t480, 420` }, 500);
                rotateGroup.transform(`r33`)


                setTimeout(() => {
                    image2.animate({ opacity: 1 }, 500);
                }, 100);
                setTimeout(() => {
                    image2.animate({ opacity: 0 }, 500);
                }, 4500)

                zocText.animate({ opacity: 1 }, 500);
                setTimeout(() => {
                    zocText.animate({ opacity: 0 }, 500);
                }, 4500)


                setTimeout(() => {
                    rotateGroup.animate({ opacity: 0 }, 500);
                }, 4500)

                return { discrete: g, percentage: g2 }
            }
        }

        let page3 = {
            label: 'fade in road',
            delay: 0,
            duration: 6000,
            remove: true,
            async: true,
            fn: () => {
                let g2 = paper.g()
                let g = paper.g()

                sgLastPageGroup.value = g

                var image2 = g2.image(efs_minsk_map_road, 0, 0, 0, 0);
                image2.attr({
                    'xlink:href': efs_minsk_map_road,
                    'width': "100%",
                    'height': "100%",
                    'opacity': 0
                });

                let zocText = g.text(429, 344, "Main road").attr({
                    "textAnchor": "middle",
                    "dominant-baseline": "central",
                    "fontSize": 54,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let rotateGroup = g.g();

                let arrow1 = rotateGroup.path("M 0 6 L -16 6 -16 14 0 14 Z").attr({
                    fill: "red",
                    "strokeWidth": 1,
                    stroke: "black",
                    opacity: 1,
                    transform: `t170, 300 s3, 3 `
                });


                let arrow2 = rotateGroup.path("M 0,0 L 18,8 L 0,18 Z").attr({
                    fill: "red",
                    "strokeWidth": 1,
                    stroke: "black",
                    opacity: 1,
                    transform: `t185, 300 s3, 3`
                });

                let arrow1c = rotateGroup.path("M 5 7 L -5 7 -5 13 5 13 Z").attr({
                    fill: "red",
                    stroke: "none",
                    opacity: 1,
                    transform: `t170, 300 s3, 3 `
                });

                arrow2.animate({ transform: `s3 t188, 300` }, 500);
                rotateGroup.transform(`t60 38 r180`)


                setTimeout(() => {
                    image2.animate({ opacity: 1 }, 500);
                }, 500);
                setTimeout(() => {
                    image2.animate({ opacity: 0 }, 500);
                }, 5000)

                zocText.animate({ opacity: 1 }, 500);
                setTimeout(() => {
                    zocText.animate({ opacity: 0 }, 500);
                }, 5000)

                setTimeout(() => {
                    rotateGroup.animate({ opacity: 0 }, 500);
                }, 5000)

                return { discrete: g, percentage: g2 }
            }
        }


        let page4 = {
            label: 'fade in minor roads',
            delay: 0,
            duration: 6000,
            remove: true,
            async: true,
            fn: () => {
                let g2 = paper.g()
                let g = paper.g()

                sgLastPageGroup.value = g

                var image2 = g2.image(efs_minsk_map_minorRoads, 0, 0, 0, 0);
                image2.attr({
                    'xlink:href': efs_minsk_map_minorRoads,
                    'width': "100%",
                    'height': "100%",
                    'opacity': 0
                });

                let zocText = g.text(410, 194, "Minor road").attr({
                    "textAnchor": "middle",
                    "dominant-baseline": "central",
                    "fontSize": 54,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let rotateGroup = g.g();

                let arrow1 = rotateGroup.path("M 0 6 L -16 6 -16 14 0 14 Z").attr({
                    fill: "red",
                    "strokeWidth": 1,
                    stroke: "black",
                    opacity: 1,
                    transform: `t540, 150 s3, 3 `
                });


                let arrow2 = rotateGroup.path("M 0,0 L 18,8 L 0,18 Z").attr({
                    fill: "red",
                    "strokeWidth": 1,
                    stroke: "black",
                    opacity: 1,
                    transform: `t545, 150 s3, 3`
                });

                let arrow1c = rotateGroup.path("M 5 7 L -5 7 -5 13 5 13 Z").attr({
                    fill: "red",
                    stroke: "none",
                    opacity: 1,
                    transform: `t540, 150 s3, 3 `
                });

                arrow2.animate({ transform: `s3 t548, 150` }, 500);
                rotateGroup.transform(`t58 38`)


                setTimeout(() => {
                    image2.animate({ opacity: 1 }, 500);
                }, 500);
                setTimeout(() => {
                    image2.animate({ opacity: 0 }, 500);
                }, 5000)

                zocText.animate({ opacity: 1 }, 500);
                setTimeout(() => {
                    zocText.animate({ opacity: 0 }, 500);
                }, 5000)

                setTimeout(() => {
                    rotateGroup.animate({ opacity: 0 }, 500);
                }, 5000)

                return { discrete: g, percentage: g2 }
            }
        }


        let page5 = {
            label: 'fade in rails',
            delay: 0,
            duration: 6000,
            remove: true,
            async: true,
            fn: () => {
                let g2 = paper.g()
                let g = paper.g()

                sgLastPageGroup.value = g

                var image2 = g2.image(efs_minsk_map_rail, 0, 0, 0, 0);
                image2.attr({
                    'xlink:href': efs_minsk_map_rail,
                    'width': "100%",
                    'height': "100%",
                    'opacity': 0
                });

                let zocText = g.text(704, 234, "Railroad").attr({
                    "textAnchor": "middle",
                    "dominant-baseline": "central",
                    "fontSize": 54,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let rotateGroup = g.g();

                let arrow1 = rotateGroup.path("M 0 6 L -16 6 -16 14 0 14 Z").attr({
                    fill: "red",
                    "strokeWidth": 1,
                    stroke: "black",
                    opacity: 1,
                    transform: `t540, 250 s3, 3 `
                });


                let arrow2 = rotateGroup.path("M 0,0 L 18,8 L 0,18 Z").attr({
                    fill: "red",
                    "strokeWidth": 1,
                    stroke: "black",
                    opacity: 1,
                    transform: `t545, 250 s3, 3`
                });

                let arrow1c = rotateGroup.path("M 5 7 L -5 7 -5 13 5 13 Z").attr({
                    fill: "red",
                    stroke: "none",
                    opacity: 1,
                    transform: `t540, 250 s3, 3 `
                });

                arrow2.animate({ transform: `s3 t548, 250` }, 500);

                rotateGroup.transform(`t160 58 r90`)

                setTimeout(() => {
                    image2.animate({ opacity: 1 }, 500);
                }, 500);
                setTimeout(() => {
                    image2.animate({ opacity: 0 }, 500);
                }, 5000)

                zocText.animate({ opacity: 1 }, 500);
                setTimeout(() => {
                    zocText.animate({ opacity: 0 }, 500);
                }, 5000)

                setTimeout(() => {
                    rotateGroup.animate({ opacity: 0 }, 500);
                }, 5000)

                return { discrete: g, percentage: g2 }
            }
        }


        let page6 = {
            label: 'roads go through cities and towns',
            delay: 0,
            duration: 15000,
            remove: true,
            async: true,
            fn: () => {

                let g = paper.g()
                let g2 = paper.g()


                sgLastPageGroup.value = g

                let whiteRect = g.rect(186, 173, 1525, 498).attr({
                    fill: "#ddffff",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 0
                });
                whiteRect.animate({ opacity: 1 }, 500);


                let textX = 934
                let textY = 244

                let text1 = g.text(textX, textY, "Although the roads and railroads are not printed inside").attr({
                    "textAnchor": "middle",
                    "dominant-baseline": "central",
                    "fontSize": 54,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let text2 = g.text(textX, textY + 60, "the town and city graphics, it is assumed they still connect").attr({
                    "textAnchor": "middle",
                    "dominant-baseline": "central",
                    "fontSize": 54,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let text3 = g.text(textX, textY + 120, "to any other roads or railroads exiting the same hex.").attr({
                    "textAnchor": "middle",
                    "dominant-baseline": "central",
                    "fontSize": 54,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                text1.animate({ opacity: 1 }, 500);
                setTimeout(() => {
                    text2.animate({ opacity: 1 }, 500);
                }, 100);
                setTimeout(() => {
                    text3.animate({ opacity: 1 }, 500);
                }, 200);
                setTimeout(() => {
                    text1.animate({ opacity: 0 }, 500);
                    text2.animate({ opacity: 0 }, 500);
                    text3.animate({ opacity: 0 }, 500);
                    whiteRect.animate({ opacity: 0 }, 500);
                }, 13000)

                let posX = 450
                var town = g.image(town_connect, posX, 410, 0, 0);
                town.attr({
                    'xlink:href': town_connect,
                    'width': "233",
                    'height': "233",
                    'opacity': 1
                });
                var town2 = g.image(town_connect2, posX + 370, 410, 0, 0);
                town2.attr({
                    'xlink:href': town_connect2,
                    'width': "233",
                    'height': "233",
                    'opacity': 1
                });
                var town3 = g.image(town_connect3, posX + 740, 410, 0, 0);
                town3.attr({
                    'xlink:href': town_connect3,
                    'width': "233",
                    'height': "233",
                    'opacity': 1
                });
                var townConnected = g.image(town_connected, posX, 410, 0, 0);
                townConnected.attr({
                    'xlink:href': town_connected,
                    'width': "233",
                    'height': "233",
                    'opacity': 0
                });
                var townConnected2 = g.image(town_connected2, posX + 370, 410, 0, 0);
                townConnected2.attr({
                    'xlink:href': town_connected2,
                    'width': "233",
                    'height': "233",
                    'opacity': 0
                });
                var townConnected3 = g.image(town_connected3, posX + 740, 410, 0, 0);
                townConnected3.attr({
                    'xlink:href': town_connected3,
                    'width': "233",
                    'height': "233",
                    'opacity': 0
                });
                setTimeout(() => {
                    townConnected.animate({ opacity: 1 }, 500);
                    townConnected2.animate({ opacity: 1 }, 500);
                    townConnected3.animate({ opacity: 1 }, 500);
                    setTimeout(() => {
                        townConnected.animate({ opacity: 0 }, 500);
                        townConnected2.animate({ opacity: 0 }, 500);
                        townConnected3.animate({ opacity: 0 }, 500);
                        setTimeout(() => {
                            townConnected.animate({ opacity: 1 }, 500);
                            townConnected2.animate({ opacity: 1 }, 500);
                            townConnected3.animate({ opacity: 1 }, 500);
                            setTimeout(() => {
                                townConnected.animate({ opacity: 0 }, 500);
                                townConnected2.animate({ opacity: 0 }, 500);
                                townConnected3.animate({ opacity: 0 }, 500);
                                setTimeout(() => {
                                    townConnected.animate({ opacity: 1 }, 500);
                                    townConnected2.animate({ opacity: 1 }, 500);
                                    townConnected3.animate({ opacity: 1 }, 500);
                                    setTimeout(() => {
                                        town.animate({ opacity: 0 }, 500);
                                        town2.animate({ opacity: 0 }, 500);
                                        town3.animate({ opacity: 0 }, 500);
                                        townConnected.animate({ opacity: 0 }, 500);
                                        townConnected2.animate({ opacity: 0 }, 500);
                                        townConnected3.animate({ opacity: 0 }, 500);
                                    }, 2000);
                                }, 2000);
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000);

                return { discrete: g, percentage: null }
            }
        }

        let page7 = {
            label: 'Minsk',
            delay: 1100,
            duration: 5000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                let whiteRect = g.rect(162, 691, 1640, 98).attr({
                    fill: "#ddffff",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 0
                });
                whiteRect.animate({ opacity: 1 }, 500);
                setTimeout(() => {
                    whiteRect.animate({ opacity: 0 }, 500);
                }, 4500);
                setTimeout(() => {
                    whiteRect.remove();
                }, 5000);

                let msText = g.text(199, 741, "We will consider Minsk as the supply source for the Axis").attr({
                    "textAnchor": "left",
                    "dominant-baseline": "central",
                    "fontSize": 65,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })
                msText.animate({ opacity: 1 }, 500);
                setTimeout(() => {
                    msText.animate({ opacity: 0 }, 500);
                }, 4500);
                setTimeout(() => {
                    msText.remove();
                }, 5000);


                let supplyWhiteCircle = g.circle(5, 625, 24).attr({
                    stroke: "black",
                    strokeWidth: 1,
                    fill: "#ffffff",
                    opacity: 0
                })


                let blackHalfCircle = g.path("M  45,713 A 26,26 0 1,1 45,813 Z").attr({
                    fill: "#000000",
                    stroke: "black",
                    strokeWidth: 1,
                    opacity: 0
                })

                blackHalfCircle.transform(`s 0.49, 0.49 t -108 -281`)

                let supplyCircle = g.group(supplyWhiteCircle, blackHalfCircle)
                supplyCircle.transform(`t 40, 189`)

                setTimeout(() => {
                    supplyWhiteCircle.animate({ opacity: 1 }, 500);
                    blackHalfCircle.animate({ opacity: 1 }, 500);
                }, 3000);


                //g.transform(`s${300 / windowWidth}, ${300 / windowWidth}, 0, 0`)
                return { discrete: g, percentage: null }
            }
        }

        let page8 = {
            label: 'Dry weather',
            delay: 1100,
            duration: 1000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                let whiteRect = g.rect(12, 11, 390, 66).attr({
                    fill: "#aadaff",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 0
                });
                whiteRect.animate({ opacity: 1 }, 500);
                // setTimeout(() => {
                //     whiteRect.animate({ opacity: 0 }, 500);
                // }, 4500);
                // setTimeout(() => {
                //     whiteRect.remove();
                // }, 5000);

                let msText = g.text(102, 44, "Dry weather").attr({
                    "textAnchor": "left",
                    "dominant-baseline": "central",
                    "fontSize": 50,
                    "fontWeight": "normal",
                    "fontFamily": "sans-serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })
                msText.animate({ opacity: 1 }, 500);
                // setTimeout(() => {
                //     msText.animate({ opacity: 0 }, 500);
                // }, 4500);
                // setTimeout(() => {
                //     msText.remove();
                // }, 5000);

                let sun = g.circle(0, 0, 20).attr({
                    fill: "#ffff00",
                    stroke: "none",
                    strokeWidth: 0,
                    opacity: 1
                })
                let sunRay = g.path("M -10,15 L 10, 15 0 -15 z").attr({
                    fill: "#ffff00",
                    stroke: "none",
                    strokeWidth: 0,
                    opacity: 1
                })
                // let sunRay2 = sunRay.clone()
                // //let sunRay3 = sunRay.clone()
                // sunRay2.attr({
                //     fill: "#0000ff",
                // })
                let sunGroup = g.group(sun)
                for (let i = 0; i < 8; i++) {
                    let angle = i * 45;
                    let ray = sunRay.clone(true);
                    ray.transform(`r${angle} t 0, -15`);
                    sunGroup.append(ray);
                }

                sunRay.transform(`t 0, -15`)
                //sunRay2.transform(`r 45 t 0, -15`)
                //sunRay3.transform(`r 90 t 0, -15`)
                //sun.transform(`t `)



                sunGroup.transform(`t 55, 45 s 1, 1`)

                //sun.transform(`t 55, 45 s 1, 1`)

                return { discrete: g, percentage: null }
            }
        }


        let page9 = {
            label: 'start with dry weather',
            delay: 0,
            duration: 8000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                let posX = 100
                let posY = 365
                let boxWidth = 1000
                let windowWidth = window.innerWidth;
                let whiteRect = g.rect(444, posY, boxWidth, 190).attr({
                    fill: "#ddffff",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 0
                });
                whiteRect.animate({ opacity: 1 }, 500);
                setTimeout(() => {
                    //   whiteRect.animate({ opacity: 0 }, 500);
                }, 4500);


                let msText = g.text(490, posY + 70, "The weather conditions affect the supply rules.").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let msText2 = g.text(490, posY + 121, "Lets start with Dry weather.").attr({
                    "textAnchor": "left",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })
                msText.animate({ opacity: 1 }, 500);

                setTimeout(() => {
                    msText2.animate({ opacity: 1 }, 500);
                }, 1500);

                setTimeout(() => {
                    msText.animate({ opacity: 0 }, 500);
                    msText2.animate({ opacity: 0 }, 500);
                    whiteRect.animate({ opacity: 0 }, 500);
                }, 4500);



                //g.transform(`s${300 / windowWidth}, ${300 / windowWidth}, 0, 0`)
                return { discrete: g, percentage: null }
            }
        }


        let page10 = {
            label: 'combat unit',
            delay: 0,
            duration: 6000,
            remove: false,
            async: true,
            fn: () => {
                let g2 = paper.g()
                let g = paper.g()




                let posX = 100
                let posY = 365
                let boxWidth = 810
                let windowWidth = window.innerWidth;
                let whiteRect = g.rect(554, posY, boxWidth, 190).attr({
                    fill: "#ddffff",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 0
                });
                whiteRect.animate({ opacity: 1 }, 500);
                setTimeout(() => {
                    //   whiteRect.animate({ opacity: 0 }, 500);
                }, 4500);


                let msText = g.text(760, posY + 70, "Let's take this Axis combat").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let msText2 = g.text(760, posY + 121, "unit and put it in Minsk").attr({
                    "textAnchor": "left",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })
                msText.animate({ opacity: 1 }, 500);

                setTimeout(() => {
                    msText2.animate({ opacity: 1 }, 500);
                }, 1500);

                setTimeout(() => {
                    msText.animate({ opacity: 0 }, 500);
                    msText2.animate({ opacity: 0 }, 500);
                    whiteRect.animate({ opacity: 0 }, 500);
                }, 4500);

                sgLastPageGroup.value = g

                sgAxisCombatUnit.value = g.image(german_infantry_unit, 613, 410, 0, 0);
                sgAxisCombatUnit.value.attr({
                    'xlink:href': german_infantry_unit,
                    'width': "120",
                    'height': "120",
                    'opacity': 1
                });

                setTimeout(() => {
                    //  combat_unit.animate({ width: 35, height: 35, transform: 't 44, 44 ' }, 500);
                    sgAxisCombatUnit.value.animate({ width: 58, height: 58, transform: 't -596, 374 ' }, 500);
                }, 2500);



                return { discrete: g, percentage: g2 }
            }
        }


        let page11 = {
            label: 'supply in Minsk',
            delay: 0,
            duration: 10000,
            remove: false,
            async: true,
            fn: () => {
                let g2 = paper.g()
                let g = paper.g()




                let posX = 300
                let posY = 270
                let boxWidth = 1360
                let windowWidth = window.innerWidth;
                let whiteRect = g.rect(posX - 30, posY + 12, boxWidth, 218).attr({
                    fill: "#ddffff",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 0
                });
                whiteRect.animate({ opacity: 1 }, 500);
                setTimeout(() => {
                    //   whiteRect.animate({ opacity: 0 }, 500);
                }, 4500);


                let msText = g.text(posX, posY + 70, "In the General Supply Status phase, supply is determined for each").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let msText2 = g.text(posX, posY + 121, "combat unit on the board. Since Minsk is a Axis supply source,").attr({
                    "textAnchor": "left",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let msText3 = g.text(posX, posY + 173, "General Supply will be traced from Minsk out to units on the map.").attr({
                    "textAnchor": "left",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                msText.animate({ opacity: 1 }, 500);
                msText2.animate({ opacity: 1 }, 500);
                msText3.animate({ opacity: 1 }, 500);


                setTimeout(() => {
                    msText.animate({ opacity: 0 }, 500);
                    msText2.animate({ opacity: 0 }, 500);
                    msText3.animate({ opacity: 0 }, 500);
                    whiteRect.animate({ opacity: 0 }, 500);
                }, 9500);
                setTimeout(() => {
                    msText.remove();
                    msText2.remove();
                    msText3.remove();
                    whiteRect.remove();
                }, 10000);

                sgLastPageGroup.value = g




                return { discrete: g, percentage: g2 }
            }
        }

        let page12 = {
            label: 'supply in Minsk',
            delay: 0,
            duration: 10000,
            remove: false,
            async: true,
            fn: () => {
                let g2 = paper.g()
                let g = paper.g()




                let posX = 440
                let posY = 270
                let boxWidth = 1103
                let windowWidth = window.innerWidth;
                let whiteRect = g.rect(posX - 30, posY + 12, boxWidth, 218).attr({
                    fill: "#ddffff",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 0
                });
                whiteRect.animate({ opacity: 1 }, 500);
                setTimeout(() => {
                    //   whiteRect.animate({ opacity: 0 }, 500);
                }, 4500);


                let msText = g.text(posX, posY + 70, "So let's say it's the Supply Status phase. Check supply").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let msText2 = g.text(posX, posY + 121, "for that (one) unit on the map. It is of course in supply").attr({
                    "textAnchor": "left",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let msText3 = g.text(posX, posY + 173, "because it is sitting directly on a supply source.").attr({
                    "textAnchor": "left",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                msText.animate({ opacity: 1 }, 500);
                msText2.animate({ opacity: 1 }, 500);
                msText3.animate({ opacity: 1 }, 500);


                setTimeout(() => {
                    msText.animate({ opacity: 0 }, 500);
                    msText2.animate({ opacity: 0 }, 500);
                    msText3.animate({ opacity: 0 }, 500);
                    whiteRect.animate({ opacity: 0 }, 500);
                }, 9000);
                setTimeout(() => {
                    msText.remove();
                    msText2.remove();
                    msText3.remove();
                    whiteRect.remove();
                }, 9500);

                sgLastPageGroup.value = g




                return { discrete: g, percentage: g2 }
            }
        }

        let page13 = {
            label: 'check supply',
            delay: 0,
            duration: 6000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()

                let posX = 560
                let posY = 300
                let boxWidth = 762
                let windowWidth = window.innerWidth;
                let whiteRect = g.rect(posX - 35, posY + 12, boxWidth, 110).attr({
                    fill: "#ddffff",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 0
                });
                whiteRect.animate({ opacity: 1 }, 500);



                let msText = g.text(posX, posY + 70, "Now let's say that unit is over here...").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })


                msText.animate({ opacity: 1 }, 500);
                setTimeout(() => {
                    whiteRect.animate({ opacity: 0 }, 500);
                    msText.animate({ opacity: 0 }, 500);
                }, 4500);

                sgLastPageGroup.value = g
                setTimeout(() => {
                    sgAxisCombatUnit.value.animate({ transform: 't -193, 374' }, 500, mina.easeinout);
                }, 2500);


                return { discrete: g, percentage: null }
            }
        }

        let page14 = {
            label: 'is it now in supply',
            delay: 0,
            duration: 6000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()

                let posX = 560
                let posY = 300
                let boxWidth = 762
                let windowWidth = window.innerWidth;
                let whiteRect = g.rect(posX - 35, posY + 12, boxWidth, 110).attr({
                    fill: "#ddffff",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 0
                });
                whiteRect.animate({ opacity: 1 }, 500);



                let msText = g.text(posX, posY + 70, "Will that unit be in general supply?").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })


                msText.animate({ opacity: 1 }, 500);

                setTimeout(() => {
                    whiteRect.animate({ opacity: 0 }, 500);
                    msText.animate({ opacity: 0 }, 500);
                }, 5000);


                return { discrete: g, percentage: null }
            }
        }

        let page15 = {
            label: 'LOC',
            delay: 0,
            duration: 15000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()

                let posX = 464
                let posY = 323
                let boxWidth = 1043
                let windowWidth = window.innerWidth;
                let whiteRect = g.rect(posX - 35, posY + 12, boxWidth, 170).attr({
                    fill: "#ddffff",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 0
                });
                whiteRect.animate({ opacity: 1 }, 500);

                setTimeout(() => {
                    whiteRect.animate({
                        height: 238
                    }, 500, mina.easein);
                }, 9000);


                let msText = g.text(posX, posY + 70, "A Line of Communications (LOC) in Dry Weather").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let msText2 = g.text(posX, posY + 130, "is usually 7 hexes. So let's count the hexes...").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let msText3 = g.text(posX, posY + 190, "The distance is 6 hexes, so the unit is in supply.").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let number1 = null
                let number2 = null
                let numX = 380
                let numY = 773
                let numY2 = 812
                let numbersGroups = []
                for (let i = 1; i < 7; i++) {
                    let numMY = (i % 2 === 0) ? numY2 : numY;
                    let circleN = g.circle(numX, numMY, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 1
                    })
                    let msTextN = g.text(numX - 11, numMY, i).attr({
                        "textAnchor": "center",
                        "dominant-baseline": "central",
                        "fontSize": 45,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "none",
                        fill: "black",
                        opacity: 1,
                    })
                    //number1 = g.group(circle1, msTextN1)
                    let circleAndNumber = g.group(circleN, msTextN)
                    circleAndNumber.attr({
                        opacity: 0
                    })
                    numbersGroups.push(circleAndNumber)
                    numX -= 67;
                    //  numY -= 44;
                    //numY2 -= 44;
                }

                setTimeout(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        setTimeout(() => {
                            numGroup.animate({ opacity: 1 }, 500);
                        }, i * 500);
                    }
                }, 6000);

                msText.animate({ opacity: 1 }, 500);
                msText2.animate({ opacity: 1 }, 500);
                setTimeout(() => {
                    msText3.animate({ opacity: 1 }, 500);
                }, 10000)

                console.log('ok...')
                setTimeout(() => {
                    for (let i = numbersGroups.length; i > 0; i--) {
                        let numGroup = numbersGroups[numbersGroups.length - i];
                        console.log(i, 'numGroup', numGroup);
                        setTimeout(() => {
                            console.log('numGroup animated to 0 opacity number ', i);
                            numGroup.animate({ opacity: 0 }, 80);
                        }, i * 80);
                    }
                }, 14000);

                // setTimeout(() => {
                //     whiteRect.animate({ opacity: 0 }, 500);
                //     msText.animate({ opacity: 0 }, 500);
                //     msText2.animate({ opacity: 0 }, 500);
                //   }, 7500);
                //   setTimeout(() => {
                //     whiteRect.remove()
                //     msText.remove()
                //     msText2.remove()
                //   }, 8000);

                return { discrete: g, percentage: null }
            }
        }

        let page16 = {
            label: 'Road',
            delay: 0,
            duration: 10000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()

                let posX = 92
                let posY = 266
                let boxWidth = 1790
                let windowWidth = window.innerWidth;
                let whiteRect = g.rect(posX - 35, posY + 12, boxWidth, 299).attr({
                    fill: "#ddffff",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 0
                });
                whiteRect.animate({ opacity: 1 }, 450);

                // setTimeout(() => {
                //     whiteRect.animate({
                //         height: 238
                //     }, 500, mina.easein);
                // }, 9000);


                let msText = g.text(posX, posY + 70, "A Motorway or Road (not minor road) hex this is connected to a supply source can extend").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let msText2 = g.text(posX, posY + 130, "the supply source along the road, up to 21 hexes in dry weather. However, enemy unit(s)").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let msText3 = g.text(posX, posY + 190, "or enemy zocs on the road blocks the tracing of supply at that hex. Friendly units can").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let msText4 = g.text(posX, posY + 250, "trace a LOC to a road hex that is connected to a supply source to get its general supply.").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let number1 = null
                let number2 = null
                let numX = 380
                let numY = 773
                let numY2 = 812
                let numbersGroups = []
                // for (let i = 1; i < 7; i++) {
                //     let numMY = (i % 2 === 0) ? numY2 : numY;
                //     let circleN = g.circle(numX, numMY, 30).attr({
                //         fill: "#ffffff",
                //         stroke: "black",
                //         strokeWidth: 1,
                //         opacity: 1
                //     })
                //     let msTextN = g.text(numX - 11, numMY, i).attr({
                //         "textAnchor": "center",
                //         "dominant-baseline": "central",
                //         "fontSize": 45,
                //         "fontWeight": "bold",
                //         "fontFamily": "serif",
                //         stroke: "none",
                //         fill: "black",
                //         opacity: 1,
                //     })
                //     //number1 = g.group(circle1, msTextN1)
                //     let circleAndNumber = g.group(circleN, msTextN)
                //     circleAndNumber.attr({
                //         opacity: 0
                //     })
                //     numbersGroups.push(circleAndNumber)
                //     numX -= 67;
                //     //  numY -= 44;
                //     //numY2 -= 44;
                // }

                // setTimeout(() => {
                //     for (let i = 0; i < numbersGroups.length; i++) {
                //         let numGroup = numbersGroups[i];
                //         setTimeout(() => {
                //             numGroup.animate({ opacity: 1 }, 500);
                //         }, i * 500);
                //     }
                // }, 6000);

                msText.animate({ opacity: 1 }, 500);
                msText2.animate({ opacity: 1 }, 520);
                msText3.animate({ opacity: 1 }, 540);
                msText4.animate({ opacity: 1 }, 560);


                // console.log('ok...')
                // setTimeout(() => {
                //     for (let i = numbersGroups.length; i > 0; i--) {
                //         let numGroup = numbersGroups[numbersGroups.length - i];
                //         console.log(i, 'numGroup', numGroup);
                //         setTimeout(() => {
                //             console.log('numGroup animated to 0 opacity number ', i);
                //             numGroup.animate({ opacity: 0 }, 80);
                //         }, i * 80);
                //     }
                // }, 14000);

                // setTimeout(() => {
                //     whiteRect.animate({ opacity: 0 }, 500);
                //     msText.animate({ opacity: 0 }, 500);
                //     msText2.animate({ opacity: 0 }, 500);
                //   }, 7500);
                //   setTimeout(() => {
                //     whiteRect.remove()
                //     msText.remove()
                //     msText2.remove()
                //   }, 8000);

                return { discrete: g, percentage: null }
            }
        }

        let page17 = {
            label: 'supply to Road',
            delay: 0,
            duration: 10000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()

                let posX = 400
                let posY = 670
                let boxWidth = 1480
                let windowWidth = window.innerWidth;
                let whiteRect = g.rect(posX - 35, posY + 12, boxWidth, 119).attr({
                    fill: "#ddffff",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 0
                });
                whiteRect.animate({ opacity: 1 }, 450);

                let msText = g.text(posX, posY + 70, "So let's show the road hexes that are extending the supply source (Minsk).").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                msText.animate({ opacity: 1 }, 500);









                posX = 300
                posY = 100
                boxWidth = 470
                windowWidth = window.innerWidth;
                let whiteRect2 = g.rect(posX - 24, posY + 27, boxWidth, 89).attr({
                    fill: "#ddffff",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 0
                });


                let msText2 = g.text(posX, posY + 70, "And the other road...").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                setTimeout(() => {
                    whiteRect2.animate({ opacity: 1 }, 450);
                    msText2.animate({ opacity: 1 }, 500);
                }, 5000);


                setTimeout(() => {
                    whiteRect.animate({ opacity: 0 }, 450);
                    msText.animate({ opacity: 0 }, 500);
                    whiteRect2.animate({ opacity: 0 }, 450);
                    msText2.animate({ opacity: 0 }, 500);
                }, 9500);

                setTimeout(() => {
                    whiteRect.remove();
                    msText.remove();
                    whiteRect2.remove();
                    msText2.remove();
                }, 10000);







                let numX = 380
                let numY = 773
                let numY2 = 812
                let numbersGroups = []
                let numberCoords = []
                numberCoords.push({ x: 46, y: 812 }); // 1
                numberCoords.push({ x: 112, y: 774 }); // 1
                numberCoords.push({ x: 112, y: 697 }); // 2
                numberCoords.push({ x: 180, y: 658 }); // 3
                numberCoords.push({ x: 246, y: 620 }); // 4
                numberCoords.push({ x: 313, y: 658 }); // 5
                numberCoords.push({ x: 380, y: 620 }); // 6
                numberCoords.push({ x: 448, y: 581 }); // 7
                numberCoords.push({ x: 515, y: 543 }); // 8
                numberCoords.push({ x: 515, y: 465 }); // 9
                let x = 515
                x += 67;
                numberCoords.push({ x: x, y: 465 - 39 }); // 10
                x += 67
                numberCoords.push({ x: x, y: 465 - 78 }); // 11
                x += 67
                numberCoords.push({ x: x, y: 465 - 113 }); // 12
                x += 67
                numberCoords.push({ x: x, y: 465 - 79 }); // 13
                x += 67
                numberCoords.push({ x: x, y: 465 - 113 }); // 14
                x += 67
                numberCoords.push({ x: x, y: 465 - 152 }); // 15
                x += 67
                numberCoords.push({ x: x, y: 465 - 190 }); // 16
                x += 67
                numberCoords.push({ x: x, y: 465 - 152 }); // 17
                x += 67
                numberCoords.push({ x: x, y: 465 - 190 }); // 18
                x += 67
                numberCoords.push({ x: x, y: 465 - 152 }); // 19
                x += 67
                numberCoords.push({ x: x, y: 465 - 190 }); // 20

                for (let i = 0; i < numberCoords.length; i++) {

                    let circleN = g.circle(numberCoords[i].x, numberCoords[i].y, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 0.8
                    })
                    let adjustX = (i < 9) ? 11 : 22;
                    let msTextN = g.text(numberCoords[i].x - adjustX, numberCoords[i].y - 2, i + 1).attr({
                        "textAnchor": "center",
                        "dominant-baseline": "central",
                        "fontSize": 45,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "none",
                        fill: "black",
                        opacity: 1,
                    })
                    //number1 = g.group(circle1, msTextN1)
                    let circleAndNumber = g.group(circleN, msTextN)
                    circleAndNumber.attr({
                        opacity: 0
                    })
                    numbersGroups.push(circleAndNumber)
                    numX -= 67;
                    //  numY -= 44;
                    //numY2 -= 44;
                }

                setTimeout(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        setTimeout(() => {
                            numGroup.animate({ opacity: 1 }, 70);
                        }, i * 70);
                    }
                }, 3000);


                numX = 380
                numY = 773
                numY2 = 812
                let numbersGroups2 = []
                let numberCoords2 = []
                numberCoords2.push({ x: 112, y: 619 }); // 3
                numberCoords2.push({ x: 180, y: 619 - 37 }); // 4
                numberCoords2.push({ x: 180, y: 619 - (58 * 2) }); // 5
                numberCoords2.push({ x: 180, y: 619 - 192 }); // 6
                numberCoords2.push({ x: 180, y: 619 - 268 }); // 7
                numberCoords2.push({ x: 180, y: 619 - 345 }); // 8
                numberCoords2.push({ x: 180, y: 619 - 422 }); // 9
                numberCoords2.push({ x: 180, y: 619 - 499 }); // 10
                //   numberCoords2.push({ x: 180, y: 619 - 576 }); // 11

                for (let i = 0; i < numberCoords2.length; i++) {

                    let circleN = g.circle(numberCoords2[i].x, numberCoords2[i].y, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 0.4
                    })
                    let adjustX = (i + 3 < 9) ? 11 : 22;
                    let msTextN = g.text(numberCoords2[i].x - adjustX, numberCoords2[i].y - 2, i + 4).attr({
                        "textAnchor": "center",
                        "dominant-baseline": "central",
                        "fontSize": 45,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "none",
                        fill: "black",
                        opacity: 1,
                    })
                    //number1 = g.group(circle1, msTextN1)
                    let circleAndNumber2 = g.group(circleN, msTextN)
                    circleAndNumber2.attr({
                        opacity: 0
                    })
                    numbersGroups2.push(circleAndNumber2)
                    numX -= 67;
                    //  numY -= 44;
                    //numY2 -= 44;
                }

                setTimeout(() => {
                    for (let i = 0; i < numbersGroups2.length; i++) {
                        let numGroup = numbersGroups2[i];
                        setTimeout(() => {
                            numGroup.animate({ opacity: 1 }, 70);
                        }, i * 70);
                    }
                }, 6000);












                return { discrete: g, percentage: null }
            }
        }


        let page18 = {
            label: 'unit supply to Road',
            delay: 0,
            duration: 10000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()

                let posX = 400
                let posY = 500
                let boxWidth = 1480
                let whiteRect = g.rect(posX - 35, posY + 12, boxWidth, 164).attr({
                    fill: "#ddffff",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 0
                });
                whiteRect.animate({ opacity: 1 }, 450);

                let msText = g.text(posX, posY + 70, "So if we re-consider how that Axis unit gets supply, we see that it can get").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let msText2 = g.text(posX, posY + 120, "General Supply from a closer source - the motorway that is near it.").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 45,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                setTimeout(() => {
                    whiteRect.animate({ opacity: 1 }, 450);
                    msText.animate({ opacity: 1 }, 500);
                    msText2.animate({ opacity: 1 }, 500);
                }, 1000);

                return { discrete: g, percentage: null }
            }
        }



        let _storyBoard = []
        _storyBoard.push(page1)
        _storyBoard.push(page1b)
        _storyBoard.push(page2)
        _storyBoard.push(page3)
        _storyBoard.push(page4)
        _storyBoard.push(page5)
        _storyBoard.push(page6)
        _storyBoard.push(page7)
        _storyBoard.push(page8)
        _storyBoard.push(page9)
        _storyBoard.push(page10)
        _storyBoard.push(page11)
        _storyBoard.push(page12)
        _storyBoard.push(page13)
        _storyBoard.push(page14)
        _storyBoard.push(page15)
        _storyBoard.push(page16)
        _storyBoard.push(page17)
        _storyBoard.push(page18)
        sgStoryBoard.value = _storyBoard
        sequence()
    }

    const sequence = async () => {
        while (sgStoryBoard.value.length > 0) {
            let _storyBoard = [...sgStoryBoard.value];
            console.log('storyboard has:', _storyBoard)
            let page = _storyBoard.shift()
            sgStoryBoard.value = _storyBoard
            if (page.async) {
                await runPage(page)
            }
            else {
                runPage(page)
            }
        }
    }

    const runPage = async page => {
        console.log('runPage', page.label);
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = null
                if (page.fn) {
                    console.log('starting page fn', page.label);
                    result = page.fn();
                    if (result.discrete) {
                        result.discrete.transform(`s${sgDimensInitial.value.width / 1900}, ${sgDimensInitial.value.height / 852}, 0, 0`)
                    }
                }
                setTimeout(() => {
                    console.log('runPage done', page.label);
                    if (page.remove && result) {
                        if (result.discrete) {
                            result.discrete.animate({ opacity: 0 }, 100);
                            setTimeout(() => {
                                result.discrete.remove();
                            }, 100);
                        }
                        if (result.percentage) {
                            result.percentage.remove();
                        }
                    }
                    resolve(result);
                }, page.duration)

            }, page.delay);
        });

    }

    return (
        <div className="content">

            <div className="content-title">
                <div>SUPPLY<BsrLink page="9" rule="6.0" /></div>
                <div></div>
            </div>


            <div>
                <span>
                    There are two types of supply represented in the East Front Series.

                    <span className="spacer1rem" />
                    <div className="stand-out green">General Supply<BsrLink page="10" rule="6.32" /></div>


                    <div className="padded">
                        For a military unit to be in "General Supply" means that the unit has a steady stream of goods that are needed daily by
                        military units
                        in the field - items such as
                        food, medical supplies, blankets, shoes, coats, fuels, grease and oils, tools, replacement parts, etc etc.
                    </div>
                    <div className="padded">
                        Units need to be in General Supply to avoid various penalties, such as reduced mobility and combat abilities.
                    </div>
                    <div className="padded">
                        Units get General Supply by being on a General Supply route.
                    </div>
                    <div className="padded">
                        General Supply routes are initially traced from a supply source, as specified in the scenario instructions.
                        The route is then traced along a Railroad Net, or a Road Net, or a Line of Communications (LOC), or a limited
                        combination of these.
                    </div>
                    <span className="spacer1rem" />
                    <div className="stand-out red">Attack Supply<BsrLink page="39" rule="15.2" /></div>
                    <div className="padded">
                        "Attack Supply" represents a concentration of items that have been positioned near the attacking unit(s)
                        when a major military operation is planned -
                        items such as
                        ammunition, shells, rockets, extra fuel, replacement vehicles, etc. Although military units usually carry with them quantities
                        ammunition and other military supplies needed to perform in combat, for a
                        planned attack where the unit(s) is needed to perform at full capacity, they will need a surplus of these items,
                        since the military ordnance will be expended at a much faster rate during combat.
                    </div>
                    <div className="padded">
                        In this EFS game system, most units can attack without
                        being provided Attack Supply, but they will not perform at full capacity. Attacking without Attack Supply can cause
                        increased risk of losses, and also means that artillery support will probably not be provided.
                    </div>

                    <div className="padded">
                        Attack Supply is represented on the map by
                        Attack Supply counters that you need to move to be near the units that are fighting and that need to consume the Attack Supply.
                    </div>
                </span>
            </div>






            <span>
                <div className="subheader-image">
                    <div>General Supply<BsrLink page="10" rule="6.32" /></div>
                    <img src={barrels} alt="general supply barrels" />
                </div>

                <div className="padded-top">
                    General Supply for all units is checked during the Supply Status Phase.<BsrLink page="9" rule="6.11" />
                </div>
                <div className="padded">
                    General Supply is delivered to units by tracing a path of contiguous hexes from a supply source
                    to the hex a unit is in.<BsrLink page="9" rule="6.12" /> The route may consist of 3 different types that can connect to each other:
                </div>
            </span>

            <div className="padded">
                <div className="gray-box">
                    <div className="subsubheader">General Supply Route types<BsrLink page="9" rule="6.1" /></div>
                    <ul>
                        <li>a Railroad Net</li>
                        <li>a Road Net</li>
                        <li>a Line of Communications (LOC)</li>
                    </ul>
                </div>
            </div>

            <span className="spacer1_5rem" />
            6.13 No component of a Supply Route can be traced:<BsrLink page="9" rule="6.13" />
            <ul className="spread-list">
                <li>Through a hex in an enemy ZOC unless that hex is occupied
                    by a friendly combat unit
                </li>
                <li>
                    Across lake or major river hexsides (unless frozen) unless
                    across a non-destroyed bridge or a friendly Bridge or Ferry
                    marker
                </li>
                <li>Into or through any number of swamp hexes in Dry or Mud
                    weather unless along a road or railroad. If the road or railroad
                    cannot be used to trace an LOC, the hex cannot be a part of
                    the LOC (the road, or railroad, must enter the swamp hex
                    from a hex in the LOC and exit into a hex in the LOC)
                </li>
                <li>Into or through a hex with a non-destroyed enemy citadel,
                    fortified belt, strongpoint, or strongpoint under-construction
                </li>
                <li>Across a non-destroyed enemy fortified line hexside
                </li>
            </ul>




            <div className="subheader-rule">
                <div>Line of Communications (LOC)<BsrLink page="10" rule="6.14" /></div>
            </div>

            <div className="padded">
                A LOC is a path of contiguous hexes that connects a ground unit to:
                <ul className="spread-list">
                    <li>a Supply Source.</li>
                    <li>a Road Net<BsrLink page="10" rule="6.15" /> that connects to a Supply Source.</li>
                    <li>a Railroad Net<BsrLink page="9" rule="10.16" /> which connects to a Supply Source.</li>
                </ul>
            </div>
            <svg id="supply_examples" className="supply-svg">

            </svg>

            a. A unit traces its LOC over hexes of any type to a Supply
            Source, or to a hex in a road net [6.15] or railroad net [6.16]
            leading to a Supply Source.
            b. LOC Length. An LOC is traced through no more than seven
            contiguous hexes to a Supply Source, road net hex, or railroad
            net hex. Do not count the hex the unit occupies but do count the
            hex occupied by the Supply Source, road net hex, or railroad net
            hex. Calculate LOC hexes on an Inset map [17.0] by counting
            mega hexes [17.13]; disregard the number of Inset hexes within
            each mega hex.
            c. Reduce the LOC length to five contiguous hexes when:
            • Tracing the LOC along a minor road or railroad into or
            through any swamp hex during Dry or Mud weather
            • Tracing the LOC into or through even one marsh hex not
            along road or railroad during Dry weather
            • Tracing the LOC during Mud or Snow weather
            • Tracing the LOC into or through even one hex where
            Lingering Mud or Snow conditions apply [5.2]













            <div className="padded">
                A Railroad Net (for the Axis, all rail hexes used must be "converted") can bring supply to any units on that railroad,
                or deliver the supply to the start of a road net or LOC.
            </div>
            <div className="padded">
                The railroad can be of any length to a supply source
                (the ultimate supply source is usually a map edge hex).
            </div>
            <div className="padded">
                If the railroad enters a hex with a main road or motorway road also in it,
                then the supply can be extended along that road 21 hexes from the point where
                the railroad met the road. The route can only travel along a railroad once from the supply source.
                Once it leaves the railroad and goes on a road, it cannot get back on a railroad in order to get the unlimited
                railroad length again.
            </div>
            <div className="padded">
                A "Road Net" consists of a Main Road or a
                Motorway (not Minor Roads). If a unit is on that "supply" road, then it is in
                supply. But often a unit won't be on the road. In that case a LOC needs to
                reach to the unit for it to be deemed in General Supply. You can consider the LOC to
                be the "off road" portion of the General Supply path.
            </div>
            <div className="padded">
                The LOC can be up to 7 hexes. The path of General Supply cannot enter an enemy
                occupied hex, cannot go through a hex with an enemy zone of control (ZOC)
                unless there is also a friendly combat unit in the hex.
            </div>
            <div className="padded">
                can it cross a river?
            </div>
            <div className="generic-flex-space-around rations">
                <img src={germanrations_pic} alt="Germans eating rations" />
                <img src={sovietrations} alt="Soviets eating rations" />
            </div>
            <div>
                Supply sources are identified in the scenario instructions. Typically they are a map edge, or range of hexes on a map edge, or a port. The Soviets also get to use Major City Hexes as a source of General Supply.
            </div>

            <div>
                <div className="gray-box">
                    <div className="subsubheader">The types of supply routes that can be traced and how they can connect:</div>
                    <ul>
                        <li>Supply source -> Railroad Net -> Road Net -> LOC</li>
                        <li>Supply source -> Railroad Net -> LOC</li>
                        <li>Supply source -> Road Net -> LOC</li>
                        <li>Supply source -> LOC</li>
                    </ul>
                </div>
            </div>

            <span className="spacer1rem" />
            <div>
                <span>
                    General Supply paths cannot go in any other combinations, such as LOC onto a Road Net, or Road Net onto a Railroad Net, or along a Road Net to a LOC then back to a Road Net, etc. Each path has to be <span className="italic">contiguous</span>.
                </span>

            </div>






            <div>
                <div className="gray-box">
                    <div className="subsubheader">Lengths of supply routes:</div>
                    <ul>
                        <li>Railroad - any distance (For Axis, all railroad hexes used must be "converted" railroad hexes).</li>
                        <li>Main Road (or Motorway) - 21 hexes (not movement points - count only hexes). In Mud or Snow/Arctic this is reduced to 15 hexes.</li>
                        <li>LOC - 7 hexes (not movement points, count only hexes). In Mud or Snow/Arctic this is reduced to 5 hexes.</li>
                        <li>LOC (additional restriction) - 5 hexes when tracing along a road or railroad in swamp hex during Dry weather.</li>
                        <li>LOC (additional restriction) - 5 hexes when tracing through a marsh hex during Dry weather.</li>
                        <li>LOC (additional restriction) - 5 hexes when tracing through a woods hex during Lingering Mud. If tracing along road or railroad in the woods hex, then this doesn't apply.</li>
                    </ul>
                </div>
            </div>

            <span className="spacer1rem" />
            <div>
                <span>

                    The Railroad used in a supply trace has to be contiguous hexes of the same (or connecting) railroad.<br />
                    The Main Road (or Motorway) used in a supply trace has to be contiguous hexes of the same main road.<br />
                    The 7 hexes overland (LOC) has to be contiguous hexes.<br />
                    No "hopping" over hexes is allowed. No leaving a road to go around some obstruction (like an enemy unit) and getting back on the road. Any obstruction on a main road or railroad terminates the use of that main road or railroad at the last hex before the obstruction. From there, the LOC goes out up to 7 hexes. A General Supply path can not cross non-frozen lake/inland sea hexsides or unbridged major river. A General Supply path cannot enter a swamp hex during Dry or Mud turns unless the path is along a road or railroad that goes through the hex. A LOC can go along a railroad into a swamp hex during Dry or Mud turns. A General Supply path cannot enter a hex with a undestroyed enemy strongpoint or across a non-destroyed fortified line hexside.
                </span>
            </div>





            <div>
                <div className="gray-box">
                    <div className="subsubheader">Summary of General Supply stoppers:</div>
                    <ul>
                        <li>Cannot go into a hex with an enemy unit in it.</li>
                        <li>Cannot go into a hex with an enemy ZOC in it, unless that hex also has a friendly combat unit in it.</li>
                        <li>Cannot go across a non-frozen lake/inland sea hexside.</li>
                        <li>Cannot go across an unbridged major river.</li>
                        <li>Cannot go into a swamp hex during Dry or Mud turns unless the supply can be traced along road or railroad that goes through the swamp hex(es).</li>
                        <li>Cannot go through an undestroyed enemy strongpoint (although it can go into it, supplying friendly units in it, but the path stops there).</li>
                        <li>Cannot go across undestroyed enemy fortified lines. (Friendly units on the "wrong" side of a fortified line, even if in the same hex as the fortified line, do not get supply through the fortified hexside).</li>

                    </ul>
                </div>
            </div>

            <span className="spacer2rem" />

            <div>
                <div className="two-column-flex example example1">
                    <div>
                        <div className="example-name">Example 1</div>
                        <div><img src={general_supply_example1} alt="general supply example 1" /></div>
                    </div>
                    <div>
                        <div className="minor">
                            In this example, the supply source for the Axis is marked "S", in the green circle in the lower left.
                        </div>
                        <div className="minor">
                            The supply on a main road can go up to 21 hexes on a dry weather turn. However, there is a Soviet unit sitting on the road. This stops the supply chain from going further up the road. A supply route can not exit a road then re-enter it further up. Note that Minor Roads (dotted lines) cannot be used in a Road Net. So the supply along the road terminates at the circle marked "A".
                        </div>
                        <div className="minor">
                            The German unit that is at the hex marked "A" is of course in supply. Now the supply can go "off road", otherwise called "LOC".
                        </div>
                        <div className="minor">
                            The LOC can go up to 7 hexes long on a dry turn. But it cannot enter enemy occupied hexes, or enter hexes where the enemy has a ZOC (although if you got a friendly unit there then supply can go through it). Therefore, the route shown is the shortest route possible to the other German units.
                        </div>
                        <div className="minor">
                            The German unit at the hex marked "5" is in supply. It is within 7 hexes of the supplied main road. The German panzer unit in the upper right part of the map, however, is too far away. It would have to move to at least the hex marked "7" to be in General Supply. Therefore, this unit is not in General Supply, and during the supply phase would be marked with the appropriate marker denoting it cannot draw General Supply.
                        </div>
                    </div>
                </div>
            </div>

            <span className="spacer2rem" />

            <div>
                <div className="two-column-flex example example2">
                    <div>
                        <div className="example-name">Example 2</div>
                        <div><img src={general_supply_example2} alt="general supply example 2" /></div>
                    </div>
                    <div>
                        <div className="minor">
                            In this example, the supply source for the Axis is marked "S", in the green circle in the lower left. The supply on a main road can go up to 21 hexes on a dry weather turn. However, there is a Soviet unit sitting on the road. This stops the supply chain from going further up the road at hex marked A. The German unit that is at the hex marked "A" is in supply.
                        </div>
                        <div className="minor">
                            Now the supply can go "off road", otherwise called "LOC". The LOC can go up to 7 hexes long on a dry turn. But it cannot enter enemy occupied hexes, or enter hexes where the enemy has a ZOC (although if you got a friendly unit there then supply can go through it). Therefore, the route shown is the shortest route possible to try to reach the unit across the river.
                        </div>
                        <div className="minor">
                            The LOC cannot be traced through the hex marked "B" - a enemy unit is exerting a ZOC on that hex. If a German unit *was* in hex "B", then supply could be traced through that hex. The LOC can not be traced through hex "C" for the same reason. Therefore, the LOC has to extend out as shown.
                        </div>
                        <div className="minor">
                            The LOC cannot go across a unbridged major river, and therefore cannot take the most direct route which would be to hex marked "D". General supply cannot go across a major river unless it is crossed by a bridge, minor or major road, or a railroad (it is assumed that any minor road, or major road, or railroad that crosses any kind of river means there is a bridge there). The LOC shown is the shortest possible to the German recon unit that is across the river. Unfortunately for that unit, the LOC ends one hex short. The German recon unit cannot draw General Supply. During the supply phase it would be marked with the appropriate marker denoting it cannot draw General Supply.
                        </div>
                    </div>
                </div>
            </div>

            <span className="spacer2rem" />

            <div>
                <div className="example example3">
                    <div>
                        <div className="example-name">Example 3</div>
                        <div className="example3"><img src={general_supply_example3} alt="general supply example 3" /></div>
                    </div>
                    <div className="row-text">
                        <span className="spacer1rem" />
                        <div className="minor">
                            In this example, the supply source is marked by hex "S". Since there is a converted Axis railroad that extends from "S" to hex "A", we can use the railroad to extend supply. Supply can extend along a railroad as far as the railroad goes.
                        </div>
                        <div className="minor">
                            In this case, the Axis have converted the railroad up to hex "A". So from hex "A" the supply goes off-road, and uses LOC to reach the more distant Axis units. The LOC reaches to the unit at hex "7", but cannot reach the German recon unit that is to the right of that.
                        </div>
                        <div className="minor">
                            All other German units are in General Supply, since they can easily reach the railroad by LOC.
                        </div>
                    </div>
                </div>
            </div>

            <span className="spacer2rem" />


            <span>

                <div className="subheader-rule">
                    <span>6.53</span>
                    <div>Use of Attack Supply as General Supply</div>
                </div>
                <div>
                    There is one more way for units to get General Supply, but it's something to be avoided unless you have a very good reason. You can use Attack Supply as a source of General Supply. Using a Attack Supply counter for General Supply uses up that Attack Supply, or 1 point of a Dump. This procedure gives General Supply to friendly units that can trace 5 hexes, under the same conditions as tracing a LOC, to the Attack Supply. The units are then considered in General Supply for 1 turn. Typically, only Soviet forces will use this tactic, since they are often cut off by the advancing Germans, and may have some friendly Attack Supply trapped with them. But you may find yourself, as the Axis player, forced to do this if for example a panzer division got cut off - or if you "planned" on a panzer division being cut off while involved in a deep thrust behind enemy lines.
                </div>
            </span>

            <span className="spacer1_5rem" />

            <span>

                <div className="subheader-rule">
                    <span>6.7</span>
                    <div>Effects of not being able to get General Supply</div>
                </div>

                <div>
                    Units that were in General Supply but are found to be unable to trace to General Supply are marked with a "Emergency Supply" marker. These units are still considered to be in General Supply. Units that have a "Emergency Supply" marker on them, and are found to still be unable to trace to General Supply during the Supply phase have the "Emergency Supply" marker flipped to "Out of Supply". Strongpoints also suffer from being Out of Supply. Units that are marked "Out of Supply" have the following negative effects:
                </div>
            </span>

            <div>
                <div className="gray-box">
                    <div className="subsubheader">Effects of being Out of Supply<BsrLink page="11" rule="6.35" /></div>
                    <ul>
                        <li>2 Movement points are subtracted from its normal movement allowance (prior to any halving due to other rules).
                            Exceptions: Do not reduce the MA of cavalry, flotilla, or armored train units.</li>
                        <li>Out of Supply Axis motorized units are subject to Fuel Shortage.</li>
                        <li>Cannot conduct Railroad or Strategic movement.</li>
                        <li>The unit cannot conduct overrun.</li>
                        <li>The unit cannot fire defensively (if artillery). OOS artillery can still fire offensively if they are given Attack Supply.</li>
                        <li>A defending stack gives the attacker a -1 drm on the combat roll if any unit defending is OOS.</li>
                        <li>German panzer or German motorized divisions do not get the Divisional Integrity Bonus in an attack if any of its
                            member units participating in the attack are OOS, unless they are given Attack Supply for that attack.</li>
                        <li>Strongpoint markers go out of General Supply just like units - but when they go from "Emergency Supply" to OOS,
                            they are removed from the map.</li>
                        <li>Soviet units that are in the ZOC of an enemy unit and also in Emergency Supply or OOS suffer an additional die roll modifier on their
                            surrender roll.</li>
                        <li>Cannot do Unit Conversion</li>
                        <li>Cannot receive replacements, except for Soviet units which can still absorb Zap units.</li>
                    </ul>
                </div>
            </div>

            <span className="spacer2rem" />

            <span>
                <div className="subheader-image">
                    <span>6.8</span>
                    <div>Attack Supply</div>
                    <img src={supplystrip} alt="supply counters" />
                </div>
                <span className="spacer1rem" />
                <div>
                    Attack Supply is <span className="b">not required to conduct combat</span>. However, units that attack without Attack Supply suffer the following negative effects.
                </div>
            </span>













            <div>
                <div className="gray-box">
                    <div className="subsubheader">Effects of attacking without Attack Supply:</div>
                    <ul>
                        <li>+2 die modifier on combat table roll.</li>
                        <li>Artillery cannot provide support.</li>
                        <li>Results marked with * on the combat table cause additional losses to the attacker.</li>
                        <li>German panzer or German motorized divisions do not get the Divisional Integrity Bonus in an attack if any of its
                            member units participating in the attack are OOS, unless they are given Attack Supply for that attack.</li>

                    </ul>
                </div>
            </div>


            <span className="spacer1_5rem" />
            <div>
                <div>
                    To use Attack Supply for a combat all units that are participating in the attack, including any artillery units, must be able to trace a LOC (7 or 5 hexes, depending on the current General Supply LOC length) to the Attack Supply unit, either a Mobile Supply counter or a Supply Dump. The Attack Supply point is consumed (either remove the Mobile Supply counter, or flip a Supply Dump back over to its Mobile Supply side), and then the attack can proceed as a Combat Supplied attack. It doesn't matter if you have only one unit attacking or 20 with 4 artillery units providing support - 1 attack uses 1 Attack Supply, but you might have to use 2 (or more) in order to reach every attacking unit. Of course, its a good idea to have your Attack Supply close enough so that it reaches all attacking units so you only need to spend 1 Attack Supply.
                </div><div>
                    Note that when the odds are 9-1 or greater, the expenditure of Attack Supply is usually not necessary.
                </div><div>
                    A Attack Supply counter has two sides to it. One side is the Mobile Attack Supply unit. The other side is a Attack Supply Dump. Mobile Attack Supply units can move on their own, or be transported by rail. If you have two Mobile Attack Supply units in the same hex, they can be flipped to a single Attack Supply Dump. If you wish to move a Attack Supply Dump, then you have to sacrifice a point of Attack Supply by simply flipping the Attack Supply Dump to its Mobile Attack Supply side, then you can move it. You can not later turn this single unit back to its Attack Supply Dump unless it is joined by another Mobile Attack Supply unit later. Once you make the decision to flip a dump to its mobile side, you lose that point of Attack Supply.
                </div><div>
                    Attack Supply units cannot be captured. If the hex they are in is entered by an enemy unit, the Attack Supply is removed from the map.
                </div><div>
                    Both sides get a maximum number of Attack Supply counters to use in each scenario (except some training scenarios). This is a hard limit, you can not add more Attack Supply counters beyond this limit (although you're free to create dumps as much as you can with the available Mobile Supply units). Each side gets a certain maximum number of Mobile Attack Supply units that can be brought onto the map each turn. If all Attack Supply counters are on the map, then you don't get to bring any new ones onto the map. Typically, the Axis are constantly expending their Attack Supply, and therefore have a constant stream of Mobile Attack Supply units entering the map, often by rail. The Soviets, since they usually don't attack too often, sometimes get "maxxed" out on their Attack Supply units because the limit of Attack Supply units allocated to them are all on the map waiting to get used.
                </div><div>
                    For example, lets say your Attack Supply allotment is 4 Attack Supply points a turn. If, on a turn, you only have 1 Attack Supply unit available to be brought in (because the rest are on the map), then you bring only 1 in (the one available, even though you qualify for 4). They do not accumulate to the next turn. The next turn you can still only bring in the set maximum of 4 again.
                </div><div>
                    For the Axis, its important to keep attacking (in good odds attacks) and expending your Attack Supply. You don't want to get "maxed" out on Attack Supply sitting on the map because it probably means you are not using your troops effectively enough. Get them up front and attacking. Especially the panzer divisions. An idle panzer division is a bad thing.
                </div>
            </div>










            <ScrollToTopOnMount />



        </div>
    );
}

export default Supply;