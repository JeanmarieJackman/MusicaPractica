import React from 'react';
import PrCalendar from '../components/PrCalendar'
import CreatePractice from '../components/CreatePractice'


class PrLogContL extends React.Component {

    // state = {
    //     clicked: false,
    //     id: null
    // }

    // clickHandler = (id) => {
    //     console.log("click", id)
    //     this.setState({
    //         clicked: !this.state.clicked,
    //         id: id
    //     })
    // }

    // renderLogView = () => {
    //     let event = this.props.events.find(event => event.id === this.state.id)
    //     return <PrLogView key={event.id} event={event} clickHandler={this.hideLogHandler} />
    // }

    // hideLogHandler = () => {
    //     this.setState({ clicked: !this.state.clicked, id: null })
    // }

    render() {
        return (
            <div className='master-detail-element sidebar'>
                <PrCalendar events={this.props.events}  handleSelectEvent={this.props.handleSelectEvent}  />
                < CreatePractice createCalendarEntry = { this.props.createCalendarEntry }
                />
            </div>

        )

    }

}

export default PrLogContL;