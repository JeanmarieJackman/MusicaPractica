import React from 'react';
import PrCalendar from '../images/calendar_v2-05.svg';
import Keyboard from '../images/keyboard_v1-06.svg';
import Metronome from '../images/metronome_v1-02.svg';
import MusicStand from '../images/music_stand_v1-04.svg';
import Timer from '../images/timer_v1-03.svg';
import history from '../history.js';



class Home extends React.Component {

    // onClick={() => history.push('/PrLogContainer')}
    // nClick={() => console.log("clicking")}

    render() {
        return (
            <>
                <div class="grid-container">
                    <div class="item1"><img src={PrCalendar} alt="Calendar" width="500" height="300" onClick={() => history.push('/PrLogContainer')} /></div>
                    <div class="item2"><img src={Timer} alt="Timer" width="200" height="200"/></div>
                    <div class="item3"><img src={Metronome} alt="Metronome" width="150" height="450" onClick={() => history.push('/Metronome')} /></div>  
                    <div class="item4"><img src={MusicStand} alt="Music-Stand" width="500" height="700" style={{transform: 'scaleX(-1)'}} /></div>
                    <div class="item5"><img src={Keyboard} alt="Keyboard" width="700" height="600" style={{transform: 'scaleX(1)'}} /></div>
                    <div class="item6"></div>
                    <div class="item7"></div>
                    <div class="item8"></div>
                </div>
            </>
            );
    }


}

export default Home;