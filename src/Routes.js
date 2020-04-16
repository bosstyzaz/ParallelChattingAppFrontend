import { Switch, Route, BrowserRouter,Link,useParams } from 'react-router-dom';
import App from './Components/FirstPage/App';
import Message from './Components/Message/Message';
import MyMessage from './Components/MyMessage/MyMessage';
import ChatBox from './Components/ChatBox/ChatBox';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import TextInput from './Components/TextInput/TextInput';


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
                    </Switch>
                </BrowserRouter>
                
            </div>
        )
    }
}

export default Routes;