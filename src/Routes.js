import { Switch, Route, BrowserRouter,Link,useParams } from 'react-router-dom';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import App from './Components/FirstPage/App';
import Message from './Components/Message/Message';
import MyMessage from './Components/MyMessage/MyMessage';
import ChatBox from './Components/ChatBox/ChatBox';
import TextInput from './Components/TextInput/TextInput';
import MyGruop from './Components/MyGroup/MyGroup';


class Routes extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>The Best Group Chat Application</title>
                </Helmet>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/message" component={Message} />
                        <Route exact path="/mymessage" component={MyMessage} />
                        <Route exact path="/chatbox" component={ChatBox} />
                        <Route exact path="/textinput" component={TextInput} />
                        <Route exact path="/MyGroup" component={MyGruop} />
                    </Switch>
                </BrowserRouter>
                
            </div>
        )
    }
}

export default Routes;