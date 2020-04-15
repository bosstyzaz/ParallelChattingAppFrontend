import { Switch, Route, BrowserRouter,Link,useParams } from 'react-router-dom';
import App from './Components/FirstPage/App';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';


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
                    </Switch>
                </BrowserRouter>
                
            </div>
        )
    }
}

export default Routes;