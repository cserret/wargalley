import React from 'react';
import { Link } from 'react-router-dom';
import './EfsHome.scss';
import gamesGroup from "../../../images/efsgroup.png";
import awaitingOrders from "../../../images/awaitingordersc.png";

const EfsHome = (props) => {
    return (
        <div className="efs-home">

            <div className="notice-box">
                <div className={props.language === 'en' ? 'notice-title' : 'block-hidden'}>NOTICE</div>
                <div className={props.language === 'fr' ? 'notice-title' : 'block-hidden'}>Avertissement</div>
                <div className={props.language === 'ru' ? 'notice-title' : 'block-hidden'}>ПРЕДУПРЕЖДЕНИЕ</div>

                <div className="content-notice">
                    <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    The East Front Series is produced by GMT Games. The designer is Vance von Borries. This website is not connected to GMT Games
                    or Vance von Borries in any way, it is purely a "fan" page. Any mistakes or confusion or misinformation here is the
                    fault of my own muddled mind. This is not meant to be a comprehensive review, or replacement, of the EFS rules. It
                    is a look at major features of the EFS system. The actual rules are available as "living rules" on the GMT website
                    at
                    </span>
                    <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    La 'East Front Series' est produite par GMT Games. Son concepteur est Vance von Borries. Ce site n'est en aucune faéon lié é GMT Games ou Vance von Borries, c'est tout simplement un site de "fan". Toute erreur, confusion ou mauvaise information est la faute de mon pauvre cerveau dérangé. Ceci n'est pas fait dans le but d'étre une critique compléte, ou un remplacement des régles d'EFS. C'est une présentation des éléments majeurs du systéme EFS. Les régles complétes sont disponibles dans les "living rules" du site de 
                    </span>
                    <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    Серия игр East Front Series публикуется компанией GMT Game. Автор серии Вэнс фон Боррис >Vance von Borris). Этот сайт никоим образом не связан с GMT Game или Вэнсом фон Боррисом, это чисто «фанатская» страница. В любых ошибках, путанице или ложной информации, приведенной здесь, виноват лишь мой неорганизованный разум. Этот сайт не претендует на то, чтобы быть исчерпывающим обзором или заменой правил EFS. Это лишь частный взгляд на основные черты игровой системы EFS. Настоящие же правила доступны в качестве «обновляемыхправил» (living rules) на сайте GMT по адресу
                    </span>
                </div>
                <div className="linky">
                    <a href="http://www.gmtgames.com/" target="gmt">www.gmtgames.com</a>
                </div>
                <div className="please">
                <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    Please send comments and corrections to Cisco Serret at cisco_s@yahoo.com
                    </span>
                    <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    Merci d'envoyer vos commentaires et corrections é Cisco Serret - cisco_s@yahoo.com
                    </span>
                    <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    Пожалуйста, отправляйте комментарии и предложения мне, Cisco Serret - cisco_s@yahoo.com
                    </span>
                </div>
            </div>

            <div className="info">
                <p>
                    <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    In 1941 Germany invaded the Soviet Union. Attempting to deal a "knock-out blow" to the Soviet colossus, Germany and its allies
                    sent in 21 panzer divisions, 10 motorized divisions, and 163 infantry divisions. The biggest military
                    effort ever in the history of mankind. The battles in 1941 laid bare the deficiencies of the Soviet military
                    forces. Led by mostly inexperienced officers, paralyzed by rigid command structure, and bereft of initiative,
                    the Soviets suffered terribly against the well oiled Axis armies. The GMT Barbarrossa games simulate
                    these military operations in 1941 on the Eastern Front.
                    </span>
                    <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    En 1941, l'Allemagne a envahi l'Union Soviétique. Pour tenter de porter un coup décisif au colosse Soviétique, l'Allemagne a envoyé 21 panzer divisions, 10 divisions motorisées, et 163 divisions d'infanterie. L'effort militaire le plus important de l'histoire de l'humanité. Les batailles de 1941 ont montré les déficiences des forces militaires Soviétiques. Menés principalement par des officiers inexpérimentés, limités par une structure de commandement rigide, et manquant d'initiative, les Soviétiques ont terriblement souffert contre les armées Allemandes bien entraénées. Les jeux Barbarossa de GMT simulent ces opérations militaires sur le Front de l'Est en 1941. 
                    </span>
                    <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    В 1941 году Германия напала на Советский Союз. В попытке нанести «нокаутирующий удар» по советскому колоссу Германия и ее союзники собрали 21 танковую, 10 моторизованных и 163 пехотные дивизии. Крупнейшее военное предприятие за всю историю человечества. Сражения 1941 года обнажили недостатки советских вооруженных сил. Ведомые в большинстве своем неопытными офицерами, парализованные жесткой командной структурой, лишенные инициативы, советские терпели жестокие поражения от «хорошо отлаженной» военной машины Оси. Игры объединенные названием Barbarossa компании GMT Games моделируют операции 1941 года на Восточном фронте.                   
                    </span>
                </p>

                <p>
                    <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    Vance von Borries created <span className="tm">Typhoon!</span> as his first game for a new game system, titled the "EAST FRONT SERIES" (EFS), in 1995. It was an instant
                    hit, and is now out of print and a very desired collectable game, demanding high prices whenever offered. Vance followed
                    up this hit with a series of 3 games, the Barbarossa games, each named after one of 3 army groups of the Axis effort in the
                    east. The first one is <span className="tm">Army Group South</span>, followed by <span className="tm">Army Group Center</span>, then came <span className="tm">Army Group North</span>.
                    All 3 games are now out of print. Currently in print are two new additions to the
                    series, <span className="tm">Barbarossa: Kiev to Rostov, 1941</span>, and <span className="tm">Barbarossa: Crimea, 1941-42</span>.
                    </span>
                    <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    Vance von Borries a créé <span className="tm">Typhoon!</span> son premier jeu d'un nouveau système intitulé "EAST FRONT SERIES" (EFS), en 1995. Ce fut un succès instantané, il est maintenant épuisé et un jeu de collection très convoité, exigeant des prix élevés chaque fois qu’il est proposé. Vance a ensuite enchaîné ses succès avec une série de 3 jeux, les jeux de Barbarossa, chacun nommé d'après l'un des 3 groupes d'armées de l'effort de l'Axe dans l'est. Le premier est le <span className="tm">Amry Group Sourth</span>, suivi du groupe <span className="tm">Army Group Center</span>, suivi du <span className="tm">Army Group North</span>. Les 3 jeux sont maintenant épuisés. <span className="tm">Barbarossa: Kiev to Rostov, 1941</span>, et <span className="tm">Barbarossa: Crimea, 1941-1942</span>, sont actuellement imprimés.
                    </span>
                    <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    В 1995 году Вэнс фон Боррис создал игру Typhoon! в качестве первой игры новой серии, получившей название "EAST FRONT SERIES" (EFS). Игра мгновенно стала «хитом», в наши дни она уже давно распродана и является очень ценной коллекционной игрой, за которую, в случае появления предложения о продаже, запрашивают высокую цену. Вэнс закрепил успех этого «хита»серией из трех игр Barbarossa, каждая из которых была названа по имени одной из трех групп армий, участвовавших в предприятии Оси на востоке. Все три игры уже распроданы. Сейчас в продаже два новых дополнения к серии, игры <span className="tm">Barbarossa: Kiev to Rostov, 1941</span>, и <span className="tm">Barbarossa: Crimea, 1941-42</span>.
                    
                    </span>
                </p>
                <p>
                    <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    In this discussion I will primarily keep to AGS, AGC, and AGN, although most of it should apply to Typhoon! as well. The newer revisions of the system can be
                    applied to Typhoon!, although you'll have to come up with some updated counters and use some of the charts and rules from the later Barbarossa games (<a href="https://www.gmtgames.com/bags/gmtefret.htm">link</a>). Kiev to Rostov and Crimea has some updates and minor changes to the rules.
                </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    Dans cette discussion, je me limiterai principalement à AGS, AGC et AGN, bien que la plupart d’entre elles devraient s’appliquer à Typhoon! ainsi que. Les révisions les plus récentes du système peuvent être
                    appliqué à Typhoon !, bien que vous deviez trouver des compteurs mis à jour et utiliser certains des diagrammes et règles des derniers jeux Barbarossa  (<a href="https://www.gmtgames.com/bags/gmtefret.htm">lien</a>). 
                    Kiev à Rostov et la Crimée a quelques mises à jour et des modifications mineures aux règles.
                </span>
    
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    В своем рассказе я в первую очередь имею в виду AGS, AGC, and AGN, хотя большинство информации можно применить и к Typhoon!. Новейшие изменения в игровой системе применимы к Typhoon!, хотя вам потребуется усовершенствовать несколько фишек и использовать таблицы иправила из более поздних игр Barbarossa >подробнее). В играх Kiev to Rostov and Crimea было несколько усовершенствований и совсем небольших изменений в правилах, с которыми я, к сожалению, еще не успел ознакомиться.
                </span>

                </p>
            </div>
            <img src={gamesGroup} alt="games group" />

            <div className="contents">
                <div className="contents-list">
                    <div className={props.language === 'en' ? 'contents-title' : 'block-hidden'}>CONTENTS</div>
                    <div className={props.language === 'fr' ? 'contents-title' : 'block-hidden'}>SOMMAIRE</div>
                    <div className={props.language === 'ru' ? 'contents-title' : 'block-hidden'}>СОДЕРЖАНИЕ</div>
                    <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    <ul>
                        <li><Link to="./overview">Overview</Link></li>
                        <li><Link to="./units">Units</Link></li>
                        <li><Link to="./sop">Sequence of Play</Link></li>
                        <li><Link to="./supply">Supply</Link></li>
                        <li><Link to="./movement">Movement</Link></li>
                        <li><Link to="./combat">Combat</Link></li>
                        <li><Link to="./airpower">Airpower</Link></li>
                        <li><Link to="./headquarters">Headquarters</Link></li>
                        <li><Link to="./special">Special Units</Link></li>
                        <li><Link to="./weather">Weather</Link></li>
                    </ul>
                    </span>
                    <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    <ul>
                        <li><Link to="./overview">Aperéu</Link></li>
                        <li><Link to="./units">Unités</Link></li>
                        <li><Link to="./sop">Sequence De Jeu</Link></li>
                        <li><Link to="./supply">Ravitaillement</Link></li>
                        <li><Link to="./movement">Mouvement</Link></li>
                        <li><Link to="./combat">Combat</Link></li>
                        <li><Link to="./airpower">Aviation</Link></li>
                        <li><Link to="./headquarters">Quartiers Généraux</Link></li>
                        <li><Link to="./special">Unités Spéciales</Link></li>
                        <li><Link to="./weather">Météo</Link></li>
                    </ul>
                    </span>

                    <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    <ul>
                        <li><Link to="./overview">Обзор</Link></li>
                        <li><Link to="./units">Части</Link></li>
                        <li><Link to="./sop">Последовательность игры</Link></li>
                        <li><Link to="./supply">Снабжение</Link></li>
                        <li><Link to="./movement">Движение</Link></li>
                        <li><Link to="./combat">Бой</Link></li>
                        <li><Link to="./airpower">Авиация</Link></li>
                        <li><Link to="./headquarters">Штабы</Link></li>
                        <li><Link to="./special">Специальные части</Link></li>
                        <li><Link to="./weather">Погода</Link></li>
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