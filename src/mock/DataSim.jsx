import Mock, { Random } from 'mockjs'
import FetchMock from 'fetch-mock';

export default {
    init: function () {
        FetchMock.get('/server', Mock.mock({
            'server_time': '2017-07-01 12:00:00',
            'user': 'guest'
        }));

        FetchMock.get('/dashboard', Mock.mock({
            "name": "Layout-Default",
            "com": "COM3",
            "baud_rate": 9600,
            "rows|12-36": [
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

        FetchMock.get('/detail/A1', Mock.mock({
            "name": "A1",
            "addr": 1,
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
                "enable": true,
                "file": 0,
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
        }));

        // 其他路由使用原生fetch，这段代码必须放最后
        FetchMock.once('*', (url, options) => {
            FetchMock.restore();
            return fetch(url, options);
        });
    }
}