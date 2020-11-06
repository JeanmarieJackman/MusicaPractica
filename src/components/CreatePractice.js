import React from 'react';

class CreatePractice extends React.Component {


    //
    //  Information describing one practice event
    //  This is submitted up to the PrLogContainer which adds it to the global list of events through the backend
    //  This must be state as the UI modifies it
    state={
        title: "",
        date: "",
        allDay: 'false',
        goal: "",
        duration: "",
        instrument: "",
        reflection: "",
        user_id: 1
    }
       
    newPracticeFormSubmitHandler = (e)=>  {
        e.preventDefault()
        this.props.createCalendarEntry(this.state)
        this.setState({ 
            events: [],
            title: "",
            date: "",
            duration: "",
            instrument: "",
            subject: "",
            goal: "",
            reflection: ""
            })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onHandleSubmit = (e) => {

    }

    render() {
    console.log(this.state.events)
    return (
        <>
        <form className="new-practice-log-form" onSubmit={this.newPracticeFormSubmitHandler}>
        <h3>Log a Practice Session</h3>
        <input placeholder="Piece, Etude, or Scales practiced" type="text" name="title" value={this.state.title} onChange={this.changeHandler} />
        <input placeholder="Date" type="date" name="date" value={this.state.date} onChange={this.changeHandler} />
        <input placeholder="Minutes practiced" type="integer" name="duration" value={this.state.duration} onChange={this.changeHandler} />
        <input placeholder="Instrument" type="text" name="instrument" value={this.state.instrument} onChange={this.changeHandler} />
        <input placeholder="Goals" type="text" name="goal" value={this.state.goal} onChange={this.changeHandler} />
        <textarea placeholder="Reflection" rows={10} type="text" name="reflection" value={this.state.reflection} onChange={this.changeHandler} />
        <input type="submit" value="Submit" onSubmit={this.props.submitHandler} />
        </form>
        </>
    );
    }

}

export default CreatePractice;