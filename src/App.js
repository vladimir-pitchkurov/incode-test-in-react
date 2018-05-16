import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    /*addTrack() {
        console.log('addTrack', this.trackInput.value);
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }*/

    mockUser = {
        "general": {
            "firstName": "",
            "lastName": "",
            "avatar": ""
        },
        "job": {
            "company": "",
            "title": ""
        },
        "contact": {
            "email": "",
            "phone": ""
        },
        "address": {
            "street": "",
            "city": "",
            "zipCode": "",
            "country": ""
        }
    };
    activeUser;


    constructor(props) {
        super(props);
        this.activeUser = this.mockUser;


    }

    findTrack() {
        console.log('findTrack', this.searchInput.value);
        this.props.onFindTrack(this.searchInput.value);
    }

    setActiveUser(){
        console.log('setActiveUser', this);
    }

    /*setterActive(cli){
        this.props.onSetActive(this);
    }*/

    render() {
        console.log(this.props);
        return (
            <div>
                <header>
                    <h3 className="header-title">My test task for Incode in React.js
                        <a href="https://github.com/vladimir-pitchkurov/incode-test-in-react" target="_blank">Look sources</a>
                    </h3>
                </header>
                <div className="row">
                    <div className="left-sidebar" >
                        <div className="search-item">
                            <label>Search</label>
                            <input type="text" ref={(input) => {
                                this.searchInput = input
                            }} onKeyUp={this.findTrack.bind(this)}/>
                        </div>
                        <ul className="client-list">
                            {this.props.clients.map((client, index) =>
                                <li className="short-inf" key={index} onClick={()=> this.props.onSetActive(client)}>
                                    <div className="short-img"><img src={client.general.avatar} alt="ava"/></div>
                                    <div className="short-name">{client.general.firstName} {client.general.lastName}, {client.job.title}</div>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="right-preview">
                        <div className="detail-img"><img src={this.props.activeU.general.avatar} alt="avatar" /></div>
                        <div className="detail-text">
                            <h3>Full name: {this.props.activeU.general.firstName} {this.activeUser.general.lastName},</h3>
                            <p>Company: {this.props.activeU.job.company}</p>
                            <p>Position: {this.props.activeU.job.title}</p>
                            <ul>
                                Contacts:
                                <li>Email: {this.props.activeU.contact.email}</li>
                                <li>Phone: {this.props.activeU.contact.phone}</li>
                            </ul>
                            <ul>
                                Address:
                                <li>Street: {this.props.activeU.address.street}</li>
                                <li>City: {this.props.activeU.address.city}</li>
                                <li>ZipCode: {this.props.activeU.address.zipCode}</li>
                                <li>Country: {this.props.activeU.address.country}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        clients: state.clientsList.filter(user => {
            return (
                user.general.firstName.toLowerCase().includes(state.filterTracks.toLowerCase())||
                user.general.lastName.toLowerCase().includes(state.filterTracks.toLowerCase())||
                user.job.company.toLowerCase().includes(state.filterTracks.toLowerCase())||
                user.job.title.toLowerCase().includes(state.filterTracks.toLowerCase())||
                user.contact.email.toLowerCase().includes(state.filterTracks.toLowerCase())||
                user.contact.phone.toLowerCase().includes(state.filterTracks.toLowerCase())||
                user.address.street.toLowerCase().includes(state.filterTracks.toLowerCase())||
                user.address.city.toLowerCase().includes(state.filterTracks.toLowerCase())||
                user.address.zipCode.toLowerCase().includes(state.filterTracks.toLowerCase())||
                user.address.country.toLowerCase().includes(state.filterTracks.toLowerCase())
            )
        }),
        activeU: state.playlists,
    }),
    dispatch => ({
        /*onAddTrack: (name) => {
            const payload = {
                id: Date.now().toString(),
                name
            };
            dispatch({ type: 'ADD_TRACK', payload });
        },*/
        onFindTrack: (name) => {
            dispatch({type: 'FIND_CLI', payload: name});
        },
        onSetActive: (cli)=>{
            dispatch({type: 'SET_ACTIVE', payload: cli});
        }
    })
)(App);
