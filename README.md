
# CoderSchool FTW - *Wall-e App*

Created with :blue_heart: by <a href="https://github.com/albertanguyen">Anh</a>

## Description

<img src="https://github.com/albertanguyen/wall-e-app.github.io/blob/master/public/img/robotScreenshot.png" width="800" align="center"/>


## Required User Stories

THE USER IS ABLE TO

* [x] See the main page with the welcome message
* [x] Click on Companions on nav menu and be directed to the Companions page, url also changes accordingly.
* [x] See all Companions cards which include their basic information

[//]: # (- [] Enter a repository in a search bar, click "search", and see the associated issues. The repository should be of the format owner/repo-name, e.g. facebook/react.)

## Time Spent and Lessons Learned
* Version 1.0.0: Approximately 3 days

## Describe any challenges encountered while building the app.
1. System configuration: 
* Dependency version could be found in package.json
* OS: Distributor ID:	Ubuntu, Description:	Ubuntu 18.10, Codename:	cosmic
* Coder editor: Visual code 1.33.1

2. History of bugs and issues

* <a href="https://stackoverflow.com/questions/45148532/cant-install-react-transition-group#45148963">react-router-dom corruption</a>

* <a href="https://stackoverflow.com/questions/49755821/when-using-create-react-app-why-does-the-development-server-keep-disconnecting">The development server has disconnected</a>

* Resolve error message <code>&lt;a&gt; cannot appear as a descendant of &lt;a&gt;</code> due to the overuse of Nav.Link and Link at the same time
* Make sure that <code>Link url</code> and <code>Route url</code> match
* Cannot use map function within <code>Route</code>, have to map inside child component instead of parent component which renders the site more slowly based on my personal experience.
* Cannot use <code>this.setState</code> inside map function
* 3 modals pop up at the same time seen in candidates page
while <code>verticalmodal.js</code> is put within <code>map</code> function. This is a visual proof on UI that the <code>componentDidMount</code> method within <code>App.js</code> gets call 3 times.

## Describe any remained challenges 

* <a href="https://stackoverflow.com/questions/39974210/why-componentdidmount-gets-called-multiple-times-in-react-js-redux#39974776">componentDidMount gets called multiple times</a> because of <code>this.state</code> got updated successfully after every single API request. 
* still do not know how to <a href="https://github.com/ReactTraining/react-router/issues/187">have multiple routers on the same page</a> since I try to move <code>verticalmodal.js</code> to <code>App.js</code>

## Version 1.0.1
* Create randomized string for manufatured Id

## Version 1.0.0 (Lessons Learned)
* Use React Router to quickly change between Views
* Know basic implementation of CRUD App (Create, Read, Update, Delete).
* Set up basic server on the local computer (using json-server), parse JSON data from local server using fetch again instead of <a href="https://stackoverflow.com/questions/33650399/es6-modules-implementation-how-to-load-a-json-file/33650470#33650470">this suggestion</a>
* Use of Fake Data to use as a demo for the App Model.
* Exclusive route and nested route
* Set up navbar components, homepage, candidates screens
* Inherited the general idea and template from <a href="https://github.com/albertanguyen/tetramoviesapp.github.io">Tetra movie app</a>


[//]: # (\#\# Do more)
[//]: # (\* How to import and reuse other components that fall out of the current root repo <a href="https://github.com/facebook/react-native/issues/3099">Issues closed on github</a>)


## License

    Copyright [2019] Anh Nguyen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
