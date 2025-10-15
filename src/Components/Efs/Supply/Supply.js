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
import efs_minsk_map_motorway from "../../../images/efs/supply/efs_minsk_map_motorway.jpg";
import efs_minsk_map_roads from "../../../images/efs/supply/efs_minsk_roads.jpg";
import efs_minsk_map_minorRoads from "../../../images/efs/supply/efs_minsk_map_minorRoads.jpg";
import efs_minsk_map_rail from "../../../images/efs/supply/efs_minsk_map_rail.jpg";
import efs_minsk_map_rail_glow from "../../../images/efs/supply/efs_minsk_map_rail_glow.jpg";
import town_connect from "../../../images/efs/supply/town_connect.jpg";
import town_connected from "../../../images/efs/supply/town_connected.jpg";
import town_connect2 from "../../../images/efs/supply/town_connect2.jpg";
import town_connected2 from "../../../images/efs/supply/town_connected2.jpg";
import town_connect3 from "../../../images/efs/supply/town_connect3.jpg";
import town_connected3 from "../../../images/efs/supply/town_connected3.jpg";
import german_infantry_unit from "../../../images/efs/supply/german_infantry_division_120.jpg";
import german_antiair_unit from "../../../images/efs/supply/german_antiair_120.jpg";
import soviet_cavalry_unit from "../../../images/efs/supply/soviet_cavalry_division_120.jpg";
import soviet_mdno_unit from "../../../images/efs/supply/soviet_mdno_division_120.jpg";
import soviet_infantry_unit from "../../../images/efs/supply/soviet_infantry_division_120.jpg";
import soviet_armor_unit from "../../../images/efs/supply/soviet_armor_division_120.jpg";
import german_rail_end from "../../../images/efs/supply/german_rail_end_120.jpg";
import swampHex from "../../../images/efs/supply/swampHex.jpg";
import emergencySupply from "../../../images/efs/supply/emergency_supply.jpg";
import outOfSupply from "../../../images/efs/supply/out_of_supply.jpg";
import sovietRailBreak from "../../../images/efs/supply/soviet_rail_break_120.jpg";
import './Supply.scss';
let mina = window.mina


const Supply = (props) => {
    const [paper, setPaper] = useState(null)
    const sgStoryBoard = useSignal([]);
    const sgLastPageGroup = useSignal(null);
    const sgDimensions = useSignal({ width: 0, height: 0 });
    const sgAxisCombatUnit = useSignal(null);
    const sgSovietCombatUnit = useSignal(null);
    const sgAxisRailEndUnit = useSignal(null);
    const sgSovietMdnoUnit = useSignal(null);
    const sgSovietInfantryUnit = useSignal(null);
    const sgSovietArmorUnit = useSignal(null);
    const sgZocGroup = useSignal(null)
    const sgSunGroup = useSignal(null)
    const sgSovietRailBreak = useSignal(null)
    const sgTimers = useSignal([])
    const sgMudRoadIndicators = useSignal([])
    const sgBackgroundImage = useSignal(null)
    const sgPlayPauseStatus = useSignal('play') // play, paused
    const sgUseTextSize = useSignal(45)
    const sgUseLineBreak = useSignal(20)
    const sgEmergencySupplyMarker = useSignal(null)
    const sgShadowFilter = useSignal(null)
    const sgCrossBrowserFontSizeRatio = useSignal(1)

    const [storyBoardStarted, setStoryBoardStarted] = useState(false)
    const [backgroundMap, setBackgroundMap] = useState(null);
    let textAttrs = {
        "textAnchor": "center",
        "dominant-baseline": "central",
        "fontSize": 45,
        "fontWeight": "bold",
        "fontFamily": "serif",
        stroke: "none",
        fill: "black",
        opacity: 0,
    }
    let textRectAttrs = {
        fill: "#ddffff",
        strokeWidth: 1,
        stroke: "black",
        opacity: 0
    }

    // Snap SVG Easing
    // 
    // Extends Snap SVG easing functions with Robert Penner's easing equations
    // http://www.robertpenner.com/easing/
    // 

    // Quad
    // 



    //  let mina = Snap.mina || {};
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

    const testTextWidth = g => {
        let text = 'abcdefg hijklmnop, , $()!@#$% qrst uvwxyz ABCDEF GHIJK LMNOP_ -QRS TUVWXYZ 01234 56789'
        let textLine = g.text(0, 0, text).attr({
            "textAnchor": "start",
            "dominant-baseline": "text-before-edge",
            "fontSize": 45,
            "fontWeight": "bold",
            "fontFamily": "serif",
            opacity: 0
        })

        let bbox = textLine.getBBox()
        console.log('text bbox:', bbox)

        console.log('using fontSize 45, we have a text height of:', bbox.height)
        sgCrossBrowserFontSizeRatio.value = 45 / bbox.height
console.log('sgCrossBrowserFontSizeRatio.value:', sgCrossBrowserFontSizeRatio.value)

        let useTextSizeRatio = 1707 / bbox.width
        let useTextSize = Math.round(45 * useTextSizeRatio)
        sgUseTextSize.value = useTextSize
        console.log('useTextSize:', useTextSize)
        console.log('useTextSizeRatio:', useTextSizeRatio)
        let useTextHeight = Math.round(50 * useTextSizeRatio)
        console.log('useTextHeight:', useTextHeight)
        sgUseLineBreak.value =  Math.round(useTextHeight)
        
    }

    const registerTimer = (fn, timeout) => {
        const msStart = Date.now();
        let timerId = setTimeout(() => {
            if (sgPlayPauseStatus.value === 'play') {
                fn.call()
                console.log('inside firing of timeout, just called fn. timerId is:', timerId, 'sgTimers.value:', sgTimers.value)
                let idx = sgTimers.value.findIndex(t => t.timerId === timerId)
                console.log('timerId:', timerId, ' idx is:', idx, 'which is timer:', sgTimers.value[idx])
                sgTimers.value.splice(idx, 1)
            }
        }, timeout)
        console.log('timerId:', timerId)
        sgTimers.value.push({ timerId, timeout, msStart, running: true, fn })
    }

    const setupStoryboard = () => {
        console.log('setupStoryboard called');
        testTextWidth(paper.g())

        var backgroundImage = paper.image(efs_minsk_map, 0, 0, 0, 0);
        backgroundImage.attr({
            'xlink:href': efs_minsk_map,
            'width': '100%',
            'height': '100%',
            'opacity': 1
        });
        setBackgroundMap(backgroundImage);
        sgBackgroundImage.value = backgroundImage

        const showPlayPauseButton = () => {
            let g = paper.group()
            let controlRect = g.rect("95.7%", "91%", "4%", "8.5%", "1%", "2%").attr({
                fill: "#eef4ff",
                strokeWidth: 1,
                stroke: "black",

            })

            let pauseBar1 = g.rect("96.7%", "92.9%", "0.8%", "4.8%").attr({
                fill: "black",
                strokeWidth: 0,
            })
            let pauseBar2 = g.rect("97.9%", "92.9%", "0.8%", "4.8%").attr({
                fill: "black",
                strokeWidth: 0,
            })
            let pauseWrapper = g.rect("96.5%", "92.5%", "2.4%", "5.6%").attr({
                fill: "transparent",
                strokeWidth: 0,
            })
            let pauseButton = g.group(pauseBar1, pauseBar2, pauseWrapper).click(() => {
                if (sgPlayPauseStatus.value === 'play') {
                    console.log('setting to pause')
                    sgPlayPauseStatus.value = 'pause'
                    playButton.attr({
                        visibility: "visible",
                        pointerEvents: "visiblePainted",
                        opacity: 1
                    })
                    pauseButton.attr({
                        visibility: "hidden",
                        pointerEvents: "none"
                    })

                }
            }).attr({ cursor: "pointer" })



            // let playButton = playGroup.group(playLine1, playLine2, playLine3)
            let playGroup = g.group()
            let playLine1 = playGroup.line("96.8%", "93.1%", "98.9%", "95.3%").attr({
                stroke: "blue",
                strokeWidth: 3,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
            })
            let playLine2 = playGroup.line("96.8%", "97.5%", "98.9%", "95.3%").attr({
                stroke: "blue",
                strokeWidth: 3,
                //strokeLinecap: "miter",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
            })
            let playLine3 = playGroup.line("96.8%", "97.5%", "96.8%", "93.1%").attr({
                stroke: "blue",
                strokeWidth: 3,
                //strokeLinecap: "miter",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10
            })
            let playButton = playGroup.group(playLine1, playLine2, playLine3)
            for (let i = 932; i < 975; i++) {
                let nextLine = playGroup.line("96.8%", `${i / 10}%`, "98.9%", "95.3%").attr({
                    stroke: "blue",
                    strokeWidth: 2,
                })
                playButton.add(nextLine)
            }


            playButton.click(() => {
                console.log('play button clicked, sgPlayPauseStatus:', sgPlayPauseStatus.value)
                if (sgPlayPauseStatus.value === 'pause') {
                    console.log('setting to play')
                    sgPlayPauseStatus.value = 'play'
                    pauseButton.attr({
                        visibility: "visible",
                        pointerEvents: "visiblePainted"
                    })
                    playButton.attr({
                        visibility: "hidden",
                        pointerEvents: "none"
                    })
                    console.log('play!')
                    restartTimers()
                }
                else {
                    console.log('setting to pause')
                    sgPlayPauseStatus.value = 'pause'
                    playButton.attr({
                        visibility: "visible",
                        pointerEvents: "visiblePainted",
                        opacity: 1
                    })
                    pauseButton.attr({
                        visibility: "hidden",
                        pointerEvents: "none"
                    })
                    console.log('pause!')
                    pauseTimers()
                }
            })

            setTimeout(() => {
                playButton.attr({
                    opacity: 0
                })
            }, 10)

        }

        showPlayPauseButton(paper.group());

        var dimensions = sgBackgroundImage.value.node.getBoundingClientRect();
        sgDimensions.value = { width: dimensions.width, height: dimensions.height }

        const nsw = perc => {
            console.log('window.innerWidth:', window.innerWidth, 'perc:', perc)
            console.log('result:', window.innerWidth * perc)
            return window.innerWidth * perc
        }
        const nsh = perc => {
            return window.innerHeight * perc
        }



        const showPageNumber = (g, pageInt) => {
            let pageNumber = g.text(1700, 800, pageInt).attr({
                "textAnchor": "middle",
                "dominant-baseline": "central",
                "fontSize": 45,
                "fontWeight": "bold",
                "fontFamily": "serif",
                stroke: "none",
                fill: "black",
                opacity: 0.5,
            })
            setTimeout(() => {
                pageNumber.remove()
            }, 3000)
        }



        setInterval(() => {
            if (sgTimers.value.length > 0) {
                sgTimers.value.forEach(t => {
                    if (t.running) {
                        let now = Date.now()
                        let elapsed = now - t.msStart
                        let timeLeft = t.timeout - elapsed
                        if (timeLeft < 0) {
                            timeLeft = 0
                        }
                        t.timeLeft = timeLeft
                    }
                })

            }
        }, 100)

        // const registerTimer = (fn, timeout) => {
        //     const msStart = Date.now();
        //     let timerId = setTimeout(() => {
        //         if (sgPlayPauseStatus.value === 'play') {
        //             fn.call()
        //             console.log('inside firing of timeout, just called fn. timerId is:', timerId, 'sgTimers.value:', sgTimers.value)
        //             let idx = sgTimers.value.findIndex(t => t.timerId === timerId)
        //             console.log('timerId:', timerId, ' idx is:', idx, 'which is timer:', sgTimers.value[idx])
        //             sgTimers.value.splice(idx, 1)
        //         }
        //     }, timeout)
        //     console.log('timerId:', timerId)
        //     sgTimers.value.push({ timerId, timeout, msStart, running: true })
        // }

        const restartTimers = () => {
            console.log('restartTimers, weze got:', sgTimers.value)
            sgPlayPauseStatus.value = 'play'
            if (sgTimers.value.length > 0) {
                sgTimers.value.forEach(t => {
                    if (!t.running) {
                        console.log('restarting timer:', t.timerId, 'timeLeft:', t.timeLeft)
                        registerTimer(t.fn, t.timeLeft)
                    }
                })
            }
        }

        const pauseTimers = () => {
            sgPlayPauseStatus.value = 'pause'
            if (sgTimers.value.length > 0) {
                sgTimers.value.forEach(t => {
                    if (t.running) {
                        let now = Date.now()
                        let elapsed = now - t.msStart
                        let timeLeft = t.timeout - elapsed
                        if (timeLeft < 0) {
                            timeLeft = 0
                        }
                        t.timeLeft = timeLeft
                        console.log('pausing timeout t.timerId:', t.timerId, 'timeLeft:', t.timeLeft)
                        clearTimeout(t.timerId)
                        t.timerId = null
                        t.running = false
                        console.log('pausing timer:', t.timerId, 'timeLeft:', t.timeLeft)
                    }
                })
            }
            console.log('paused all timers, sgTimers:', sgTimers.value)
        }

        const textBox = (g, text, x, y, delay = 500, removeTimeout = 4000, extraRight = 0, extraBottom = 0, extraLeft = 0) => {
            let textBoxGroup = g.group()
            let textLines = text.split('\n')
            let textLinesGroup = g.group()
            let textX = x + extraLeft
            let textY = y
            textLines.forEach((line, idx) => {
                let textLine = g.text(textX, textY, line).attr({
                    "textAnchor": "start",
                    "dominant-baseline": "text-before-edge",
                    "fontSize": sgUseTextSize.value,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    opacity: 1
                })
                textLinesGroup.add(textLine)
                textY += sgUseLineBreak.value
            })
            let bbox = textLinesGroup.getBBox()
            textLinesGroup.remove()
            let borderPadding = 24
            let textBoxEl = g.rect(x - borderPadding, y - borderPadding,
                bbox.width + (2 * borderPadding) + extraRight + extraLeft,
                bbox.height + (1.9 * borderPadding) + extraBottom).attr(textRectAttrs);
            //textBoxEl.attr({ opacity: 1 })
            if (sgShadowFilter.value == null) {
                var f = paper.filter(Snap.filter.blur(1, 2));
                var shadow = paper.filter(Snap.filter.shadow(4, 4, 3, '#000000', 0.5));
                sgShadowFilter.value = shadow
            }
            // seems to cause the text box to get narrower. textBoxEl.attr({ opacity: 1, filter: sgShadowFilter.value })
            textBoxEl.attr({ opacity: 1 })



            textBoxGroup.add(textBoxEl, textLinesGroup)
            textBoxGroup.attr({ opacity: 0 })
            registerTimer(() => {
                textBoxGroup.animate({ opacity: 1 }, delay);
            }, delay)
            if (removeTimeout > 0) {
                registerTimer(() => {
                    textBoxGroup.animate({ opacity: 0 }, 500);
                    registerTimer(() => {
                        textBoxGroup.remove()
                    }, 500)
                }, removeTimeout - 500)
            }




            return textBoxGroup.getBBox()
        }

        let page1 = {
            label: 'intro',
            pageInt: 1,
            delay: 1100,
            duration: 5000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                //textBox(g, "This is just a test\n of multiblines lines\n did it work", 300, 300)
                showPageNumber(g, "1")
                // let whiteRect = g.rect(14, 13, 0, 96).attr(textRectAttrs);
                // whiteRect.animate({ opacity: 1 }, 500);
                // setTimeout(() => {
                //     whiteRect.animate({ opacity: 0 }, 500);
                // }, 4500);

                // let msText = g.text(47, 61, "This is a map sample from EFS").attr({
                //     "textAnchor": "left",
                //     "dominant-baseline": "central",
                //     "fontSize": 65,
                //     "fontWeight": "bold",
                //     "fontFamily": "serif",
                //     stroke: "none",
                //     fill: "black",
                //     opacity: 0,
                // })
                textBox(g, "This is a map sample from EFS", 54, 53, 300, 4500)

                // msText.animate({ opacity: 1 }, 500);
                // let boxx = msText.getBBox()
                // whiteRect.attr({
                //     width: (boxx.width + 48) + 'px'
                // });


                // setTimeout(() => {
                //     msText.animate({ opacity: 0 }, 500);
                // }, 4500);

                return { discrete: g, percentage: null }
            }
        }


        let page1b = {
            label: 'description',
            pageInt: '1b',
            delay: 1100,
            duration: 5000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "1b")


                textBox(g,
                    "Let's look at the map features that are important for supply.",
                    54, 53, 300, 4500)

                return { discrete: g, percentage: null }
            }
        }

        let page2 = {
            label: 'fade in main road',
            pageInt: 2,
            delay: 0,
            duration: 5000,
            remove: true,
            async: true,
            fn: () => {
                let g2 = paper.g()
                let g = paper.g()


                showPageNumber(g, "2")

                let cw = paper.clientHeight
                let ch = paper.clientWidth
                console.log('paper:', paper.node.clientWidth)


                let windowWidth = window.innerWidth;
                console.log('paper:', paper.node.clientWidth)


                sgLastPageGroup.value = g
                console.log('fn for page1, sgLastPageGroup.value:', sgLastPageGroup.value)

                var image2 = g2.image(efs_minsk_map_motorway, 0, 0, 0, 0);
                image2.attr({
                    'xlink:href': efs_minsk_map_motorway,
                    'width': "100%",
                    'height': "100%",
                    'opacity': 0
                });

                let zocText = g.text(310, 360, "Motorway").attr(textAttrs)

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

                registerTimer(() => {
                    image2.animate({ opacity: 1 }, 500);
                    backgroundImage.animate({ opacity: 0 }, 500);
                }, 100);
                // setTimeout(() => {
                //     image2.animate({ opacity: 1 }, 500);
                //     backgroundImage.animate({ opacity: 0 }, 500);
                // }, 100);
                registerTimer(() => {
                    image2.animate({ opacity: 0 }, 500);
                    backgroundImage.animate({ opacity: 1 }, 500);
                }, 4500)

                zocText.animate({ opacity: 1 }, 500);
                registerTimer(() => {
                    zocText.animate({ opacity: 0 }, 500);
                }, 4500)


                registerTimer(() => {
                    rotateGroup.animate({ opacity: 0 }, 500);
                }, 4500)

                return { discrete: g, percentage: g2 }
            }
        }

        let page3 = {
            label: 'fade in road',
            pageInt: 3,
            delay: 0,
            duration: 6000,
            remove: true,
            async: true,
            fn: () => {
                let g2 = paper.g()
                let g = paper.g()

                showPageNumber(g, "3")
                sgLastPageGroup.value = g

                var image2 = g2.image(efs_minsk_map_roads, 0, 0, 0, 0);
                image2.attr({
                    'xlink:href': efs_minsk_map_roads,
                    'width': "100%",
                    'height': "100%",
                    'opacity': 0
                });

                let zocText = g.text(319, 344, "Main road").attr(textAttrs)

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


                registerTimer(() => {
                    image2.animate({ opacity: 1 }, 500);
                    backgroundImage.animate({ opacity: 0 }, 500);
                }, 500);
                registerTimer(() => {
                    image2.animate({ opacity: 0 }, 500);
                    backgroundImage.animate({ opacity: 1 }, 500);
                }, 5000)

                zocText.animate({ opacity: 1 }, 500);
                registerTimer(() => {
                    zocText.animate({ opacity: 0 }, 500);
                }, 5000)

                registerTimer(() => {
                    rotateGroup.animate({ opacity: 0 }, 500);
                }, 5000)

                return { discrete: g, percentage: g2 }
            }
        }


        let page4 = {
            label: 'fade in minor roads',
            pageInt: 4,
            delay: 0,
            duration: 6000,
            remove: true,
            async: true,
            fn: () => {
                let g2 = paper.g()
                let g = paper.g()
                showPageNumber(g, "4")
                sgLastPageGroup.value = g

                var image2 = g2.image(efs_minsk_map_minorRoads, 0, 0, 0, 0);
                image2.attr({
                    'xlink:href': efs_minsk_map_minorRoads,
                    'width': "100%",
                    'height': "100%",
                    'opacity': 0
                });

                let zocText = g.text(530, 194, "Minor road").attr({ ...textAttrs, textAnchor: "end" })

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


                registerTimer(() => {
                    image2.animate({ opacity: 1 }, 500);
                    backgroundImage.animate({ opacity: 0 }, 500);
                }, 500);
                registerTimer(() => {
                    image2.animate({ opacity: 0 }, 500);
                    backgroundImage.animate({ opacity: 1 }, 500);
                }, 5000)

                zocText.animate({ opacity: 1 }, 500);
                registerTimer(() => {
                    zocText.animate({ opacity: 0 }, 500);
                }, 5000)

                registerTimer(() => {
                    rotateGroup.animate({ opacity: 0 }, 500);
                }, 5000)

                return { discrete: g, percentage: g2 }
            }
        }


        let page5 = {
            label: 'fade in rails',
            pageInt: 5,
            delay: 0,
            duration: 6000,
            remove: true,
            async: true,
            fn: () => {
                let g2 = paper.g()
                let g = paper.g()
                showPageNumber(g, "5")
                sgLastPageGroup.value = g

                var image2 = g2.image(efs_minsk_map_rail, 0, 0, 0, 0);
                image2.attr({
                    'xlink:href': efs_minsk_map_rail,
                    'width': "100%",
                    'height': "100%",
                    'opacity': 0
                });

                let zocText = g.text(703, 234, "Railroad").attr({ ...textAttrs, textAnchor: "middle" })

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

                registerTimer(() => {
                    image2.animate({ opacity: 1 }, 500);
                    backgroundImage.animate({ opacity: 0 }, 500);
                }, 500);
                registerTimer(() => {
                    image2.animate({ opacity: 0 }, 500);
                    backgroundImage.animate({ opacity: 1 }, 500);
                }, 5000)

                zocText.animate({ opacity: 1 }, 500);
                registerTimer(() => {
                    zocText.animate({ opacity: 0 }, 500);
                }, 5000)

                registerTimer(() => {
                    rotateGroup.animate({ opacity: 0 }, 500);
                }, 5000)

                return { discrete: g, percentage: g2 }
            }
        }


        let page6 = {
            label: 'roads go through cities and towns',
            pageInt: 6,
            delay: 0,
            duration: 15000,
            remove: true,
            async: true,
            fn: () => {

                let g = paper.g()
                let g2 = paper.g()
                showPageNumber(g, "6")

                sgLastPageGroup.value = g

                let textBoxPosition = textBox(g,
                    `Although the roads and railroads are not printed inside,
                    the town and city graphics, it is assumed they still connect
                    to any other roads or railroads exiting the same hex.`,
                    489, 241, 500, 12500)

                // let whiteRect = g.rect(186, 173, 1525, 498).attr(textRectAttrs);
                // whiteRect.animate({ opacity: 1 }, 500);


                // let textX = 934
                // let textY = 244

                // let text1 = g.text(textX, textY, "Although the roads and railroads are not printed inside").attr(textAttrs)

                // let text2 = g.text(textX, textY + 60, "the town and city graphics, it is assumed they still connect").attr(textAttrs)

                // let text3 = g.text(textX, textY + 120, "to any other roads or railroads exiting the same hex.").attr(textAttrs)

                // text1.animate({ opacity: 1 }, 500);
                // registerTimer(() => {
                //     text2.animate({ opacity: 1 }, 500);
                // }, 100);
                // registerTimer(() => {
                //     text3.animate({ opacity: 1 }, 500);
                // }, 200);
                // registerTimer(() => {
                //     text1.animate({ opacity: 0 }, 500);
                //     text2.animate({ opacity: 0 }, 500);
                //     text3.animate({ opacity: 0 }, 500);
                //     whiteRect.animate({ opacity: 0 }, 500);
                // }, 12500)

                console.log('textBoxPosition:', textBoxPosition)
                let posX = textBoxPosition.x
                let posY = textBoxPosition.y2 + 20
                let townsBox = g.rect(posX, posY - 30, textBoxPosition.width, 233 + 80).attr(textRectAttrs);
                townsBox.attr({ fill: "#ffffdd" })

                let lfPadding = (textBoxPosition.width - (233 * 3)) / 4
                console.log('lfPadding:', lfPadding)
                var town = g.image(town_connect, posX + lfPadding, 410, 0, 0);
                town.attr({
                    'xlink:href': town_connect,
                    'width': "233",
                    'height': "233",
                    'opacity': 0
                });
                var town2 = g.image(town_connect2, posX + (2 * lfPadding) + 233, 410, 0, 0);
                town2.attr({
                    'xlink:href': town_connect2,
                    'width': "233",
                    'height': "233",
                    'opacity': 0
                });
                var town3 = g.image(town_connect3, posX + (3 * lfPadding) + 466, 410, 0, 0);
                town3.attr({
                    'xlink:href': town_connect3,
                    'width': "233",
                    'height': "233",
                    'opacity': 0
                });
                var townConnected = g.image(town_connected, posX + lfPadding, 410, 0, 0);
                townConnected.attr({
                    'xlink:href': town_connected,
                    'width': "233",
                    'height': "233",
                    'opacity': 0
                });
                var townConnected2 = g.image(town_connected2, posX + (2 * lfPadding) + 233, 410, 0, 0);
                townConnected2.attr({
                    'xlink:href': town_connected2,
                    'width': "233",
                    'height': "233",
                    'opacity': 0
                });
                var townConnected3 = g.image(town_connected3, posX + (3 * lfPadding) + 466, 410, 0, 0);
                townConnected3.attr({
                    'xlink:href': town_connected3,
                    'width': "233",
                    'height': "233",
                    'opacity': 0
                });
                registerTimer(() => {
                    townsBox.animate({ opacity: 1 }, 500);
                    town.animate({ opacity: 1 }, 500);
                    town2.animate({ opacity: 1 }, 500);
                    town3.animate({ opacity: 1 }, 500);
                }, 500)
                registerTimer(() => {
                    townConnected.animate({ opacity: 1 }, 500);
                    townConnected2.animate({ opacity: 1 }, 500);
                    townConnected3.animate({ opacity: 1 }, 500);
                    registerTimer(() => {
                        townConnected.animate({ opacity: 0 }, 500);
                        townConnected2.animate({ opacity: 0 }, 500);
                        townConnected3.animate({ opacity: 0 }, 500);
                        registerTimer(() => {
                            townConnected.animate({ opacity: 1 }, 500);
                            townConnected2.animate({ opacity: 1 }, 500);
                            townConnected3.animate({ opacity: 1 }, 500);
                            registerTimer(() => {
                                townConnected.animate({ opacity: 0 }, 500);
                                townConnected2.animate({ opacity: 0 }, 500);
                                townConnected3.animate({ opacity: 0 }, 500);
                                registerTimer(() => {
                                    townConnected.animate({ opacity: 1 }, 500);
                                    townConnected2.animate({ opacity: 1 }, 500);
                                    townConnected3.animate({ opacity: 1 }, 500);
                                    registerTimer(() => {
                                        townsBox.animate({ opacity: 0 }, 500);
                                        town.animate({ opacity: 0 }, 500);
                                        town2.animate({ opacity: 0 }, 500);
                                        town3.animate({ opacity: 0 }, 500);
                                        townConnected.animate({ opacity: 0 }, 500);
                                        townConnected2.animate({ opacity: 0 }, 500);
                                        townConnected3.animate({ opacity: 0 }, 500);
                                    }, 1500);
                                }, 2000);
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2500);

                return { discrete: g, percentage: null }
            }
        }

        let page7 = {
            label: 'Minsk',
            pageInt: 7,
            delay: 0,
            duration: 5500,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "7")

                textBox(g, "We will consider Minsk as the supply source for the Axis.", 199, 741, 500, 5000)

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

                registerTimer(() => {
                    supplyWhiteCircle.animate({ opacity: 1 }, 500);
                    blackHalfCircle.animate({ opacity: 1 }, 500);
                }, 3000);


                //g.transform(`s${300 / windowWidth}, ${300 / windowWidth}, 0, 0`)
                return { discrete: g, percentage: null }
            }
        }

        let page8 = {
            label: 'Dry weather',
            pageInt: 8,
            delay: 0,
            duration: 1000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "8")
                let weatherRect = g.rect(12, 11, 420, 66).attr({
                    fill: "#aadaff",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 0
                });


                let msText = g.text(120, 44, "Dry weather").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 50 * sgCrossBrowserFontSizeRatio.value, //* xxxsgUseTextSize.value 
                    "fontWeight": "normal",
                    "fontFamily": "sans-serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })
                //msText.animate({ opacity: 1 }, 500);

                // registerTimer(() => {
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
                sunGroup.attr({
                    opacity: 0
                })
                registerTimer(() => {
                    weatherRect.animate({ opacity: 1 }, 500);
                    sunGroup.animate({ opacity: 1 }, 500);
                    msText.animate({ opacity: 1 }, 500);
                }, 2500);

                sunRay.transform(`t 0, -15`)
                //sunRay2.transform(`r 45 t 0, -15`)
                //sunRay3.transform(`r 90 t 0, -15`)
                //sun.transform(`t `)



                sunGroup.transform(`t 55, 45 s 1, 1`)
                sgSunGroup.value = g.group(weatherRect, msText, sunGroup)

                //sun.transform(`t 55, 45 s 1, 1`)

                return { discrete: g, percentage: null }
            }
        }


        let page9 = {
            label: 'start with dry weather',
            pageInt: 9,
            delay: 0,
            duration: 8000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "9")

                textBox(g,
                    `The weather conditions affect the supply rules.
                    Lets start with Dry weather.`,
                    100, 365, 500, 7000)

                return { discrete: g, percentage: null }
            }
        }


        let page10 = {
            label: 'combat unit',
            pageInt: 10,
            delay: 0,
            duration: 6000,
            remove: false,
            async: true,
            fn: () => {
                let g2 = paper.g()
                let g = paper.g()

                showPageNumber(g, "10")

                textBox(g,
                    `Let's take this Axis combat
                    unit and put it in Minsk.`,
                    100, 435, 500, 5000)

                sgLastPageGroup.value = g

                sgAxisCombatUnit.value = g.image(german_infantry_unit, 613, 410, 0, 0);
                sgAxisCombatUnit.value.attr({
                    'xlink:href': german_infantry_unit,
                    'width': "120",
                    'height': "120",
                    'opacity': 1
                });

                registerTimer(() => {
                    //  combat_unit.animate({ width: 35, height: 35, transform: 't 44, 44 ' }, 500);
                    sgAxisCombatUnit.value.animate({ width: 64, height: 64, transform: 't -598, 370 ' }, 500, mina.easeout);
                }, 2500);

                return { discrete: g, percentage: g2 }
            }
        }


        let page11 = {
            label: 'supply in Minsk',
            pageInt: 11,
            delay: 0,
            duration: 10000,
            remove: false,
            async: true,
            fn: () => {
                let g2 = paper.g()
                let g = paper.g()
                showPageNumber(g, "11")

                let textBoxPosition = textBox(g,
                    `In the General Supply Status phase, supply is determined for each
                    combat unit on the board. Since Minsk is a Axis supply source,
                    General Supply will be traced from Minsk out to units on the map.`,
                    300, 270, 500, 9500)

                return { discrete: g, percentage: g2 }
            }
        }

        let page12 = {
            label: 'supply in Minsk',
            pageInt: 12,
            delay: 0,
            duration: 8000,
            remove: false,
            async: true,
            fn: () => {
                let g2 = paper.g()
                let g = paper.g()
                showPageNumber(g, "12")

                let textBoxPosition = textBox(g,
                    `So let's say it's the Supply Status phase. Check supply
                    for that (one) unit on the map. It is of course in supply
                    because it is sitting directly on a supply source.`,
                    440, 270, 500, 7500)

                return { discrete: g, percentage: g2 }
            }
        }

        let page13 = {
            label: 'check supply',
            pageInt: 13,
            delay: 0,
            duration: 6000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "13")
                let posX = 560
                let posY = 300
                let textBoxPosition = textBox(g,
                    `Let's move that unit over here...   `,
                    posX, posY, 500, 5500)

                sgLastPageGroup.value = g
                registerTimer(() => {
                    sgAxisCombatUnit.value.animate({ transform: 't -197, 371' }, 500, mina.easeinout);
                }, 2500);


                return { discrete: g, percentage: null }
            }
        }

        let page14 = {
            label: 'is it now in supply',
            pageInt: 14,
            delay: 0,
            duration: 6000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "14")
                let posX = 560
                let posY = 300
                let textBoxPosition = textBox(g,
                    `Will that unit be in general supply?`,
                    posX, posY, 500, 5500)

                return { discrete: g, percentage: null }
            }
        }

        let page15 = {
            label: 'LOC',
            pageInt: 15,
            delay: 0,
            duration: 14800,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "15")
                let posX = 464
                let posY = 323
                let textBoxPosition = textBox(g,
                    `A Line of Communications (LOC) in Dry Weather
                    is usually 7 hexes. So let's count the hexes...
                    The distance is 6 hexes, so the unit is in supply.`,
                    posX, posY, 1500, 10000)


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
                        "fontSize": 50 * sgCrossBrowserFontSizeRatio.value,
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

                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 500);
                        }, i * 500);
                    }
                }, 3500);

                registerTimer(() => {
                    for (let i = numbersGroups.length; i > 0; i--) {
                        let numGroup = numbersGroups[numbersGroups.length - i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 80);
                        }, i * 80);
                    }
                }, 14000);

                return { discrete: g, percentage: null }
            }
        }

        let page16 = {
            label: 'Road',
            pageInt: 16,
            delay: 0,
            duration: 12000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "16")
                let posX = 222
                let posY = 276

                let textBoxPosition = textBox(g,
                    `A Motorway or Road (not minor road) hex that is connected to a supply source can extend
                    the supply source along the road, up to 21 hexes in dry weather. Friendly units can trace
                    a LOC to such a road hex that's connected to a supply source to get its general supply.
                    However, enemy unit(s) or enemy zocs on the road blocks the tracing of supply at that hex.`,
                    posX, posY, 500, 11500)

                return { discrete: g, percentage: null }
            }
        }

        let page17 = {
            label: 'supply to Road',
            pageInt: 17,
            delay: 1000,
            duration: 10000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "17")
                let posX = 560
                let posY = 606
                let textBoxPosition = textBox(g,
                    `So let's show the road hexes that are extending the supply source (Minsk).
                    For now we will ignore the railroad (pretend its not there, or it hasn't
                    been converted past Minsk yet.)`,
                    posX, posY, 500, 9500)

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
                    let adjustX = (i < 9) ? 11 : 23;
                    adjustX = (i === 10) ? 22 : adjustX;
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

                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
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
                        opacity: 0.8
                    })


                    let adjustX = (i < 6) ? 11 : 23;
                    adjustX = (i === 10) ? 22 : adjustX;
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

                registerTimer(() => {
                    for (let i = 0; i < numbersGroups2.length; i++) {
                        let numGroup = numbersGroups2[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 70);
                        }, i * 70);
                    }
                }, 6000);




                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        numGroup.animate({ opacity: 0 }, 70);

                    }
                    for (let i = 0; i < numbersGroups2.length; i++) {
                        let numGroup = numbersGroups2[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 70);
                        }, i * 70);
                    }
                }, 16000);

                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        numGroup.remove()

                    }
                    for (let i = 0; i < numbersGroups2.length; i++) {
                        let numGroup = numbersGroups2[i];
                        numGroup.remove()

                    }
                }, 17000);







                return { discrete: g, percentage: null }
            }
        }


        let page18 = {
            label: 'unit supply to Road',
            pageInt: 18,
            delay: 0,
            duration: 6000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "18")
                let posX = 400
                let posY = 500
                let textBoxPosition = textBox(g,
                    `So if we re-consider how that Axis unit gets supply, we see that it can get
                    General Supply from a closer source - the motorway that is near it.`,
                    posX, posY, 500, 5500)

                return { discrete: g, percentage: null }
            }
        }


        let page19 = {
            label: 'LOC',
            pageInt: 19,
            delay: 0,
            duration: 12000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "19")
                let posX = 464
                let posY = 323
                let textBoxPosition = textBox(g,
                    `By tracing to the road that is connected to a supply source,
                    the unit has successfully reached General Supply.`,
                    posX, posY, 1200, 11500)



                let numberPositions = []
                numberPositions.push({ x: 380, y: 774 }); // 1
                numberPositions.push({ x: 314, y: 735 }); // 2
                numberPositions.push({ x: 314, y: 658 }); // 3
                let numbersGroups = []
                for (let i = 0; i < numberPositions.length; i++) {
                    console.log('i:', i)
                    let circleN = g.circle(numberPositions[i].x, numberPositions[i].y, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 1
                    })
                    let msTextN = g.text(numberPositions[i].x - 11, numberPositions[i].y, i + 1).attr({
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
                }

                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 500);
                        }, i * 500);
                    }
                }, 1500);

                registerTimer(() => {
                    for (let i = numbersGroups.length; i > 0; i--) {
                        let numGroup = numbersGroups[numbersGroups.length - i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 80);
                        }, i * 80);
                    }
                }, 11000);

                return { discrete: g, percentage: null }
            }
        }


        let page20 = {
            label: 'Railroads',
            pageInt: 20,
            delay: 0,
            duration: 18000,
            remove: true,
            async: true,
            fn: () => {
                let posX = 194
                let posY = 255
                let g = paper.g()
                showPageNumber(g, "20")
                let textBoxPosition = textBox(g,
                    `Railroads can extend a supply source with no set limit on number of hexes, however the route
                    traced can only travel along railroads that have been converted (for Axis) or not converted
                    (for Soviet) use. Enemy units, unblocked enemy zocs and rail breaks stop the tracing of
                    supply at that rail hex.`,
                    posX, posY, 500, 16000)


                let g2 = paper.g()
                var imageRailGlow = g2.image(efs_minsk_map_rail_glow, 0, 0, 0, 0);
                imageRailGlow.attr({
                    'xlink:href': efs_minsk_map_rail_glow,
                    'width': "100%",
                    'height': "100%",
                    'opacity': 0
                });

                var backgroundImage2 = g2.image(efs_minsk_map, 0, 0, 0, 0);
                backgroundImage2.attr({
                    'xlink:href': efs_minsk_map,
                    'width': '100%',
                    'height': '100%',
                    'opacity': 0
                });

                registerTimer(() => {
                    imageRailGlow.animate({ opacity: 1 }, 100);
                    backgroundImage2.animate({ opacity: 0.2 }, 100);
                }, 15500)


                // registerTimer(() => {
                //     backgroundImage2.animate({ opacity: 1 }, 1);
                // }, 16500)
                registerTimer(() => {
                    imageRailGlow.animate({ opacity: 0 }, 1000);
                }, 16500);
                registerTimer(() => {
                    imageRailGlow.remove();
                    backgroundImage2.remove();
                }, 17500);




                return { discrete: g, percentage: null }
            }
        }

        let page21 = {
            label: 'rail end',
            pageInt: 21,
            delay: 0,
            duration: 4500,
            remove: false,
            async: true,
            fn: () => {

                let g = paper.g()
                showPageNumber(g, "21")
                let railEndGroup = paper.g()




                let posX = 815
                let posY = 450
                textBox(g,
                    `Let's put this rail end marker over here...`,
                    posX, posY, 500, 4000)

                sgAxisRailEndUnit.value = g.image(german_rail_end, 613, 410, 0, 0);
                sgAxisRailEndUnit.value.attr({
                    'xlink:href': german_rail_end,
                    'width': "120",
                    'height': "120",
                    'opacity': 1
                });

                registerTimer(() => {
                    sgAxisRailEndUnit.value.animate({ width: 64, height: 64, transform: 't 705, -235 r 58' }, 500, mina.easeout);
                }, 2500);


                return { discrete: g, percentage: null }
            }
        }


        let page22 = {
            label: 'move Axis unit again for railroad supply',
            pageInt: 22,
            delay: 0,
            duration: 6000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "22")
                let posX = 380
                let posY = 350
                textBox(g,
                    `Let's put that Axis unit over here...`,
                    posX, posY, 500, 5500)

                sgLastPageGroup.value = g
                registerTimer(() => {
                    if (sgAxisCombatUnit.value) {
                        sgAxisCombatUnit.value.animate({ transform: 't 943, 102' }, 500, mina.easeout);
                    }
                }, 2500);

                return { discrete: g, percentage: null }
            }
        }

        let page23 = {
            label: 'introduce soviet cavalry division',
            pageInt: 23,
            delay: 0,
            duration: 6000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "23")
                let sovietCavGroup = paper.g()

                let posX = 760
                let posY = 370
                textBox(g,
                    `And here comes a sneaky Soviet cavalry division.`,
                    posX, posY, 500, 5500)

                sgSovietCombatUnit.value = g.image(soviet_cavalry_unit, 951, -64, 0, 0);
                sgSovietCombatUnit.value.attr({
                    'xlink:href': soviet_cavalry_unit,
                    'width': "64",
                    'height': "64",
                    'opacity': 1
                });

                registerTimer(() => {
                    sgSovietCombatUnit.value.animate({ width: 64, height: 64, transform: 't 0, 74 ' }, 500, mina.easeout);
                    registerTimer(() => {
                        sgSovietCombatUnit.value.animate({ width: 64, height: 64, transform: 't 0, 150 ' }, 500, mina.easeout);
                        registerTimer(() => {
                            sgSovietCombatUnit.value.animate({ width: 64, height: 64, transform: 't 0, 228 ' }, 500, mina.easeout);
                        }, 500);
                    }, 500);

                }, 2500);


                return { discrete: g, percentage: null }
            }
        }


        let page24 = {
            label: 'show zoc of cavalry division',
            pageInt: 24,
            delay: 0,
            duration: 12000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "24")
                let posX = 560
                let posY = 400
                textBox(g,
                    `The Zone of Control (ZOC) from the Soviet cavalry unit
                    extends to the Motorway hex, blocking road supply.`,
                    posX, posY, 500, 11500)

                let angleMult = 60
                let zocPaths = ``
                for (let i = 0; i < 7; i++) {
                    let x = Math.cos(i * angleMult * Math.PI / 180) * 46
                    let y = Math.sin(i * angleMult * Math.PI / 180) * 46
                    if (i === 0) {
                        zocPaths += `M ${x} ${y} `
                    }
                    else {
                        zocPaths += ` L ${x} ${y} `
                    }
                };
                zocPaths += ` Z `
                console.log('zocPaths:', zocPaths)
                let zocPath = g.path(zocPaths).attr({
                    fill: "none",
                    stroke: "black",
                    strokeWidth: 1,
                    opacity: 0.5
                });
                zocPath.transform(`t 984, 196`);
                zocPath.animate({ opacity: 1 }, 500);
                let gHexes = paper.g()
                for (let i = 0; i < 6; i++) {
                    registerTimer(() => {
                        let x = Math.sin((i * (angleMult)) * Math.PI / 180) * 78
                        let y = Math.cos((i * (angleMult)) * Math.PI / 180) * 78
                        let zocClone = zocPath.clone(true);

                        zocClone.transform(`t ${984 + x}, ${196 + y}`);
                        zocClone.attr({
                            fill: "yellow",
                            stroke: "black",
                            strokeWidth: 1,
                            opacity: 0.5
                        })


                        let msText = g.text(-25, 0, "ZOC").attr({
                            "textAnchor": "center",
                            "dominant-baseline": "central",
                            "fontSize": 25,
                            "fontWeight": "bold",
                            "fontFamily": "serif",
                            stroke: "none",
                            fill: "black",
                            opacity: 1,
                        })
                        msText.transform(`t ${984 + x}, ${196 + y}`, 500);



                    }, i * 50);
                }


                let blockedHexside = g.path('M 0 0 L 23 43').attr({
                    stroke: "black",
                    strokeWidth: 9,
                    opacity: 0
                });
                blockedHexside.transform('t 939, 270');
                registerTimer(() => {
                    blockedHexside.animate({ opacity: 1 }, 500, mina.easeInOut);
                    registerTimer(() => {
                        blockedHexside.animate({ opacity: 0 }, 500, mina.easeInOut);
                        registerTimer(() => {
                            blockedHexside.animate({ opacity: 1 }, 500, mina.easeInOut);
                            registerTimer(() => {
                                blockedHexside.animate({ opacity: 0 }, 500, mina.easeInOut);
                                registerTimer(() => {
                                    blockedHexside.animate({ opacity: 1 }, 500, mina.easeInOut);
                                }, 500);
                            }, 1000);
                        }, 500);
                    }, 1000);
                }, 4000);

                // zocPath.animate({ opacity: 0 }, 100);

                registerTimer(() => {
                    zocPath.animate({ opacity: 0 }, 500)
                }, 22000)

                registerTimer(() => {
                    g.remove()
                }, 23000);

                return { discrete: g, percentage: null }
            }
        }



        let page25 = {
            label: 'show path of supply to rr',
            pageInt: 25,
            delay: 0,
            duration: 12000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "25")
                let posX = 240
                let posY = 500
                textBox(g,
                    `The unit now can't use the motorway here for supply,
                    but it can get supply via the railroad. Note that the hex
                    the rail cut marker is in is not a supply source.`,
                    posX, posY, 500, 11500)

                let numberPositions = []
                let xM = 67
                let yM5 = 39
                numberPositions.push({ x: 1521, y: 505 }); // 1
                numberPositions.push({ x: 1454, y: 466 }); // 2
                numberPositions.push({ x: 1386, y: 428 }); // 3
                numberPositions.push({ x: 1386, y: 428 - (yM5 * 2) }); // 4
                numberPositions.push({ x: 1386, y: 390 - (yM5 * 3) }); // 5
                numberPositions.push({ x: 1320, y: 236 }); // 6

                let numbersGroups = []
                for (let i = 0; i < numberPositions.length; i++) {
                    let numX = numberPositions[i].x
                    let numMY = numberPositions[i].y
                    let circleN = g.circle(numX, numMY, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 1
                    })
                    let msTextN = g.text(numX - 11, numMY, i + 1).attr({
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

                }

                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 500);
                        }, i * 500);
                    }
                }, 6000);

                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 50);
                        }, i * 50);
                    }
                }, 10000);
                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        numGroup.remove()
                    }
                }, 11000);

                return { discrete: g, percentage: null }
            }
        }

        let page26 = {
            label: 'move in two soviet units to block supply',
            pageInt: 26,
            delay: 1000,
            duration: 16500,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "26")
                let posX = 80
                let posY = 448
                textBox(g,
                    `Let's move some more Soviets onto the map to cause some trouble.`,
                    posX, posY, 500, 4500)



                posX = 550
                posY = 600
                textBox(g,
                    `And here are their ZOCs...
                    There is a path for supply, but it goes through a marsh hex.`,
                    posX, posY, 5500, 12500)

                sgSovietMdnoUnit.value = g.image(soviet_mdno_unit, 1622, -62, 0, 0);
                sgSovietMdnoUnit.value.attr({
                    'xlink:href': soviet_mdno_unit,
                    'width': "62",
                    'height': "62",
                    'opacity': 1
                });

                registerTimer(() => {
                    sgSovietMdnoUnit.value.animate({ width: 64, height: 64, transform: 't 0, 458' }, 500, mina.easeout);
                }, 2500);

                sgSovietInfantryUnit.value = g.image(soviet_infantry_unit, 1352, -62, 0, 0);
                sgSovietInfantryUnit.value.attr({
                    'xlink:href': soviet_infantry_unit,
                    'width': "62",
                    'height': "62",
                    'opacity': 1
                });

                registerTimer(() => {
                    sgSovietInfantryUnit.value.animate({ width: 64, height: 64, transform: 't 0, 458' }, 500, mina.easeout);
                }, 2500)


                let hexPath = g.path('M 1498 389 L 1543 389 L 1564 428 L 1543 465 L 1498 465 L 1476 428 Z').attr({
                    fill: "none",
                    stroke: "red",
                    strokeWidth: 5,
                    opacity: 0
                })

                registerTimer(() => {
                    hexPath.animate({ opacity: 1 }, 500);
                    registerTimer(() => {
                        hexPath.animate({ opacity: 0 }, 500);
                        registerTimer(() => {
                            hexPath.animate({ opacity: 1 }, 500);
                            registerTimer(() => {
                                hexPath.animate({ opacity: 0 }, 500);
                                registerTimer(() => {
                                    hexPath.animate({ opacity: 1 }, 500);
                                    registerTimer(() => {
                                        hexPath.animate({ opacity: 0 }, 500);
                                        registerTimer(() => {
                                            hexPath.remove()
                                        }, 500);
                                    }, 1500);
                                }, 500);
                            }, 500);
                        }, 500);
                    }, 500);
                }, 12000);

                registerTimer(() => {
                    let z1 = displayZocs(g, 1386, 428)
                    let z2 = displayZocs(g, 1654, 428)
                    registerTimer(() => {
                        z1.remove()
                        z2.remove()
                    }, 9300);
                }, 6500);

                return { discrete: g, percentage: null }
            }
        }

        let page27 = {
            label: 'marsh with no road cuts LOC to 5',
            pageInt: 27,
            delay: 600,
            duration: 42000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "27")
                let posX = 110
                let posY = 300

                textBox(g,
                    `Beware - if the LOC you trace goes through a Marsh hex, the
                    maximum LOS length is reduced to 5 hexes, unless you are
                    tracing along a road (minor roads or railroads don't count).`,
                    posX, posY, 500, 9500)

                let numberPositions = []
                let xM = 67
                let yM5 = 39
                numberPositions.push({ x: 1521, y: 505 }); // 1
                numberPositions.push({ x: 1521, y: 428 }); // 2
                numberPositions.push({ x: 1521, y: 428 - (yM5 * 2) }); // 3
                numberPositions.push({ x: 1454, y: 428 - (yM5 * 3) }); // 4
                numberPositions.push({ x: 1386, y: 390 - (yM5 * 3) }); // 5


                let numbersGroups = []
                for (let i = 0; i < numberPositions.length; i++) {
                    let numX = numberPositions[i].x
                    let numMY = numberPositions[i].y
                    let circleN = g.circle(numX, numMY, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 1
                    })
                    let msTextN = g.text(numX - 11, numMY, i + 1).attr({
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

                }

                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            let opa = i === 1 ? 0.3 : 1
                            numGroup.animate({ opacity: opa }, 500);
                        }, i * 500);
                    }
                }, 10000);

                registerTimer(() => {
                    for (let i = numbersGroups.length - 1; i >= 0; i--) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 500);
                        }, i * 50);
                    }
                }, 17000);


                posX = 150
                posY = 350
                textBox(g,
                    `The Axis unit cannot reach General Supply in 5
                    hexes. Place an Emergency Supply marker on it.`,
                    posX, posY, 13500, 18500)



                sgEmergencySupplyMarker.value = g.image(emergencySupply, 1013, 333, 0, 0);
                sgEmergencySupplyMarker.value.attr({
                    'xlink:href': emergencySupply,
                    'width': "120",
                    'height': "120",
                    'opacity': 0
                });

                registerTimer(() => {
                    sgEmergencySupplyMarker.value.animate({ opacity: 1 }, 500);
                }, 16000);

                registerTimer(() => {
                    sgEmergencySupplyMarker.value.animate({ width: 64, height: 64, transform: 't 540, 176' }, 500, mina.easeout);
                }, 18500);



                posX = 150
                posY = 360
                textBox(g,
                    `Being in Emergency Supply does not cause any issues.
                    However, if the unit already has an Emergency Supply
                    marker on it, it instead gets an Out Of Supply marker.`,
                    posX, posY, 20500, 26500)


                let outOfSupplyMarker = g.image(outOfSupply, 1132, 364, 0, 0);
                outOfSupplyMarker.attr({
                    'xlink:href': outOfSupply,
                    'width': "120",
                    'height': "120",
                    'opacity': 0
                });

                registerTimer(() => {
                    outOfSupplyMarker.animate({ opacity: 1 }, 500);
                }, 24000);

                registerTimer(() => {
                    outOfSupplyMarker.animate({ width: 64, height: 64, transform: 't 422, 145' }, 500, mina.easeout);
                }, 26500);
                registerTimer(() => {
                    sgEmergencySupplyMarker.value.animate({ transform: 't 540, -1140', opacity: 0 }, 300);
                }, 26500);


                posX = 220
                posY = 300
                textBox(g,
                    `If a unit is previously marked Out of Supply or Emergency Supply,
                    and in a General Supply phase is deemed to be back in supply,
                    then remove the markers, even if it's the Out of Supply marker.`,
                    posX, posY, 29000, 40000)

                registerTimer(() => {
                    outOfSupplyMarker.animate({ transform: 't 422, -1141', opacity: 0 }, 300);
                }, 40500);




                registerTimer(() => {
                    sgSovietMdnoUnit.value.animate({ opacity: 0 }, 500);
                    sgSovietInfantryUnit.value.animate({ opacity: 0 }, 500);
                    sgEmergencySupplyMarker.value.animate({ opacity: 0 }, 500);
                    outOfSupplyMarker.animate({ opacity: 0 }, 500);
                    sgAxisRailEndUnit.value.animate({ opacity: 0 }, 500);
                    sgSovietCombatUnit.value.animate({ opacity: 0 }, 500);
                    if (sgAxisCombatUnit.value) {
                        sgAxisCombatUnit.value.animate({ opacity: 0 }, 500);
                    }
                }, 41000);

                registerTimer(() => {
                    sgSovietMdnoUnit.value.remove()
                    sgSovietMdnoUnit.value = null;
                    sgSovietInfantryUnit.value.remove()
                    sgSovietInfantryUnit.value = null;
                    sgEmergencySupplyMarker.value.remove()
                    sgEmergencySupplyMarker.value = null;
                    outOfSupplyMarker.remove()
                    sgAxisRailEndUnit.value.remove()
                    sgAxisRailEndUnit.value = null;
                    sgSovietCombatUnit.value.remove()
                    sgSovietCombatUnit.value = null;
                    if (sgAxisCombatUnit.value) {
                        sgAxisCombatUnit.value.remove()
                        sgAxisCombatUnit.value = null;
                    }
                }, 41500);


                return { discrete: g, percentage: null }
            }
        }

        let page28 = {
            label: 'swamp is worse',
            pageInt: 28,
            delay: 0,
            duration: 12000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "28")
                let posX = 160
                let posY = 330

                textBox(g,
                    `Swamp is very restrictive - during Dry or Mud weather a LOC is
                    reduced to 5 hexes and also can only be used if it follows, and stays,
                    on the road or railroad that reaches the hex providing supply.`,
                    posX, posY, 500, 11500, 0, 70, 250)

                let swamp_Hex = g.image(swampHex, posX, posY + 3, 225, 190);
                swamp_Hex.attr({
                    'opacity': 0
                });

                registerTimer(() => {
                    swamp_Hex.animate({ opacity: 1 }, 500);
                }, 500);
                registerTimer(() => {
                    swamp_Hex.animate({ opacity: 0 }, 500);
                }, 11000);
                registerTimer(() => {
                    swamp_Hex.remove()
                }, 11500);
                return { discrete: g, percentage: null }
            }
        }


        let page29 = {
            label: 'Mud weather',
            pageInt: 8,
            delay: 0,
            duration: 1000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "30")
                let weatherRect = g.rect(12, 11, 395, 66).attr({
                    fill: "#70543E",
                    strokeWidth: 1,
                    stroke: "black",
                    opacity: 0
                });


                let msText = g.text(102, 44, "Mud weather").attr({
                    "textAnchor": "left",
                    "dominant-baseline": "central",
                    "fontSize": 50,
                    "fontWeight": "normal",
                    "fontFamily": "sans-serif",
                    stroke: "none",
                    fill: "white",
                    opacity: 0,
                })

                let mudEllipse = g.ellipse(55, 35, 15, 11).attr({
                    fill: "#A0A0A0",
                    stroke: "none",
                    strokeWidth: 0,
                    opacity: 0.4
                })
                let mudEllipse2 = g.ellipse(75, 64, 19, 9).attr({
                    fill: "#A0A0A0",
                    stroke: "none",
                    strokeWidth: 0,
                    opacity: 0.3
                })
                let mudEllipse3 = g.ellipse(47, 53, 15, 9).attr({
                    fill: "#A0A0A0",
                    stroke: "none",
                    strokeWidth: 0,
                    opacity: 0.3
                })
                let mudGroup = g.group(mudEllipse, mudEllipse2, mudEllipse3)
                mudGroup.attr({
                    opacity: 0
                })

                sgSunGroup.value.animate({ opacity: 0 }, 500);


                registerTimer(() => {
                    weatherRect.animate({ opacity: 1 }, 500);
                    msText.animate({ opacity: 1 }, 500);
                    mudGroup.animate({ opacity: 1 }, 500);
                    sgSunGroup.value.remove()
                    sgSunGroup.value = null;
                }, 500);

                return { discrete: g, percentage: null }
            }
        }


        let page30 = {
            label: 'Mud weather details',
            pageInt: 30,
            delay: 0,
            duration: 9000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "30")
                let posX = 338
                let posY = 329
                let textXpos = posX + 20
                let textYpos = posY + 50


                textBox(g,
                    `During Mud weather, the LOC path is reduced to 5 hexes,
                    motorway and (not minor) roads are reduced to 15 hexes, but
                    railroad supply rules remain the same as with Dry weather.`,
                    textXpos, textYpos, 500, 8500)

                return { discrete: g, percentage: null }
            }
        }

        let page30b = {
            label: 'place a rail break',
            pageInt: 30,
            delay: 0,
            duration: 9000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "30b")

                let posX = 421
                let posY = 580
                let boxWidth = 1170
                let windowWidth = window.innerWidth;
                let textRect = g.rect(posX - 35, posY, boxWidth, 150).attr(textRectAttrs);
                // whiteRect.animate({ opacity: 1 }, 500);

                let textXpos = posX + 20
                let textYpos = posY + 50


                textBox(g,
                    `Since the next couple of examples will trace to the road,
                    network, lets say the Soviets broke the rail line here.`,
                    textXpos, textYpos, 500, 8500)

                sgSovietRailBreak.value = g.image(sovietRailBreak, 282, -62, 0, 0);
                sgSovietRailBreak.value.attr({
                    'xlink:href': sovietRailBreak,
                    'width': "62",
                    'height': "62",
                    'opacity': 1
                });

                registerTimer(() => {
                    sgSovietRailBreak.value.animate({ width: 64, height: 64, transform: 't 0, 688' }, 500, mina.easeout);
                }, 2500)

                return { discrete: g, percentage: null }
            }
        }



        let page31 = {
            label: 'Show mud weather road hexes',
            pageInt: 31,
            delay: 0,
            duration: 9000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "31")



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

                for (let i = 0; i < numberCoords.length; i++) {

                    let circleN = g.circle(numberCoords[i].x, numberCoords[i].y, 30).attr({
                        fill: "#70543E",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 0.8
                    })
                    let adjustX = (i < 9) ? 11 : 23;
                    adjustX = (i === 10) ? 22 : adjustX;
                    let msTextN = g.text(numberCoords[i].x - adjustX, numberCoords[i].y - 2, i + 1).attr({
                        "textAnchor": "center",
                        "dominant-baseline": "central",
                        "fontSize": 45,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "none",
                        fill: "white",
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
                sgMudRoadIndicators.value = numbersGroups

                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
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
                        fill: "#70543E",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 0.8
                    })
                    let adjustX = (i + 3 < 9) ? 11 : 22;
                    let msTextN = g.text(numberCoords2[i].x - adjustX, numberCoords2[i].y - 2, i + 4).attr({
                        "textAnchor": "center",
                        "dominant-baseline": "central",
                        "fontSize": 45,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "none",
                        fill: "white",
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
                sgMudRoadIndicators.value = sgMudRoadIndicators.value.concat(numbersGroups2)

                registerTimer(() => {
                    for (let i = 0; i < numbersGroups2.length; i++) {
                        let numGroup = numbersGroups2[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 70);
                        }, i * 70);
                    }
                }, 5000);


                let posX = 550
                let posY = 590
                let textXpos = posX + 20
                let textYpos = posY + 70


                textBox(g,
                    `Now the rail supply ends at the hex marked '5' on the motorway,
                    but supply still flows on the motorway, up to the hex marked '15'.`,
                    textXpos, textYpos, 500, 10000)


                return { discrete: g, percentage: null }
            }
        }






        let page32 = {
            label: 'soviet armor division',
            pageInt: 32,
            delay: 0,
            duration: 6000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "32")

                let posX = 1038
                let posY = 329
                let textXpos = posX + 15
                let textYpos = posY + 50

                textBox(g,
                    `Let's bring in a Soviet armor division.`,
                    textXpos, textYpos, 500, 5500)

                sgSovietArmorUnit.value = g.image(soviet_armor_unit, 751, -62, 0, 0);
                sgSovietArmorUnit.value.attr({
                    'xlink:href': soviet_armor_unit,
                    'width': "62",
                    'height': "62",
                    'opacity': 1
                });

                registerTimer(() => {
                    sgSovietArmorUnit.value.animate({ width: 64, height: 64, transform: 't 0, 342' }, 500, mina.easeout);
                }, 2500)

                return { discrete: g, percentage: null }
            }
        }




        let page33 = {
            label: 'mud and red orange box units zocs',
            pageInt: 33,
            delay: 0,
            duration: 15000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "33")

                let posX = 130
                let posY = 426

                let textXpos = posX + 15
                let textYpos = posY + 50

                let bbox = textBox(g,
                    `During Mud conditions, the ZOCs of units with Red boxed and Orange movement
                    points do not extend into adjacent hexes, unless the unit's ZOC enters a town or city,
                    or its ZOC enters the adjacent hex along motorway/road/minor road/railroad.`,
                    textXpos, textYpos, 500, 0, 0, 155)


                let boxWidth = bbox.width
                let spacing = boxWidth / 4

                let msRedBoxText = g.text(textXpos + spacing + 175, textYpos + 242, "Red Box MP").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 36,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })



                let leftArrow3 = g.text(textXpos + spacing + 120, textYpos + 241, "↼").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 56,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "black",
                    fill: "black",
                    opacity: 0,
                })

                let leftArrow4 = g.text(textXpos + spacing + 120, textYpos + 244, "↽").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 56,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })



                posX = textXpos + spacing
                let displayRedBox = g.image(soviet_armor_unit, posX, posY + 200, 0, 0);
                displayRedBox.attr({
                    'xlink:href': soviet_armor_unit,
                    'width': "120",
                    'height': "120",
                    'opacity': 0
                });

                posX += spacing + 120
                let displayOrangeMP = g.image(german_antiair_unit, posX, posY + 200, 0, 0);
                displayOrangeMP.attr({
                    'xlink:href': german_antiair_unit,
                    'width': "120",
                    'height': "120",
                    'opacity': 0
                });

                let leftArrow = g.text(posX + 120, textYpos + 241, "↼").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 56,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let leftArrow2 = g.text(posX + 120, textYpos + 244, "↽").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 56,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                let msOrangeMPText = g.text(posX + 120 + 54, textYpos + 242, "Orange MP").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 36,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 0,
                })

                registerTimer(() => {
                    displayRedBox.animate({ opacity: 1 }, 500);
                    displayOrangeMP.animate({ opacity: 1 }, 500);
                    msRedBoxText.animate({ opacity: 1 }, 500);
                    msOrangeMPText.animate({ opacity: 1 }, 500);
                    leftArrow.animate({ opacity: 1 }, 500);
                    leftArrow2.animate({ opacity: 1 }, 500);
                    leftArrow3.animate({ opacity: 1 }, 500);
                    leftArrow4.animate({ opacity: 1 }, 500);
                }, 1000);

                return { discrete: g, percentage: null }
            }
        }


        let page34 = {
            label: 'explain lack of ZOC',
            pageInt: 34,
            delay: 0,
            duration: 12000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "34")

                let posX = 930
                let posY = 24
                let boxWidth = 990
                let windowWidth = window.innerWidth;
                let textRect = g.rect(posX - 35, posY, boxWidth, 298).attr(textRectAttrs);

                let textXpos = posX + 15
                let textYpos = posY + 50

                textBox(g,
                    `Since it is Mud weather, that Soviet armor unit
                    does not exert any ZOCs. It is not on any road,
                    and there is no adjacent town or city hex.`,
                    textXpos - 50, textYpos - 20, 500, 5000)

                textBox(g,
                    `The road hexes at distances 13, 14, and 15 are
                        still valid Axis General Supply sources.`,
                    textXpos, textYpos + 110, 5000, 11500)



                let numbersGroups2 = []
                let numCoords = [{ x: 693, y: 351 }, { x: 760, y: 384 }, { x: 827, y: 351 }]
                for (let i = 0; i < numCoords.length; i++) {
                    let msTextN = g.text(numCoords[i].x, numCoords[i].y, i + 13).attr({
                        "textAnchor": "center",
                        "dominant-baseline": "central",
                        "fontSize": 45,
                        "fontWeight": "bold",
                        "fontFamily": "serif",
                        stroke: "yellow",
                        "strokeWidth": 1,
                        fill: "yellow",
                        opacity: 1,
                    })

                    let circleAndNumber2 = g.group(msTextN)
                    circleAndNumber2.attr({
                        opacity: 0
                    })
                    numbersGroups2.push(circleAndNumber2)

                }

                registerTimer(() => {
                    for (let i = 0; i < numbersGroups2.length; i++) {
                        let numGroup = numbersGroups2[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 300);
                        }, i * 300);
                    }
                }, 5000);

                registerTimer(() => {
                    for (let i = 0; i < numbersGroups2.length; i++) {
                        let numGroup = numbersGroups2[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 300);
                        }, i * 300);
                    }
                }, 11500);

                return { discrete: g, percentage: null }
            }
        }

        let page35 = {
            label: 'place German unit for 5 LOC length',
            pageInt: 35,
            delay: 0,
            duration: 13000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "35")

                let textXpos = 1000
                let textYpos = 488

                textBox(g,
                    `Since it is Mud weather, that Soviet armor unit
                    does not exert any ZOCs. It is not on any road,
                    and there is no adjacent town or city hex.`,
                    textXpos - 50, textYpos - 50, 500, 8000)

                textBox(g,
                    `Let's put an Axis unit here.`,
                    textXpos + 350, textYpos - 160, 7000, 12000)



                sgAxisCombatUnit.value = g.image(german_infantry_unit, 1220, -64, 0, 0);
                sgAxisCombatUnit.value.attr({
                    'xlink:href': german_infantry_unit,
                    'width': "64",
                    'height': "64",
                    'opacity': 1
                });

                registerTimer(() => {
                    //  combat_unit.animate({ width: 35, height: 35, transform: 't 44, 44 ' }, 500);
                    sgAxisCombatUnit.value.animate({ transform: 't 0, 382 ' }, 500, mina.easeout);
                }, 9500);

                return { discrete: g, percentage: null }
            }
        }

        let page36 = {
            label: 'failed LOC',
            pageInt: 36,
            delay: 0,
            duration: 15000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "36")
                let posX = 674
                let posY = 443

                textBox(g,
                    `Due to Mud weather, the LOC is reduced to 5 hexes.`,
                    posX, posY, 500, 9500)

                textBox(g,
                    `Due to Mud weather, the LOC is reduced to 5 hexes.
                    The unit cannot reach General Supply.`,
                    posX, posY, 8500, 12000)

                let numberPositions = []
                numberPositions.push({ x: 1184, y: 313 }); // 1
                numberPositions.push({ x: 1118, y: 274 }); // 2
                numberPositions.push({ x: 1051, y: 313 }); // 3
                numberPositions.push({ x: 984, y: 350 }); // 4
                numberPositions.push({ x: 917, y: 313 }); // 5
                let numbersGroups = []
                for (let i = 0; i < numberPositions.length; i++) {
                    console.log('i:', i)
                    let circleN = g.circle(numberPositions[i].x, numberPositions[i].y, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 1
                    })
                    let msTextN = g.text(numberPositions[i].x - 11, numberPositions[i].y, i + 1).attr({
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
                }

                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 300);
                        }, i * 300);
                    }
                }, 5500);






                registerTimer(() => {
                    for (let i = numbersGroups.length; i > 0; i--) {
                        let numGroup = numbersGroups[numbersGroups.length - i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 90);
                        }, i * 90);
                    }
                }, 14000);

                return { discrete: g, percentage: null }
            }
        }


        let page37 = {
            label: 'shift German unit into 5 LOC length',
            pageInt: 37,
            delay: 0,
            duration: 5000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "37")

                let posX = 1000
                let posY = 488
                let boxWidth = 787
                let windowWidth = window.innerWidth;
                let textRect = g.rect(posX - 35, posY, boxWidth, 95).attr(textRectAttrs);

                let textXpos = posX + 15
                let textYpos = posY + 50


                textBox(g,
                    `Let's shift that Axis unit over a hex.`,
                    textXpos, textYpos, 500, 4500)

                registerTimer(() => {
                    //  combat_unit.animate({ width: 35, height: 35, transform: 't 44, 44 ' }, 500);
                    sgAxisCombatUnit.value.animate({ transform: 't -68, 344 ' }, 500, mina.easeout);
                }, 2500);

                return { discrete: g, percentage: null }
            }
        }

        let page38 = {
            label: 'successful LOC in mud',
            pageInt: 36,
            delay: 0,
            duration: 10000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "36")
                let posX = 870
                let posY = 490

                textBox(g,
                    `Now it can reach General Supply.`,
                    posX, posY, 500, 9500)



                let numberPositions = []

                numberPositions.push({ x: 1118, y: 274 }); // 2
                numberPositions.push({ x: 1051, y: 313 }); // 3
                numberPositions.push({ x: 984, y: 350 }); // 4
                numberPositions.push({ x: 917, y: 313 }); // 5
                numberPositions.push({ x: 851, y: 351 }); // 5
                let numbersGroups = []
                for (let i = 0; i < numberPositions.length; i++) {
                    console.log('i:', i)
                    let circleN = g.circle(numberPositions[i].x, numberPositions[i].y, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 1
                    })
                    let msTextN = g.text(numberPositions[i].x - 11, numberPositions[i].y, i + 1).attr({
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
                }

                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 300);
                        }, i * 300);
                    }
                }, 1500);






                registerTimer(() => {
                    for (let i = numbersGroups.length; i > 0; i--) {
                        let numGroup = numbersGroups[numbersGroups.length - i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 90);
                        }, i * 90);
                    }
                }, 9000);



                return { discrete: g, percentage: null }
            }
        }


        let page39 = {
            label: 'shift soviet armor division over',
            pageInt: 39,
            delay: 1000,
            duration: 5000,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "39")

                let posX = 938
                let posY = 119
                let textXpos = posX + 15
                let textYpos = posY + 50

                textBox(g,
                    `So say the Soviet unit is over here..`,
                    textXpos, textYpos, 500, 3500)


                registerTimer(() => {
                    sgSovietArmorUnit.value.animate({ width: 64, height: 64, transform: 't 67, 303' }, 500, mina.easeout);
                }, 2500)

                return { discrete: g, percentage: null }
            }
        }


        let page40 = {
            label: 'show soviet armor zoc into town',
            pageInt: 40,
            delay: 0,
            duration: 10100,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "40")

                let posX = 768
                let posY = 422
                let boxWidth = 835
                let windowWidth = window.innerWidth;
                let textRect = g.rect(posX - 35, posY, boxWidth, 100).attr(textRectAttrs);
                // whiteRect.animate({ opacity: 1 }, 500);

                let textXpos = posX + 15
                let textYpos = posY + 50


                textBox(g,
                    `Does the Soviet unit have a ZOC? -`,
                    textXpos, textYpos, 500, 3500)

                textBox(g,
                    `Does the Soviet unit have a ZOC? -
                        Yes, now the ZOC extends to the adjacent town.`,
                    textXpos, textYpos, 3000, 9000)

                let angleMult = 60
                let zocPaths = ``
                for (let i = 0; i < 7; i++) {
                    let x = Math.cos(i * angleMult * Math.PI / 180) * 46
                    let y = Math.sin(i * angleMult * Math.PI / 180) * 46
                    if (i === 0) {
                        zocPaths += `M ${x} ${y} `
                    }
                    else {
                        zocPaths += ` L ${x} ${y} `
                    }
                };
                zocPaths += ` Z `
                console.log('zocPaths:', zocPaths)
                let zocPath = g.path(zocPaths).attr({
                    fill: "yellow",
                    stroke: "red",
                    strokeWidth: 2,
                    opacity: 0.5
                });
                let msZocText = g.text(-25, 0, "ZOC").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 25,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 1,
                })
                let zocGroup = g.group()
                zocGroup.attr({ opacity: 0 })
                zocGroup.add(zocPath, msZocText)
                zocGroup.transform('t 850, 272 s 0.5')
                registerTimer(() => {
                    zocGroup.animate({ width: 64, height: 64, transform: 't 917, 313', opacity: 1 }, 500, mina.easeout);
                }, 5000)
                sgZocGroup.value = zocGroup

                return { discrete: g, percentage: null }
            }
        }

        let page41 = {
            label: 'can the Axis unit still reach supply',
            pageInt: 41,
            delay: 0,
            duration: 16100,
            remove: true,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "41")
                let posX = 874
                let posY = 433

                textBox(g,
                    `Can the Axis unit still reach General Supply?`,
                    posX, posY, 500, 7500)

                textBox(g,
                    `Can the Axis unit still reach General Supply?
                    Yes it can, by diverting through the woods.`,
                    posX, posY, 7000, 14500)

                let numberPositions = []

                numberPositions.push({ x: 1118, y: 274 }); // 1
                numberPositions.push({ x: 1051, y: 313 }); // 2
                numberPositions.push({ x: 984, y: 350 }); // 3
                numberPositions.push({ x: 917, y: 388 }); // 4
                numberPositions.push({ x: 851, y: 351 }); // 5
                let numbersGroups = []
                for (let i = 0; i < numberPositions.length; i++) {
                    console.log('i:', i)
                    let circleN = g.circle(numberPositions[i].x, numberPositions[i].y, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 1
                    })
                    let msTextN = g.text(numberPositions[i].x - 11, numberPositions[i].y, i + 1).attr({
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
                }

                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 300);
                        }, i * 300);
                    }
                }, 4000);

                registerTimer(() => {
                    for (let i = numbersGroups.length; i > 0; i--) {
                        let numGroup = numbersGroups[numbersGroups.length - i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 90);
                        }, i * 90);
                    }
                }, 11000);

                registerTimer(() => {
                    if (sgZocGroup.value) {
                        sgZocGroup.value.animate({ opacity: 0 }, 500)
                    }
                }, 10000);

                registerTimer(() => {
                    if (sgZocGroup.value) {
                        sgZocGroup.value.remove()
                        sgZocGroup.value = null
                    }
                }, 15500)



                return { discrete: g, percentage: null }
            }
        }


        let page42 = {
            label: 'move soviet armor division to motorway',
            pageInt: 42,
            delay: 0,
            duration: 5000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "42")

                let posX = 1038
                let posY = 369

                textBox(g,
                    `Let's move that Soviet unit down one hex.`,
                    posX, posY, 100, 3000)

                registerTimer(() => {
                    if (sgSovietArmorUnit.value) {
                        sgSovietArmorUnit.value.animate({ transform: 't 66, 381' }, 200, mina.easeout);
                    }
                }, 2500)

                return { discrete: g, percentage: null }
            }
        }


        let page43 = {
            label: 'show soviet armor zocs on motorway',
            pageInt: 43,
            delay: 1000,
            duration: 10000,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "43")

                let posX = 788
                let posY = 493

                textBox(g,
                    `Since the unit is on a motorway, it's ZOC extends
                    into the two adjacent and connected road hexes.`,
                    posX, posY, 500, 9500)


                let angleMult = 60
                let zocPaths = ``
                for (let i = 0; i < 7; i++) {
                    let x = Math.cos(i * angleMult * Math.PI / 180) * 46
                    let y = Math.sin(i * angleMult * Math.PI / 180) * 46
                    if (i === 0) {
                        zocPaths += `M ${x} ${y} `
                    }
                    else {
                        zocPaths += ` L ${x} ${y} `
                    }
                };
                zocPaths += ` Z `
                console.log('zocPaths:', zocPaths)
                let zocPath = g.path(zocPaths).attr({
                    fill: "yellow",
                    stroke: "none",
                    strokeWidth: 2,
                    opacity: 0.5
                });
                let zocPath2 = g.path(zocPaths).attr({
                    fill: "none",
                    stroke: "red",
                    strokeWidth: 2,
                    opacity: 1
                });

                let msZocText = g.text(-25, 0, "ZOC").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 25,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 1,
                })
                let zocGroup = g.group()
                zocGroup.attr({ opacity: 0 })
                zocGroup.add(zocPath, zocPath2, msZocText)
                zocGroup.transform('t 850, 349 s 0.5')
                let zocClone = zocGroup.clone(true);
                zocClone.transform('t 850, 349 s 0.5')
                registerTimer(() => {
                    zocGroup.animate({ width: 64, height: 64, transform: 't 917, 313', opacity: 1 }, 500, mina.easeout);
                    zocClone.animate({ width: 59, height: 59, transform: 't 783, 390', opacity: 1 }, 500, mina.easeout);
                }, 5000)

                sgZocGroup.value = g.group(zocGroup, zocClone)

                return { discrete: g, percentage: null }
            }
        }

        let page44 = {
            label: 'the Axis unit now cannot reach supply',
            pageInt: 44,
            delay: 0,
            duration: 38500,
            remove: false,
            async: true,
            fn: () => {
                let g = paper.g()
                showPageNumber(g, "44")
                let posX = 860
                let posY = 483

                textBox(g,
                    `The Axis unit now cannot reach General Supply.`,
                    posX, posY, 500, 15000)

                let numberPositions = []

                numberPositions.push({ x: 1118, y: 274 }); // 1
                numberPositions.push({ x: 1051, y: 313 }); // 2
                numberPositions.push({ x: 984, y: 350 }); // 3
                numberPositions.push({ x: 917, y: 388 }); // 4
                numberPositions.push({ x: 851, y: 428 }); // 5
                let numbersGroups = []
                for (let i = 0; i < numberPositions.length; i++) {
                    console.log('i:', i)
                    let circleN = g.circle(numberPositions[i].x, numberPositions[i].y, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 1
                    })
                    let msTextN = g.text(numberPositions[i].x - 11, numberPositions[i].y, i + 1).attr({
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
                }

                registerTimer(() => {
                    for (let i = 0; i < numbersGroups.length; i++) {
                        let numGroup = numbersGroups[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 300);
                        }, i * 300);
                    }
                }, 4000);

                let numberPositions2 = []
                numberPositions2.push({ x: 1118, y: 274 }); // 1
                numberPositions2.push({ x: 1051, y: 313 }); // 2
                numberPositions2.push({ x: 984, y: 274 }); // 3
                numberPositions2.push({ x: 917, y: 233 }); // 4
                numberPositions2.push({ x: 851, y: 274 }); // 5
                let numbersGroups2 = []
                for (let i = 0; i < numberPositions2.length; i++) {
                    console.log('i:', i)
                    let circleN = g.circle(numberPositions2[i].x, numberPositions2[i].y, 30).attr({
                        fill: "#ffffff",
                        stroke: "black",
                        strokeWidth: 1,
                        opacity: 1
                    })
                    let msTextN = g.text(numberPositions2[i].x - 11, numberPositions2[i].y, i + 1).attr({
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
                    numbersGroups2.push(circleAndNumber)
                }




                registerTimer(() => {
                    for (let i = numbersGroups.length; i > 0; i--) {
                        let numGroup = numbersGroups[numbersGroups.length - i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 90);
                        }, i * 90);
                    }
                }, 9000);

                registerTimer(() => {
                    for (let i = 0; i < numbersGroups2.length; i++) {
                        let numGroup = numbersGroups2[i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 1 }, 300);
                        }, i * 300);
                    }
                }, 10000);


                registerTimer(() => {
                    if (sgZocGroup.value) {
                        sgZocGroup.value.animate({ opacity: 0 }, 500)
                    }
                }, 17500)

                registerTimer(() => {
                    if (sgZocGroup.value) {
                        sgZocGroup.value.remove()
                        sgZocGroup.value = null
                    }
                }, 18100)
                registerTimer(() => {
                    for (let i = numbersGroups2.length; i > 0; i--) {
                        let numGroup = numbersGroups2[numbersGroups2.length - i];
                        registerTimer(() => {
                            numGroup.animate({ opacity: 0 }, 300);
                        }, i * 90);
                    }
                }, 17000);

                registerTimer(() => {
                    sgMudRoadIndicators.value.forEach(ind => {
                        ind.animate({ opacity: 0 }, 500)
                    })
                }, 18000)
                registerTimer(() => {
                    sgMudRoadIndicators.value.forEach(ind => {
                        ind.remove()
                    })
                    sgMudRoadIndicators.value = []
                }, 18500)

                // emergency supply
                sgEmergencySupplyMarker.value = g.image(emergencySupply, 1146, -64, 0, 0);
                sgEmergencySupplyMarker.value.attr({
                    'xlink:href': emergencySupply,
                    'width': "64",
                    'height': "64",
                    'opacity': 1
                });

                registerTimer(() => {
                    sgEmergencySupplyMarker.value.animate({ width: 64, height: 64, transform: 't 0, 337' }, 500, mina.easeout);
                }, 18500);

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
        _storyBoard.push(page19)
        _storyBoard.push(page20)
        _storyBoard.push(page21)
        _storyBoard.push(page22)
        _storyBoard.push(page23)
        _storyBoard.push(page24)
        _storyBoard.push(page25)
        _storyBoard.push(page26)
        _storyBoard.push(page27)
        _storyBoard.push(page28)
        _storyBoard.push(page29)
        _storyBoard.push(page30)
        _storyBoard.push(page30b)
        _storyBoard.push(page31)
        _storyBoard.push(page32)
        _storyBoard.push(page33)
        _storyBoard.push(page34)
        _storyBoard.push(page35)
        _storyBoard.push(page36)
        _storyBoard.push(page37)
        _storyBoard.push(page38)
        _storyBoard.push(page39)
        _storyBoard.push(page40)
        _storyBoard.push(page41)
        _storyBoard.push(page42)
        _storyBoard.push(page43)
        _storyBoard.push(page44)
        sgStoryBoard.value = _storyBoard
        sequence()
    }

    const displayZocs = (g, xShift, yShift) => {
        let zocGroup = g.group()
        let angleMult = 60
        let zocPaths = ``
        for (let i = 0; i < 7; i++) {
            let x = Math.cos(i * angleMult * Math.PI / 180) * 46
            let y = Math.sin(i * angleMult * Math.PI / 180) * 46
            if (i === 0) {
                zocPaths += `M ${x} ${y} `
            }
            else {
                zocPaths += ` L ${x} ${y} `
            }
        };
        zocPaths += ` Z `
        console.log('zocPaths:', zocPaths)
        let zocPath = g.path(zocPaths).attr({
            fill: "none",
            stroke: "black",
            strokeWidth: 1,
            opacity: 0.5
        });
        zocGroup.add(zocPath)
        zocPath.transform(`t ${xShift}, ${yShift}`);
        zocPath.animate({ opacity: 1 }, 500);
        let gHexes = paper.g()
        for (let i = 0; i < 6; i++) {
            registerTimer(() => {
                let x = Math.sin((i * (angleMult)) * Math.PI / 180) * 78
                let y = Math.cos((i * (angleMult)) * Math.PI / 180) * 78
                let zocClone = zocPath.clone(true);
                zocGroup.add(zocClone)
                zocClone.transform(`t ${xShift + x}, ${yShift + y}`);
                zocClone.attr({
                    fill: "yellow",
                    stroke: "black",
                    strokeWidth: 1,
                    opacity: 0.5
                })


                let msText = g.text(-25, 0, "ZOC").attr({
                    "textAnchor": "center",
                    "dominant-baseline": "central",
                    "fontSize": 25,
                    "fontWeight": "bold",
                    "fontFamily": "serif",
                    stroke: "none",
                    fill: "black",
                    opacity: 1,
                })
                msText.transform(`t ${xShift + x}, ${yShift + y}`, 500);
                zocGroup.add(msText)


            }, i * 50);
        }

        return zocGroup
    }

    const sequence = async () => {
        while (sgStoryBoard.value.length > 0) {
            let _storyBoard = [...sgStoryBoard.value];
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

            registerTimer(() => {
                let result = null
                if (page.fn) {
                    console.log('starting page fn', page.label);
                    result = page.fn();
                    if (result.discrete) {
                        sgDimensions.value = sgBackgroundImage.value.node.getBoundingClientRect();
                        result.discrete.transform(`s${sgDimensions.value.width / 1900}, ${sgDimensions.value.height / 852}, 0, 0`)
                    }
                }



                registerTimer(() => {
                    if (page.remove && result) {
                        if (result.discrete) {
                            result.discrete.animate({ opacity: 0 }, 100);
                            registerTimer(() => {
                                result.discrete.remove();
                            }, 100);
                        }
                        if (result.percentage) {
                            result.percentage.remove();
                        }
                    }
                    resolve(result);
                }, page.duration)


            }, page.delay)

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
                    They represent two different things.

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
                        There are no counters or charts for representing General Supply.
                    </div>
                    <div className="padded">
                        Units are determined to have General Supply by being on a General Supply route
                        which is determined by counting hexes from the unit to a hex that is providing General Supply.
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


            <div className="padded">
            </div>



            <span>
                <div className="subheader-image">
                    <div>General Supply<BsrLink page="10" rule="6.32" /></div>
                    <img className="barrels-image" src={barrels} alt="general supply barrels" />
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


                    <div className="subsubheader">How they can connect:<BsrLink page="9" rule="6.12" /></div>
                    <ul>
                        <li>Supply source -> Railroad Net -> Road Net -> LOC</li>
                        <li>Supply source -> Railroad Net -> LOC</li>
                        <li>Supply source -> Road Net -> LOC</li>
                        <li>Supply source -> LOC</li>
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
                <div>General Supply Route<BsrLink page="10" rule="6.1" /></div>
            </div>

            <div className="padded">
                A General Supply route is traced along a path of contiguous hexes from a ground unit to:
                <ul className="spread-list">
                    <li>a Supply Source.</li>
                    <li>a Line of Communications (LOC)<BsrLink page="10" rule="6.14" /> that connects (7 or 5 hexes max) to a Supply Source.</li>
                    <li>a Road Net<BsrLink page="10" rule="6.15" /> that connects (24 or 15 hexes max) to a Supply Source.</li>
                    <li>a Road Net<BsrLink page="10" rule="6.15" /> that connects (24 or 15 hexes max) to a railroad that connects to a Supply Source.</li>
                    <li>a Railroad Net<BsrLink page="10" rule="6.16" /> which connects to a Supply Source.</li>
                </ul>
            </div>


            <div className="subheader-rule">
                <div>Line of Communications (LOC)<BsrLink page="10" rule="6.14" /></div>
            </div>
            <div className="padded">
                A Line of Communications (LOC) is the portion of a General Supply route that connects
                from a unit to a Supply Source, which can be the actual General Supply source hex,
                or via a Road Net or Railroad Net that connects to a General Supply Source. You can
                consider it as the "off road" portion that can cross most hexes to reach a hex
                that is providing General Supply. The LOC isn't required to follow a road or railroad.
            </div>
            <div className="padded">
                The length of the LOC is normally 7 hexes, but it is reduced to 5 hexes under these conditions:<BsrLink page="10" rule="6.14c" />
                <ul className="spread-list">
                    <li>The current weather is Mud.</li>
                    <li>The current weather is Dry and the LOC enters or crosses a hex that is under the Lingering Mud condition.</li>
                    <li>The LOC enters or crosses a marsh hex (unless along a regular road or railroad) in Dry Weather.</li>
                    <li>The LOC enters or crosses a swamp hex (unless along a regular road) in Dry or Mud Weather.</li>
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
                    No "hopping" over hexes is allowed. No leaving a road to go around some obstruction (like an enemy unit) and getting back on the road. Any obstruction on a main road or railroad stops the use of that main road or railroad at the last hex before the obstruction. From there, the LOC goes out up to 7 hexes. A General Supply path can not cross non-frozen lake/inland sea hexsides or unbridged major river. A General Supply path cannot enter a swamp hex during Dry or Mud turns unless the path is along a road or railroad that goes through the hex. A LOC can go along a railroad into a swamp hex during Dry or Mud turns. A General Supply path cannot enter a hex with a undestroyed enemy strongpoint or across a non-destroyed fortified line hexside.
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