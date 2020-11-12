import React from 'react';
import PrLogContL from './PrLogContL';
import PrLogContR from './PrLogContR';

class PrLogContainer extends React.Component {

  
  //
  //  Global events array state.  A list of all scheduled events
  //
  //
    state = {
        events: [],
        targetObj: [],
        deleted: false,
        clicked: false,
        editing: false,
    }

    // state = {
    //     clicked: false,
    //     id: null
    // }

    clickHandler = (id) => {
        console.log("click", id)
        this.setState({
            clicked: true,
            editing: false
    //         id: id
        })
    }

    // renderLogView = () => {
    //     let event = this.props.events.find(event => event.id === this.state.id)
    //     return <PrLogView key={event.id} event={event} clickHandler={this.hideLogHandler} />
    // }

    hideLogHandler = () => {
        this.setState({ clicked: !this.state.clicked, id: null })
    }








    updateEvents = ()=>  {
        
        fetch('http://localhost:3003/events')
          .then(resp => resp.json())
          // .then(resp => console.log(resp))
          .then(resp => this.setState({ events: resp }))
          .catch(console.log);
    }
    
    componentDidMount() {
      this.updateEvents();
    }

    handleSelectEvent = (event) => {
        console.log("clicked", event)
        this.setState({
          targetObj: event,
          clicked: !this.state.clicked
        })
    }
    
   //
   // this a callback from CreatePractice that trigers when the user submits a new practice event
   // It must be called from this class because it updates the global events array which is in the state of this class and only this can edit its own state
   //
    createCalendarEntry = (calendarEntry)=>{
  //
  //  Date defaults to midnight in the local time zone, so here were explicity set it to Noon UTC so that it lands on the appropriate date in the callendar.
  // 
      let date = calendarEntry.date + "T12:00:00Z";
  
      fetch('http://localhost:3003/events', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          title: calendarEntry.title,
          start: date,
          end: date,
          allDay: calendarEntry.allDay,
          goal: calendarEntry.goal,
          duration: calendarEntry.duration,
          instrument: calendarEntry.instrument,
          reflection: calendarEntry.reflection,
          user_id: calendarEntry.user_id
        })
      })
      // new event is returned from the server
      .then(resp => resp.json())
      .then(newEvent => {
                 // Append result to events
                 // any change will trigger a re reender which will castcade down to the calendar through react magic
                this.setState({
                  events:[...this.state.events, newEvent]
              })
            })
            .catch(console.log)
    }


    handleDelete(id){
      fetch(`http://localhost:3003/events/${id}`, 
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        if (response.status === 204) {
          alert('Event deleted');
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }

    editingClickHandler = (id) => {
      console.log("editing")
      this.setState({
        clicked: false,
        editing: true,
    })
  }    

  editCalendarEntry = (calendarEntry, id)=>{
    //
    //  Date defaults to midnight in the local time zone, so here were explicity set it to Noon UTC so that it lands on the appropriate date in the callendar.
    // 
        let date = calendarEntry.date + "T12:00:00Z";
    
        fetch(`http://localhost:3003/events/${id}`, {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            title: calendarEntry.title,
            start: date,
            end: date,
            allDay: calendarEntry.allDay,
            goal: calendarEntry.goal,
            duration: calendarEntry.duration,
            instrument: calendarEntry.instrument,
            reflection: calendarEntry.reflection,
            user_id: calendarEntry.user_id
          })
        })
        // new event is returned from the server
        // .then(resp => resp.json())
        .then(resp => {return resp})
        .then(resp => {
                   // any change will trigger a re reender which will castcade down to the calendar through react magic
                  this.setState({
                    events:[...this.state.events, resp],
                    editing: false,
                })
              })
              .catch(console.log)
      }


    render() {
      console.log("editng", this.state.editing)
        return (
        <>
            <div className='container'>
            <PrLogContL events={this.state.events} handleSelectEvent={this.handleSelectEvent} createCalendarEntry={this.createCalendarEntry} clickHandler={this.clickHandler} clicked={this.state.clicked}/>
            <PrLogContR events={this.state.events} event={this.state.targetObj} handleDelete={this.handleDelete} clickHandler={this.clickHandler} editCalendarEntry={this.editCalendarEntry} clicked={this.state.clicked} hideLogHandler={this.hideLogHandler} editing={this.state.editing} editingClickHandler={this.editingClickHandler}/>
            </div>
        </>
        )
    }
    }

export default PrLogContainer;

