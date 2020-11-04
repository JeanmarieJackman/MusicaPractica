// import './App.css';
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
// import './style.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

///
// Data has been moved to props from state
// Global variables shoice exist once and only once
//
class PrCalendar extends React.Component {

componentDidMount() {
    fetch('http://localhost:3003/events')
        .then(resp => resp.json())
        // .then(resp => console.log(resp))
        .then(resp => this.setState({ events: resp }))
        .catch(console.log)
}

// handleSelectEvent(event) {
// 	// let obj = target.currentTarget;
//     // obj.getElementsByTagName('strong')[0].click();
//     console.log(event);
// }

render() {
    // console.log(this.state.events)
        return (
        <div>
            <p>
            Practice Calendar
            </p>
            <div style={{ height: '225pt'}}>
            <Calendar
                events={this.props.events}
                startAccessor="start"
                endAccessor="end"
                defaultDate={moment().toDate()}
                localizer={localizer}
                views={['month']}
                onSelectEvent={this.props.handleSelectEvent}
            />
            </div>
        </div>
    );
}
}



export default PrCalendar;
