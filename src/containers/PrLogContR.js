import React from 'react';
import PrLogView from '../components/PrLogView'
import EditPractice from '../components/EditPractice'


class PrLogContR extends React.Component {

    state = {
        clicked: false,
        id: null
    }

    // clickHandler = (id) => {
    //     console.log("click", id)
    //     this.setState({
    //         clicked: !this.state.clicked,
    //         id: id
    //     })
    // }

    // renderPrLogView = () => {
    //     return <PrLogView events={this.props.events} event={this.props.event} handleDelete={this.props.handleDelete} clickHandler={this.clickHandler} hideLogHandler={this.hideLogHandler}   />

    // }

    // editingClickHandler = () => {
    //     this.setState({ editing: !this.state.editing, id: null })
    // }

    render() {
        return (
            <div className='master-detail-element detail'>
                {this.props.clicked ? <PrLogView events={this.props.events} event={this.props.event} handleDelete={this.props.handleDelete} clickHandler={this.props.clickHandler} hideLogHandler={this.props.hideLogHandler} editLogHandler={this.props.editLogHandler} editing={this.props.editing} editingClickHandler={this.props.editingClickHandler} /> : null}
                {this.props.editing ? <EditPractice /> : null}
                
            </div>
            

        )

    }

}

export default PrLogContR;