import React from 'react';

class EditPractice extends React.Component {


    //
    //  Information describing one practice event
    //  This is submitted up to the PrLogContainer which adds it to the global list of events through the backend
    //  This must be state as the UI modifies it
    state={
        id: this.props.event.id,
        title: this.props.event.title,
        date: this.props.event.title,
        allDay: 'false',
        goal: this.props.event.goal,
        duration: this.props.event.duration,
        instrument: this.props.event.instrument,
        reflection: this.props.event.reflection,
        user_id: 1
    }
       
    editPracticeFormSubmitHandler = (e)=>  {
        e.preventDefault()
        this.props.editCalendarEntry(this.state, this.state.id)
        this.setState({ 
            events: [],
            id: "",
            title: '',
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



    render() {
    console.log("state", this.state)
    return (
        <>
        <form className="new-practice-log-form" onSubmit={this.editPracticeFormSubmitHandler}>
        <h3>Edit this Practice Session</h3>
        <input type="text" name="title" value={this.state.title} onChange={this.changeHandler} />
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

export default EditPractice;