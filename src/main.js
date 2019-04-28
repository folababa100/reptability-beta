import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from "./component/homepage"
import AOS from "aos"
import 'aos/dist/aos.css';
import Signin from './component/signin';
import Loader from 'react-loader-spinner'
import Signup from './component/signup/signup';
import Dashboard from './component/dashboard';
import Confirm from './component/confirm'
import Privateroute from './container/privateroute';
import Signupwork from './component/signup/signupwork';
import Verify from './component/verify';
import Adminpanel from './component/adminpanel';
// import Howitworks from './component/home/howitworks';
// import about from './component/home/about';
// import privacy from './component/home/privacy';
// import tos from './component/home/tos';
// import HomePage from './component/homepage';
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:true
        }
    }
    componentWillMount() {
        // axios.get(`${apiUrl}/api/getLogo`).then((res)=>{
        //     if(res.data.logo) {
        //         if(res.data.logo.logo.primary) window.localStorage.setItem("primaryLogo",res.data.logo.logo.primary)
        //         if(res.data.logo.logo.secondary)window.localStorage.setItem("secondaryLogo",res.data.logo.logo.secondary)
        //     }
        // })
        setTimeout(() => {
            this.setState({loading:false})
            }, 1000);
        AOS.init();
    }
  
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact={true} path="/signup/employer" component={Signup} />
                    <Route exact={true} path="/signup/worker" component={Signupwork} />
                    <Privateroute exact={true} path="/confirm" component={Confirm}/>
                    <Privateroute path="/verify" component={Verify}/>
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact={true} path="/admin/dashboard" component={Adminpanel} />
                    {/* <Route exact path="/how_it_works" component={Howitworks} />
                    <Route exact path="/about" component={about} />
                    <Route exact path="/tos" component={tos} />
                    <Route exact path="/privacy_policy" component={privacy} /> */}
                    <Route  path="*" component={HomePage} />
                </Switch>
                {this.state.loading && <div className="animate-loader"> <Loader type="Ball-Triangle" color="#555" height={80} width={80} /></div>}
          
            </div>
        );
    }
}

export default App;