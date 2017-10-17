import Mock, { Random } from 'mockjs'
import FetchMock from 'fetch-mock';

export default {
    init: function () {
        FetchMock.get('/server?type=1&device=A0', Mock.mock(
            {
                "server_time": "2017-07-01 12:00:00",
                "user": "guest1",
                "dashboard": {
                    "modify_time": "2017-07-01 12:00:00",
                    "status": {
                        "A1": [
                            0,
                            0
                        ],
                        "A2": [
                            0,
                            0
                        ],
                        "A3": [
                            0,
                            0
                        ]
                    }
                },
                "device_change": [
                    "A0",
                    "A1",
                    "A2"
                ],
                "device": {
                    "name": "A1",
                    "addr": 1,
                    "status": 0,
                    "ch1": {
                        "enable": true,
                        "file": 0,
                        "onth": 2000,
                        "ontl": 600,
                        "max": 1600,
                        "min": 400,
                        "ac": 1500,
                        "dc": 1000,
                        "freq": 99,
                        "type": "IR",
                        "status": 1,
                        "fault": "00",
                        "temp": 29,
                        "fq": 75
                    },
                    "ch2": {
                        "onth": 2000,
                        "ontl": 600,
                        "max": 1600,
                        "min": 400,
                        "ac": 1999,
                        "dc": 462,
                        "freq": 99,
                        "type": "IR",
                        "status": 1,
                        "fault": "00",
                        "temp": 29,
                        "fq": 99
                    }
                }
            }
        ));

        FetchMock.get('/ports', Mock.mock({
            'rows|2-8': [
                'COM3'
            ]
        }));

        //更新dashboard
        FetchMock.put('/dashboard', Mock.mock(
            {
                "server_time": "2017-07-01 12:00:00"
            }
        ));

        FetchMock.get('/dashboard', Mock.mock({
            "name": "Layout-Default",
            "com": "COM3",
            "baud_rate": 9600,
            "rows|2-10": [
                {
                    "index": 0,
                    "title": "A",
                    "items|4-6": [
                        {
                            "name": "A1",
                            "addr": 1,
                            "chs": [
                                {
                                    "name": "CH1",
                                    "desc": "第一层1号角CH1"
                                }
                            ]
                        }
                    ]
                }
            ]
        }));

        FetchMock.get('/detail/A1', Mock.mock(
            {
                "addr": 1,
                "name": "A1",
                "ch1": {
                    "ac": 0,
                    "dc": 163,
                    "enable": 1,
                    "fault": "0",
                    "file": 1,
                    "fq": 0,
                    "freq": 0,
                    "max": 1999,
                    "min": 300,
                    "name": "ch1",
                    "onth": 1999,
                    "ontl": 600,
                    "status": 0,
                    "temp": 0,
                    "type": "IR"
                },
                "ch2": {
                    "ac": 0,
                    "dc": 214,
                    "enable": 1,
                    "fault": "0",
                    "file": 0,
                    "fq": 0,
                    "freq": 0,
                    "max": 1999,
                    "min": 300,
                    "name": "ch2",
                    "onth": 1999,
                    "ontl": 600,
                    "status": 0,
                    "temp": 0,
                    "type": "IR"
                }
            }
        ));

        let _settings = Mock.mock(
            {
                "addr": 1,
                "ch1": {
                    "ao_value": {
                        "ao_20ma_value": 65295,
                        "ao_4ma_value": 0
                    },
                    "enable": 1,
                    "file": 1,
                    "filea": {
                        "ac": {
                            "ac_gain": 1,
                            "ac_on_th": 1998,
                            "ac_on_tl": 600,
                            "fc": 99,
                            "l_band": 4,
                            "l_d": 0.02,
                            "l_weight": 0.333,
                            "line_param": 1,
                            "line_turn": 600,
                            "max": 1999,
                            "min": 300,
                            "r_band": 4,
                            "r_d": 0.02,
                            "r_weight": 0.333,
                            "weight_h": [
                                0.575,
                                0.225,
                                0.1,
                                0.1
                            ],
                            "weight_l": [
                                0.1,
                                0.5,
                                0.2,
                                0.2
                            ],
                            "weight_n": [
                                0.05,
                                0.2,
                                0.2,
                                0.55
                            ],
                            "weight_ph": 150,
                            "weight_pl": 100
                        },
                        "dc": {
                            "dc_gain": 1,
                            "dc_on_th": 1999,
                            "dc_on_tl": 0,
                            "weight_h": [
                                0.575,
                                0.225,
                                0.1,
                                0.1
                            ],
                            "weight_l": [
                                0.1,
                                0.5,
                                0.2,
                                0.2
                            ],
                            "weight_n": [
                                0.05,
                                0.2,
                                0.2,
                                0.55
                            ],
                            "weight_ph": 150,
                            "weight_pl": 100
                        },
                        "frequency": {
                            "drop_num": 3,
                            "drop_v1": 500,
                            "drop_v2": 500,
                            "freq_on_th": 126,
                            "freq_on_tl": 0,
                            "raise_num": 3,
                            "raise_v1": 500,
                            "raise_v2": 500,
                            "weight_h": [
                                0.575,
                                0.225,
                                0.1,
                                0.1
                            ],
                            "weight_l": [
                                0.1,
                                0.5,
                                0.2,
                                0.2
                            ],
                            "weight_n": [
                                0.05,
                                0.2,
                                0.2,
                                0.55
                            ],
                            "weight_ph": 12,
                            "weight_pl": 3
                        },
                        "public": {
                            "ffrt": 3,
                            "otd": 1
                        }
                    },
                    "fileb": {
                        "ac": {
                            "ac_gain": 1,
                            "ac_on_th": 1999,
                            "ac_on_tl": 600,
                            "fc": 99,
                            "l_band": 3,
                            "l_d": 0.02,
                            "l_weight": 0.333,
                            "line_param": 1,
                            "line_turn": 600,
                            "max": 1999,
                            "min": 300,
                            "r_band": 3,
                            "r_d": 0.02,
                            "r_weight": 0.333,
                            "weight_h": [
                                0.575,
                                0.225,
                                0.1,
                                0.1
                            ],
                            "weight_l": [
                                0.1,
                                0.5,
                                0.2,
                                0.2
                            ],
                            "weight_n": [
                                0.05,
                                0.2,
                                0.2,
                                0.55
                            ],
                            "weight_ph": 150,
                            "weight_pl": 100
                        },
                        "dc": {
                            "dc_gain": 1,
                            "dc_on_th": 1999,
                            "dc_on_tl": 0,
                            "weight_h": [
                                0.575,
                                0.225,
                                0.1,
                                0.1
                            ],
                            "weight_l": [
                                0.1,
                                0.5,
                                0.2,
                                0.2
                            ],
                            "weight_n": [
                                0.05,
                                0.2,
                                0.2,
                                0.55
                            ],
                            "weight_ph": 150,
                            "weight_pl": 100
                        },
                        "frequency": {
                            "drop_num": 3,
                            "drop_v1": 500,
                            "drop_v2": 500,
                            "freq_on_th": 126,
                            "freq_on_tl": 0,
                            "raise_num": 3,
                            "raise_v1": 500,
                            "raise_v2": 500,
                            "weight_h": [
                                0.575,
                                0.225,
                                0.1,
                                0.1
                            ],
                            "weight_l": [
                                0.1,
                                0.5,
                                0.2,
                                0.2
                            ],
                            "weight_n": [
                                0.05,
                                0.2,
                                0.2,
                                0.55
                            ],
                            "weight_ph": 12,
                            "weight_pl": 3
                        },
                        "public": {
                            "ffrt": 3,
                            "otd": 1
                        }
                    },
                    "name": "ch1",
                    "type": "IR"
                },
                "ch2": {
                    "ao_value": {
                        "ao_20ma_value": 65295,
                        "ao_4ma_value": 0
                    },
                    "enable": 1,
                    "file": 1,
                    "filea": {
                        "ac": {
                            "ac_gain": 1,
                            "ac_on_th": 1999,
                            "ac_on_tl": 600,
                            "fc": 99,
                            "l_band": 3,
                            "l_d": 0.02,
                            "l_weight": 0.333,
                            "line_param": 1,
                            "line_turn": 600,
                            "max": 1999,
                            "min": 300,
                            "r_band": 3,
                            "r_d": 0.02,
                            "r_weight": 0.333,
                            "weight_h": [
                                0.575,
                                0.225,
                                0.1,
                                0.1
                            ],
                            "weight_l": [
                                0.1,
                                0.5,
                                0.2,
                                0.2
                            ],
                            "weight_n": [
                                0.05,
                                0.2,
                                0.2,
                                0.55
                            ],
                            "weight_ph": 150,
                            "weight_pl": 100
                        },
                        "dc": {
                            "dc_gain": 1,
                            "dc_on_th": 1999,
                            "dc_on_tl": 0,
                            "weight_h": [
                                0.575,
                                0.225,
                                0.1,
                                0.1
                            ],
                            "weight_l": [
                                0.1,
                                0.5,
                                0.2,
                                0.2
                            ],
                            "weight_n": [
                                0.05,
                                0.2,
                                0.2,
                                0.55
                            ],
                            "weight_ph": 150,
                            "weight_pl": 100
                        },
                        "frequency": {
                            "drop_num": 3,
                            "drop_v1": 500,
                            "drop_v2": 500,
                            "freq_on_th": 126,
                            "freq_on_tl": 0,
                            "raise_num": 3,
                            "raise_v1": 500,
                            "raise_v2": 500,
                            "weight_h": [
                                0.575,
                                0.225,
                                0.1,
                                0.1
                            ],
                            "weight_l": [
                                0.1,
                                0.5,
                                0.2,
                                0.2
                            ],
                            "weight_n": [
                                0.05,
                                0.2,
                                0.2,
                                0.55
                            ],
                            "weight_ph": 12,
                            "weight_pl": 3
                        },
                        "public": {
                            "ffrt": 3,
                            "otd": 1
                        }
                    },
                    "fileb": {
                        "ac": {
                            "ac_gain": 1,
                            "ac_on_th": 1999,
                            "ac_on_tl": 600,
                            "fc": 99,
                            "l_band": 3,
                            "l_d": 0.02,
                            "l_weight": 0.333,
                            "line_param": 1,
                            "line_turn": 600,
                            "max": 1999,
                            "min": 300,
                            "r_band": 3,
                            "r_d": 0.02,
                            "r_weight": 0.333,
                            "weight_h": [
                                0.575,
                                0.225,
                                0.1,
                                0.1
                            ],
                            "weight_l": [
                                0.1,
                                0.5,
                                0.2,
                                0.2
                            ],
                            "weight_n": [
                                0.05,
                                0.2,
                                0.2,
                                0.55
                            ],
                            "weight_ph": 150,
                            "weight_pl": 100
                        },
                        "dc": {
                            "dc_gain": 1,
                            "dc_on_th": 1999,
                            "dc_on_tl": 0,
                            "weight_h": [
                                0.575,
                                0.225,
                                0.1,
                                0.1
                            ],
                            "weight_l": [
                                0.1,
                                0.5,
                                0.2,
                                0.2
                            ],
                            "weight_n": [
                                0.05,
                                0.2,
                                0.2,
                                0.55
                            ],
                            "weight_ph": 150,
                            "weight_pl": 100
                        },
                        "frequency": {
                            "drop_num": 3,
                            "drop_v1": 500,
                            "drop_v2": 500,
                            "freq_on_th": 126,
                            "freq_on_tl": 0,
                            "raise_num": 3,
                            "raise_v1": 500,
                            "raise_v2": 500,
                            "weight_h": [
                                0.575,
                                0.225,
                                0.1,
                                0.1
                            ],
                            "weight_l": [
                                0.1,
                                0.5,
                                0.2,
                                0.2
                            ],
                            "weight_n": [
                                0.05,
                                0.2,
                                0.2,
                                0.55
                            ],
                            "weight_ph": 12,
                            "weight_pl": 3
                        },
                        "public": {
                            "ffrt": 3,
                            "otd": 1
                        }
                    },
                    "name": "ch2",
                    "type": "IR"
                },
                "check_enables": {
                    "da1": 1,
                    "da2": 1,
                    "fram": 0,
                    "scan1": 1,
                    "scan2": 1,
                    "t1": 1,
                    "t2": 1
                },
                "name": "A0",
                "version_info": {
                    "amp_version": 3,
                    "ch1": 768,
                    "ch2": 1,
                    "fw_version": 513
                }
            }
        );
        FetchMock.get('/detail/A1/settings/u/m', _settings);

        FetchMock.get('/detail/A1/settings/s/m', _settings);

        //修改device地址
        FetchMock.patch('/dashboard/A1', Mock.mock(
            {
                "server_time": "2017-07-01 12:00:00"
            }
        ));

        //更新settings
        FetchMock.put('/detail/A1/settings/u', Mock.mock(
            {
                "server_time": "2017-07-01 12:00:00"
            }
        ));

        //更新settings
        FetchMock.put('/detail/A1/settings/s', Mock.mock(
            {
                "server_time": "2017-07-01 12:00:00"
            }
        ));

        //保存通道配置模板
        FetchMock.post('/templates/aaa', Mock.mock(
            {
                "server_time": "2017-07-01 12:00:00"
            }
        ));

        //查询模板
        FetchMock.get('/templates/u', Mock.mock(
            {
                "rows": [
                    "A1T1",
                    "A2T2",
                    "A3T1",
                    "A4T4"
                ]
            }
        ));

        //应用通道配置模板
        FetchMock.put('/templates/aaa', Mock.mock(
            {
                "server_time": "2017-07-01 12:00:00"
            }
        ));

        //登录
        FetchMock.patch('/users/admin', Mock.mock(
            {
                "server_time": "2017-07-01 12:00:00",
                "access_token": "abcdefg"
            }
        ));

        // 其他路由使用原生fetch，这段代码必须放最后
        FetchMock.once('*', (url, options) => {
            FetchMock.restore();
            return fetch(url, options);
        });
    }
}