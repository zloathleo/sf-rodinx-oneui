
export default {
    Event: {
        Request_Finish: 'Request_Finish',

        //Module
        MainUI_Key: 'MainUI_Key',
        MainUI_Value_Overview: 'Overview',
        MainUI_Value_Overview_Detail: 'Overview_Detail',
        MainUI_Value_Overview_Detail_UserSettings: 'UserSettings',
        MainUI_Value_Overview_Detail_FactorySettings: 'FactorySettings',
        MainUI_Value_Alarm: 'Alarm',

        //loading
        LoadUI_Key: 'LoadUI_Key',
        LoadUI_Value_Visible: 'LoadUI_Value_Visible',
        LoadUI_Value_Invisible: 'MainUI_Value_Invisible',

        //moadl
        ModalUI_Key: 'ModalUI_Key',
        ModalUI_Title_Value: '',
        ModalUI_OkFunc_Value: undefined,

        //refresh
        Refresh_MainUI_Key: 'Refresh_MainUI_Key',

        //unit change
        Detail_UnitChange_Key: 'Detail_UnitChange_Key',
        Detail_UnitChange_Value: 'C', 

        //User Settings
        UserSettingsUI_Save_Key: 'UserSettingsUI_Save_Key',

        //Factory Settings
        FactorySettingsUI_Save_Key: 'FactorySettingsUI_Save_Key',

        //DashboardSave
        Dashboard_Save_Key: 'Dashboard_Save_Key', 
    },

    UI: {
        OverviewComponentContentHeight: document.documentElement.clientWidth < 760 ?
            document.documentElement.clientHeight - (54 + 11 + 43 + 10) :
            document.documentElement.clientHeight - (54 + 11 + 43 + 10)
    },

    Keys: {
        LocalStorage_Server_URL: 'localStorage_server_url',
    },
    Values: {
        Mock: false,
        // ServerUrl: '',
        ServerUrl: 'http://192.168.1.181:8080',

        Main_Is_Loading: 'main_is_loading',
        Main_Module_Login: 'LOGIN',
        Main_Module_Overview: 'OVERVIEW',
        Main_Module_Alarm: 'ALARM',

        Overview_Level1_Detail: 'DETAIL',
        Overview_Level2_UserSettings: 'UserSettings',
        Overview_Level2_FactorySettings: 'FactorySettings',
    },
}