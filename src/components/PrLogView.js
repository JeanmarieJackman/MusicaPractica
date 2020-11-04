import React from 'react';

class PrLogView extends React.Component {


    deleteLogHandler = (id) =>{
        console.log(id);
        // fetch('http://localhost:3003/events/' + id, {
        //     method: 'DELETE',
        //   })
        //   .then(res => res.json()) 
        //   .then(res => console.log("deleted", res))
    }



    render() {

        return (
            <div className="event-page" >
                <div style={{display: "flex",  flexDirection: "column"}}>
                    <h2>Practice Log Entry</h2>
                    < h3 >Piece, Etude, or Scales practiced: {this.props.event.title}</h3>
                    < h3 >Practice Log Date: {this.props.event.start}</h3>
                    < h3 >Practiced for: {this.props.event.duration} minutes</h3>
                    < h3 >Session goal: {this.props.event.goal}</h3>
                    < h3 >Instrument: {this.props.event.instrument}</h3>
                    < p className="reflection">Reflections: {this.props.event.reflection}</p>

                </div>
                <div style={{display: "flex",  flexDirection: "row", justifyContent: "space-around"}}>
                <button type="button" className="delete" onClick={this.deleteLogHandler}>Delete this Log  </button>               
                 <button type="button" className="edit" onClick={this.props.editLogHandler}>Edit this Log  </button>
                <button type="button" className="hide" onClick={this.props.hideLogHandler}>Close this Log  </button>
                </div>
                {/* <div>
                <button type="button" className="close" onClick={this.props.hideLogHandler}>X  </button>
                </div>
                   */}

            </div>
        )
    }

}

export default PrLogView;