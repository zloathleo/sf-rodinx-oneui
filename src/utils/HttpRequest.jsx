'use strict';

import axios from 'axios';

import Constants from '../constants/Constants.jsx';
import EventProxy from './EventProxy.jsx'

export default {

    axios: undefined,

    init: function (okFunc, errorFunc) {
        let serverUrl = localStorage.getItem(Constants.Keys.LocalStorage_Server_URL);
        if (serverUrl) {
            this.initURL(serverUrl, okFunc, errorFunc);
            return false;
        }
        //初始状态
        return true;
    },

    initURL: function (url, okFunc, errorFunc) {
        this.axios = axios.create({
            baseURL: 'http://' + url,
            timeout: 1000 * 10,
            crossDomain: true,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        this.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        this.checkURL(url, okFunc, errorFunc);
    },

    checkURL: function (url, okFunc, errorFunc) {
        //ui显示loading 和错误toastr 
        this.axios.get('/server').then(function () {
            localStorage.setItem("server.url", url);
            this.setCommonResponse();
            if (okFunc) {
                okFunc();
            }
            // Add a response interceptor 
        }.bind(this)).catch(function (error) {
            this.errorHandle(error);
            if (errorFunc) {
                errorFunc();
            }
        }.bind(this));
    },

    setCommonResponse: function () {
        this.axios.interceptors.response.use(function (response) {
            EventProxy.trigger(Constants.Event.Request_Finish, 'ok');
            return response;
        }, function (error) {
            EventProxy.trigger(Constants.Event.Request_Finish, 'error');
            return this.errorHandle(error);
        }.bind(this));
    },

    errorHandle: function (error) {
        let response = error.response;
        let errorMessage = undefined;
        if (response) {
            let errorData = response.data;
            if (errorData) {
                if (errorData.error) {
                    //服务端发送异常
                    errorMessage = errorData.error;
                } else {
                    //ip错误
                    // errorMessage = errorData;
                }
            } else {
            }
        } else {
            //端口错误
            // errorMessage = error.message;
        }
        if (!errorMessage) {
            if (error.config) {
                errorMessage = error.config.url + ' can not connected.';
            } else {
                errorMessage = error;
            }
        } 
        return Promise.reject(error);
    },

    axiosLoginRequestInterceptorId: 0,

    afterLogin: function (name, password, token) {
        localStorage.setItem(Global.Const.LocalStorageKey_UserName, name);

        // Add a request interceptor
        this.axiosLoginRequestInterceptorId = this.axios.interceptors.request.use(function (config) {
            config.headers['Access-Token'] = token;
            return config;
        }, function (error) {
            return Promise.reject(error);
        });
    },

    afterLogout: function () {
        localStorage.removeItem(Global.Const.LocalStorageKey_UserName);
        // Add a request interceptor
        this.axios.interceptors.request.eject(this.axiosLoginRequestInterceptorId);
    }

}; 