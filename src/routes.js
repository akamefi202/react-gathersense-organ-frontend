import Login from './containers/Login';
import ForgetPassword from './containers/ForgetPassword';
import ResetPassword from './containers/ResetPassword';
import Dashboard from './containers/Dashboard';
import Trainings from './containers/Trainings';
import TrainingsCreate from './containers/TrainingsCreate';
import Reports from './containers/Reports';
import Candidates from './containers/Candidates';
import MyAccount from './containers/MyAccount';

const routes = [
    { path: '/', exact: true, name: 'Login', component: Login },
    { path: '/Login', name: 'Login', component: Login },
    { path: '/Forget Password', name: 'ForgetPassword', component: ForgetPassword },
    { path: '/Reset Password', name: 'ResetPassword', component: ResetPassword },
    { path: '/Overview', name: 'Dashboard', component: Dashboard },
    { path: '/Trainings', name: 'Trainings', component: Trainings },
    { path: '/TrainingsCreate', name: 'TrainingsCreate', component: TrainingsCreate },
    { path: '/Reports', name: 'Reports', component: Reports },
    { path: '/Candidates', name: 'Candidates', component: Candidates },
    { path: '/My Account', name: 'MyAccount', component: MyAccount },
];

export default routes;