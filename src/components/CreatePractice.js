import React from 'react';

class CreatePractice extends React.Component {

    state={
        events: [],
        title: "",
        date: "",
        allDay: 'false',
        goal: "",
        duration: "",
        instrument: "",
        reflection: "",
        user_id: 1
    }


    submitHandler = (e) => {
        e.preventDefault()
        // this.props.submitHandler(this.state)
        fetch('http://localhost:3003/events', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
            title: this.state.title,
            start: this.state.date,
            end: this.state.date,
            allDay: this.state.allDay,
            goal: this.state.goal,
            duration: this.state.duration,
            instrument: this.state.instrument,
            reflection: this.state.reflection,
            user_id: this.state.user_id
        })
    })
        .then(resp => resp.json())
        .then(newEvent => {
            let newArray = [...this.state.events, newEvent]
            this.setState({ 
            events: newArray,
            date: "",
            duration: "",
            instrument: "",
            subject: "",
            goal: "",
            reflection: "",
            user_id: ""
            })
        })
        .catch(console.log)
    }

        changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
    console.log(this.state.events)
    return (
        <>
        <form className="new-practice-log-form" onSubmit={this.submitHandler}>
        <h3>Log a Practice Session</h3>
        <input placeholder="Piece, Etude, or Scales practiced" type="text" name="title" value={this.state.title} onChange={this.changeHandler} />
        <input placeholder="Date" type="date" name="date" value={this.state.date} onChange={this.changeHandler} />
        <input placeholder="Minutes practiced" type="integer" name="duration" value={this.state.duration} onChange={this.changeHandler} />
        <input placeholder="Instrument" type="text" name="instrument" value={this.state.instrument} onChange={this.changeHandler} />
        <input placeholder="Goals" type="text" name="goal" value={this.state.goal} onChange={this.changeHandler} />
        <textarea placeholder="Reflection" rows={10} type="text" name="reflection" value={this.state.reflection} onChange={this.changeHandler} />
        <input type="submit" value="Submit" onsubmit={this.someMethod} />
        </form>
        </>
    );
    }

}

export default CreatePractice;