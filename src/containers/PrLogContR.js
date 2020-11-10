import React from 'react';
import PrLogView from '../components/PrLogView'
import EditPractice from '../components/EditPractice'


class PrLogContR extends React.Component {

    state = {
        clicked: false,
        id: null,
        editing: false
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
        console.log("editing", this.state.editing)
        return (
            <div className='master-detail-element detail'>
                {this.props.clicked ? <PrLogView events={this.props.events} event={this.props.event} handleDelete={this.props.handleDelete} clickHandler={this.props.clickHandler} hideLogHandler={this.props.hideLogHandler}  editing={this.props.editing} editingClickHandler={this.props.editingClickHandler} /> : this.props.editing ? <EditPractice />: null}
                {/* {this.props.editing ? <EditPractice /> : null} */}
                
            </div>
            

        )

    }

}

export default PrLogContR;