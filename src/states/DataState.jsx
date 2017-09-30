import { observable, action } from 'mobx';

import Constants from '../constants/Constants.jsx';

export default class DataState {
    userType = 0;//0:guest 1:admin 
    detailJson = undefined; 
} 