import React from 'react';
import PrLogContL from './PrLogContL';
import PrLogContR from './PrLogContR';

class PrLogContainer extends React.Component {

    state = {
        events: [],
        targetObj: [],
        submit: 'false'
    }

    componentDidMount() {
        fetch('http://localhost:3003/events')
        .then(resp => resp.json())
        // .then(resp => console.log(resp))
        .then(resp => this.setState({ events: resp }))
        .catch(console.log)
    }

    handleSelectEvent = (event) => {
        console.log("clicked", event)
        this.setState({targetObj: event})
    }

    submitHandler = () => {
        console.log("submitting")
        this.setState({submit: !this.state.submit})
    }

    render() {
        return (
        <>
            <div className='container'>
            <PrLogContL events={this.state.events} handleSelectEvent={this.handleSelectEvent} submitHandler={this.submitHandler} />
            <PrLogContR events={this.state.events} event={this.state.targetObj} />
            </div>
        </>
        )
    }
    }

export default PrLogContainer;

