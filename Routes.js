import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import DashboardPage from "./components/dashboard/DashboardPage"
import LoginPage from "./components/login/LoginForm";
import SignUpPage from "./components/login/SignUpPage";
import history from './history';


import Failed_JobsPage from "./components/failed_jobs/Failed_JobsPage"
import Failed_JobsAddUpdatePage from "./components/failed_jobs/Failed_JobsAddUpdatePage"
import MigrationsPage from "./components/migrations/MigrationsPage"
import MigrationsAddUpdatePage from "./components/migrations/MigrationsAddUpdatePage"
import Password_ResetsPage from "./components/password_resets/Password_ResetsPage"
import Password_ResetsAddUpdatePage from "./components/password_resets/Password_ResetsAddUpdatePage"
import Personal_Access_TokensPage from "./components/personal_access_tokens/Personal_Access_TokensPage"
import Personal_Access_TokensAddUpdatePage from "./components/personal_access_tokens/Personal_Access_TokensAddUpdatePage"
import StudentsPage from "./components/students/StudentsPage"
import StudentsAddUpdatePage from "./components/students/StudentsAddUpdatePage"
import UsersPage from "./components/users/UsersPage"
import UsersAddUpdatePage from "./components/users/UsersAddUpdatePage"


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                <Route path="/" exact component={LoginPage}/>
                <Route path="/signup" exact component={SignUpPage}/>
                <Route path="/dashboard" exact component={DashboardPage}/>
                <Route path="/failed_jobs" exact component={Failed_JobsPage}/>
<Route path="/failed_jobs/add" exact component={Failed_JobsAddUpdatePage}/>
<Route path="/failed_jobs/update/:id" exact component={Failed_JobsAddUpdatePage}/>
<Route path="/migrations" exact component={MigrationsPage}/>
<Route path="/migrations/add" exact component={MigrationsAddUpdatePage}/>
<Route path="/migrations/update/:id" exact component={MigrationsAddUpdatePage}/>
<Route path="/password_resets" exact component={Password_ResetsPage}/>
<Route path="/password_resets/add" exact component={Password_ResetsAddUpdatePage}/>
<Route path="/password_resets/update/:id" exact component={Password_ResetsAddUpdatePage}/>
<Route path="/personal_access_tokens" exact component={Personal_Access_TokensPage}/>
<Route path="/personal_access_tokens/add" exact component={Personal_Access_TokensAddUpdatePage}/>
<Route path="/personal_access_tokens/update/:id" exact component={Personal_Access_TokensAddUpdatePage}/>
<Route path="/students" exact component={StudentsPage}/>
<Route path="/students/add" exact component={StudentsAddUpdatePage}/>
<Route path="/students/update/:id" exact component={StudentsAddUpdatePage}/>
<Route path="/users" exact component={UsersPage}/>
<Route path="/users/add" exact component={UsersAddUpdatePage}/>
<Route path="/users/update/:id" exact component={UsersAddUpdatePage}/>

                </Switch>
            </Router>
        )
    }
}
