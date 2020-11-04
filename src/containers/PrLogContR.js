import React from 'react';
import PrLogView from '../components/PrLogView'


class PrLogContR extends React.Component {

    state = {
        clicked: false,
        id: null,
    }

    clickHandler = (id) => {
        console.log("click", id)
        this.setState({
            clicked: !this.state.clicked,
            id: id
        })
    }

    hideLogHandler = () => {
        this.setState({ clicked: !this.state.clicked, id: null })
    }

    render() {
        return (
            <div className='master-detail-element detail'>
                <PrLogView events={this.props.events} event={this.props.event} clickHandler={this.clickHandler} hideLogHandler={this.hideLogHandler} deleteLogHandler={this.deleteLogHandler}/>
            </div>

        )

    }

}

export default PrLogContR;