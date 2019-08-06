import React from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import Featured from './Featured';
import NotFound from './NotFound';


const App = () => (
  <BrowserRouter basename="/react-router-course-directory">
    <div className="container">
      {/* <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={() => <About title="About" />} />
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/teachers/:topic/:name" component={Featured} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound} />
      </Switch> */}
			<div className="github-ribbon">
				<Link to="https://github.com/nickhericks/react-router-course-directory" target="_blank">
					<i className="fab fa-github"></i>
					<span>View on GitHub</span>
				</Link>
			</div>
    </div>
  </BrowserRouter>
);

export default App;