import React from 'react';
import t34_in_snow from "../../../images/t34_in_snow.png";
import './Weather.scss';

const Weather = (props) => {
    return (
        <div className="content">

            <div className="content-title">
                <div className={props.language === 'en' ? '' : 'block-hidden'}>WEATHER</div>
                <div className={props.language === 'fr' ? '' : 'block-hidden'}>MÉTÉO</div>
                <div className={props.language === 'ru' ? '' : 'block-hidden'}>ПОГОДА</div>
                <div></div>
            </div>

            <div className="clipart">
                <img src={t34_in_snow} alt="T-34 in snow" />
            </div>

            <p>
                <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    Weather causes severe movement effects in EFS. In Barbarossa the Germans had expected a victory before the weather got bad. Therefore they were ill prepared for the consequences of mud and snow. The weather of course affected the Soviets too, but the Soviets had a good appreciation of how bad the weather can get in Russia, and could deal with the mud and snow better than the Germans. Of all the die rolls in the course of a game, the most important one is the "Weather Die Roll", the first thing that is done each turn. All the planning and expertise is for naught if the Axis rolls Mud too many times. In a few scenarios I've played, my Soviet front was in danger of collapse when Mud saved the situation. As the Axis player, you will often be frustrated by Mud, which turns the ground to molasses and gives the Soviets time to reorganize.
                    </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    La météo peut perturber trés fortement les mouvements dans EFS. Durant Barbarossa, les Allemands doivent atteindre la victoire avant que le temps ne devienne trop mauvais. Lé aussi, ils n'étaient absolument pas préparés aux conséquences des périodes de boue et de neige. Les conditions météorologiques affectaient aussi les russes, mais ceux-ci avaient une bonne appréciation des problémes rencontrés lors des périodes de mauvais temps en Russie, purent se prémunir des conséquences bien mieux que les allemands. De tous les lancés de dés du jeu le plus important est sans doute celui de la météo, premiére action de chaque tour. Tout les plans et avis d'experts ne vaudront rien si l'Axe tire trop souvent la boue. Dans les différents scénarios joués, le front soviétique au bord de l'effondrement a été sauvé plus d'une fois par la boue. En tant que joueur de l'Axe, vous serez souvent frustrés de ne pas pouvoir manéuvrer librement a cause d'un tour de boue, qui transforme la terre en molasse et donnera le temps aux russes de se réorganiser.
                    </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    Погода серьезно влияет на движение в серии EFS. В ходе проведения операции «Барбаросса» немцы рассчитывали на победу до того, как погода могла испортиться. Вследствие этого, он оказались совершенно не готовы к последствиям грязи и глубокого снега. Конечно же, погода влияла и на советских, но советские хорошо представляли себе, какими неприятностями может грозить погода в России, и гораздо лучше немцев справлялись с последствиями грязи и снега. Из всех бросков кубика в игре самым важным является «Бросок на погоду», первое, что происходит каждый ход. Все планирование и знание и навыки идут «коту под хвост», если Ось выбрасывает слишком много результатов «Грязь». В тех нескольких сценариях, что я сыграл, советский фронт не раз оказывался в шаге от катастрофы, и грязь Грязь спасала ситуацию. Играя за Ось, вы частенько будете впадать в фрустрацию из-за Грязи, которая превращает почву в кашу и дарит советским время на приведение себя в порядок.
                    </span>
            </p>

            <p>
                <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    There are four main conditions of Weather in EFS. Dry, Mud, Frost, and Snow/Arctic. There can also be Dry *with* Lingering Mud, and Storms.
                                        </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    Il existe quatre conditions météorologiques principales dans EFS. Sec (Dry), Boue (Mud), Gelé (Frost) et Froid Polaire / Neige (Snow/Arctic). Il peut y avoir aussi Sec avec de la boue résiduelle et des tempétes.
                                        </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    В серии EFS существует четыре основных состояния погоды: Сухо, Грязь, Мороз и Снег/Стужа. Также может возникнуть состояние Сухо «наряду с» Затянувшейся грязью и Штормы.
                                        </span>
            </p>

            <span className={props.language === 'en' ? '' : 'block-hidden'}>
                <p className="subheader">Lingering Mud</p>
                <p>
                    If the previous turn was Mud weather, and the new turn is determined to have Dry weather, then Mud continues to exists in all hexes that have Woods in them. All Mud effects remain in effect in Woods hexes until the next turn.
            </p>
            </span>

            <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                <p className="subheader">Boue Résiduelle</p>
                <p>
                    Si le tour précédent a vue l'apparition de la boue, et que le tour en cours est Sec, les effets de la boue se font encore sentir dans tous les hexagones boisés. Les effets de la boue restent en vigueur dans les hexagones affectés par la boue résiduelle.            </p>
            </span>

            <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                <p className="subheader">Затянувшаяся грязь</p>
                <p>
                    Если в предыдущий ход состоянием погоды была Грязь, а на новый ход выпало Сухо, то Грязь продолжает действовать во всех гексагонах, где есть Леса. Все последствия Грязи продолжают действовать в гексагонах с Лесами до следующего хода.
            </p>
            </span>



            <span className={props.language === 'en' ? '' : 'block-hidden'}>
                <p className="subheader">Lingering Snow</p>
                <p>
                    If the previous turn was Snow/Arctic weather, and the new turn is determined to have Frost weather, then Snow/Arctic remains the weather condition. It takes two consecutive turns of Frost weather to change the weather to Frost.
             </p>
            </span>

            <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                <p className="subheader">Neige résiduelle</p>
                <p>
                    Si le tour précédent était un tour de Neige / Froid Polaire, et que le nouveau tour est du type Gelé, les conditions Neige/Froid Polaire restent actives. Il faut deux tours consécutifs de temps Gelé pour que celui-ci s'applique.
            </p>
            </span>

            <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                <p className="subheader">Затянувшийся снег</p>
                <p>
                    Если в предыдущий ход состоянием погоды была Снег/Стужа, а на новый ход выпал Мороз, то Снег/Стужа остается текущим состоянием погоды. Требуется два последовательных хода Мороза, чтобы сменить погоду на Мороз.
            </p>
            </span>







            <span className={props.language === 'en' ? '' : 'block-hidden'}>
                <p className="subheader">Storms</p>
                <p>
                    If the weather result includes "Storms", then all air units of both sides that are in the Ready Box are moved to the Flown Box. Then they must roll to get back into the Ready Box, with a DRM applied for Storms.
             </p>
            </span>

            <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                <p className="subheader">Tempétes</p>
                <p>
                    Si le résultat indique Tempéte (Storm), alors toutes les unités aériennes de chaque camp sont déplacées de la case Préte é A Volé. Il faut ensuite lancer un dé avec les modificateurs de tempétes pour les réintégrer dans la case Préte.
            </p>
            </span>

            <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                <p className="subheader">Штормы</p>
                <p>
                    Если результат Броска на погоду включает в себя «Шторм», то все авиачасти обеих сторон, находящиеся в поле Готовы, перемещаются в поле Вылетали. Затем за них придется бросать кубик, чтобы вернуть их в поле Готовы с МБК за Штормы.
            </p>
            </span>









            <div className={props.language === 'en' ? '' : 'block-hidden'}>
                <p className="subheader">Weather Effects</p>
                <div className="gray-box">
                    <p className="subsubheader">Mud Effects</p>
                    <ul>
                        <li>General Supply LOC gets reduced from 7 to 5 hexes.</li>
                        <li>Road Nets maximum length is reduced from 21 to 15 hexes.</li>
                        <li>Movement along Main Roads is 1 MP per hex (Motorways retain 1/2 MP per hex regardless of weather).</li>
                        <li>Green MA units cannot move if on a minor road.</li>
                        <li>No CAB.</li>
                        <li>No overruns.</li>
                        <li>Artillery support values are halved (lose fractions).</li>
                        <li>Motorized units only project ZOC into adjacent city or town hexes, and along roads or RRs.</li>
                        <li>Towns during Mud confer a +1 DRM in combat.</li>
                        <li>Movement costs along minor roads are determined by other terrain in the hex, except for the following -</li>
                        <li>Ignore added cost of Woods when moving on a minor road through woods (typically its "clear" terrain then).</li>
                        <li>+2 MP to cross a river.</li>
                        <li>Rail conversion for Axis costs 2 conversion points per hex.</li>
                        <li>No infiltration movement.</li>
                        <li>Causes drm for air readiness rolls.</li>
                        <li>Causes drm on Soviet Replacements Table.</li>
                        <li>Air transport not allowed from towns unless an engineer is present.</li>
                    </ul>
                </div>
            </div>





            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
                <p className="subheader">Effets Météo</p>
                <div className="gray-box">
                    <p className="subsubheader">Effets de la Boue</p>
                    <ul>
                        <li>La Ligne de Communication pour le ravitaillement est réduite de 7 é 5 hexagones.</li>
                        <li>La longueur du réseau routier utilisable pour le ravitaillement est réduite de 21 é 15 hexagones.</li>
                        <li>Le mouvement le long des routes principales est de 1 (les autoroutes conservent la valeur 1/2 MP quelque soit le temps).</li>
                        <li>Les unités avec les capacités de mouvements en vert ne peuvent se déplacer sur les routes mineures.</li>
                        <li>Pas de CAB.</li>
                        <li>Pas d'overruns.</li>
                        <li>La valeur du support d'artillerie est divisé par deux (arrondi inférieur).</li>
                        <li>Seules les unités motorisées peuvent étendre leur ZOC dans les hexagones entourant les villes et villages et le long des routes ou chemins de fer.</li>
                        <li>Le modificateur de dé reéoit un + 1 pour les combats en villages.</li>
                        <li>Le mouvement le long des routes mineures est modifié et prend la valeur du terrain traversé excepté dans le cas suivant :</li>
                        <li>Ignorer le surcoét lié é la traverser des bois ( traiter l'hexagone comme un terrain clair).</li>
                        <li>+2 MP pour traverser une riviére.</li>
                        <li>La conversion des chemins de fer coéte 2 point par hexagone.</li>
                        <li>Pas de mouvement d'infiltration.</li>
                        <li>Elle modifie le dé pour la disponibilité des unités aériennes.</li>
                        <li>Modifie le dé pour la table de renfort russe.</li>
                        <li>Le transport aérien n'est possible qu'en la présence d'une unité de Génie.</li>
                    </ul>
                </div>
            </div>




            <div className={props.language === 'ru' ? '' : 'block-hidden'}>
                <p className="subheader">Последствия погоды</p>
                <div className="gray-box">
                    <p className="subsubheader">Последствия грязи</p>
                    <ul>
                        <li>ЛК Обычного снабжения уменьшается с 7 до 5 гексагонов.</li>
                        <li>Максимальная величина Дорожной сети уменьшается с 21 до 15 гексагонов.</li>
                        <li>Движения по Главным дорогам стоит 1 ОД за каждый гексагон (Автострады сохраняют стоимость 1/2 ОД за каждый гексагон вне зависимости от погоды).</li>
                        <li>Части с Зеленым Движением не могут двигаться.</li>
                        <li>Нет Танкового бонуса.</li>
                        <li>Нет Атак с марша.</li>
                        <li>Значения артиллерийской поддержки ополовиниваются (дроби сохраняются).</li>
                        <li>Моторизованные части проецируют ЗК в прилегающие гексагоны с Большими городами или Городами, а также вдоль дорог и Ж/Д путей.</li>
                        <li>Города во время Грязи получают МБК +1 в бою.</li>
                        <li>Стоимость движения по Второстепенным дорогам определяется иной местностью в гексагоне, за исключением следующего случая -</li>
                        <li>Игнорируйте добавляемую стоимость Лесов, когда двигаетесь по второстепенной дороге через Леса (чаще всего это оказывается «чистая» местность).</li>
                        <li>+2 ОД за пересечение Реки.</li>
                        <li>Перешивка Ж/Д колеи для Оси стоит 2 очка за каждый гексагон.</li>
                        <li>Просачивание невозможно.</li>
                        <li>Действует МБК на бросок готовности авиации.</li>
                        <li>Действует МБК в Таблице советских пополнений.</li>
                        <li>Авиатранспорт не может быть осуществлен из Городов, если только там нет инженеров.</li>
                    </ul>
                </div>
            </div>













            <div className={props.language === 'en' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">Frost Effects</p>
                    <ul>
                        <li>Costs 1 MP to enter any hex along a Minor Road.</li>
                        <li>Swamps become passable by motorized and orange MA units.</li>
                        <li>Overruns can occur in swamps.</li>
                    </ul>
                </div>
            </div>





            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">Effets du Gel</p>
                    <ul>
                        <li>Coéte 1 MP pour entrer dans n'importe quel hexagone le long d'une route mineure.</li>
                        <li>Les marais deviennent accessible pour les unités motorisée et celle qui posséde un MA orange.</li>
                        <li>Overruns peuvent se produire dans les marais.</li>
                    </ul>
                </div>
            </div>


            <div className={props.language === 'ru' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">Последствия мороза</p>
                    <ul>
                        <li>1 ОД составляет стоимость входа в любой гексагон по Второстепенной дороге.</li>
                        <li>Болота становятся проходимыми для моторизованных частей и частей с оранжевым Движением.</li>
                        <li>Атаки с марша могут производиться в Болотах.</li>
                    </ul>
                </div>
            </div>













            <div className={props.language === 'en' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">Snow/Arctic Effects</p>
                    <ul>
                        <li>General Supply LOC gets reduced from 7 to 5 hexes.</li>
                        <li>Road Nets maximum length is reduced from 21 to 15 hexes.</li>
                        <li>ZOCs extend across Major River and inland sea/lake hexsides.</li>
                        <li>Movement along Main Roads is 1 MP per hex (Motorways retain 1/2 MP per hex regardless of weather).</li>
                        <li>Movement along Minors Roads is 2 MPs per hex.</li>
                        <li>Cost to cross Major River becomes +1 MP.</li>
                        <li>Swamps become passable by motorized and orange MA units.</li>
                        <li>No CAB.</li>
                        <li>No overruns.</li>
                        <li>Units are not halved when attacking across Major River hexsides.</li>
                        <li>Rail conversion for Axis costs 2 conversion points per hex.</li>
                    </ul>
                </div>
            </div>



            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">Effets de la Neige et du froid polaire</p>
                    <ul>
                        <li>La Ligne de Communication pour le ravitaillement est réduite de 7 é 5 hexagones.</li>
                        <li>La longueur du réseau routier utilisable pour le ravitaillement est réduite de 21 é 15 hexagones.</li>
                        <li>Le mouvement le long des routes principales est de 1 (les autoroutes conservent la valeur é quelque soit le temps).</li>
                        <li>Pas de CAB.</li>
                        <li>Pas d'overruns.</li>
                        <li>Les ZOC s'étendent é travers les Riviéres Majeures et les hexagones de mers ou lacs intérieurs.</li>
                        <li>Le mouvement le long des routes mineures est de 2 MP par hexagone.</li>
                        <li>Le coét pour traverser une riviére majeure devient +1 MP.</li>
                        <li>Les marais deviennent accessible pour les unités motorisée et celle qui posséde un MA orange.</li>
                        <li>Les unités ne sont pas divisées quand elles attaquent é travers des hexagones de Riviére.</li>
                        <li>La conversion des chemins de fer coéte 2 point par hexagone</li>
                    </ul>
                </div>
            </div>

            <div className={props.language === 'ru' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">Последствия снега/стужи</p>
                    <ul>
                        <li>ЛК Обычного снабжения уменьшается с 7 до 5 гексагонов.</li>
                        <li>Максимальная величина Дорожной сети уменьшается с 21 до 15 гексагонов.</li>
                        <li>ЗК проецируются через Большую реку и стороны гексагона моря/озера в глубине суши.</li>
                        <li>Движения по Главным дорогам стоит 1 ОД за каждый гексагон (Автострады сохраняют стоимость 1/2 ОД за каждый гексагон вне зависимости от погоды).</li>
                        <li>Движение по Второстепенным дорогам стоит 2 ОД за каждый гексагон.</li>
                        <li>Стоимость пересечения Большой реки становится +1 ОД.</li>
                        <li>Болота становятся проходимыми для моторизованных частей и частей с оранжевым Движением.</li>
                        <li>Нет Танкового бонуса.</li>
                        <li>Нет Атак с марша.</li>
                        <li>Части не ополовинивают свою силу, когда атакуют через стороны гексагонов с Большой рекой.</li>
                        <li>Перешивка Ж/Д колеи для Оси стоит 2 очка за каждый гексагон.</li>
                    </ul>
                </div>
            </div>








        </div>

    );
}

export default Weather;