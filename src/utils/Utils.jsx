export default {
    getCharForNumber(i) {
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".substring(i, i + 1);
    },

    getNumberForChar(c) {
        let c1 = c.substring(0, 1);
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(c1);
    },

    parseState(_status_dex) { 
        return {
            ch1lineonoff: _status_dex & 1,
            ch1dis: _status_dex & 2,
            ch1alarm: _status_dex & 4,
            ch1flameonoff: _status_dex & 8,

            ch2lineonoff: _status_dex & 64,
            ch2dis: _status_dex & 128,
            ch2alarm: _status_dex & 256,
            ch2flameonoff: _status_dex & 512,

            ch1change: _status_dex & 4096,
            ch2change: _status_dex & 8192,
            selftest: _status_dex & 16384,
            version: _status_dex & 32768,
        }
    },

    isDeviceChange(_state_value) {
        if (_state_value.ch1change > 0 || _state_value.ch2change > 0) {
            return true;
        }
        return false;
    },

    renderCh1Text(_state_value) {
        if (_state_value.ch1lineonoff == 0) {
            return 'Offline';
        } else {
            if (_state_value.ch1dis == 0) {
                return 'Disabled';
            } else {
                if (_state_value.ch1alarm > 0) {
                    return 'Alarm';
                } else {
                    if (_state_value.ch1flameonoff > 0) {
                        //有火
                        return 'Flame On';
                    } else {
                        return 'Flame Off';
                    }
                }
            }
        }
    },

    renderCh2Text(_state_value) {
        if (_state_value.ch2lineonoff == 0) {
            return 'Offline';
        } else {
            if (_state_value.ch2dis == 0) {
                return 'Disabled';
            } else {
                if (_state_value.ch2alarm > 0) {
                    return 'Alarm';
                } else {
                    if (_state_value.ch2flameonoff > 0) {
                        //有火
                        return 'Flame On';
                    } else {
                        return 'Flame Off';
                    }
                }
            }
        }
    },

    renderCh1Color(_state_value) {
        if (_state_value.ch1lineonoff == 0) {
            return '#9E9E9E';
        } else {
            if (_state_value.ch1dis == 0) {
                return '#9E9E9E';
            } else {
                if (_state_value.ch1alarm > 0) {
                    return '#FFEB3B';
                } else {
                    if (_state_value.ch1flameonoff > 0) {
                        //有火
                        return '#f44336';
                    } else {
                        return '#8BC34A';
                    }
                }
            }
        }
    },

    renderCh2Color(_state_value) {
        if (_state_value.ch2lineonoff == 0) {
            return '#9E9E9E';
        } else {
            if (_state_value.ch2dis == 0) {
                return '#9E9E9E';
            } else {
                if (_state_value.ch2alarm > 0) {
                    return '#FFEB3B';
                } else {
                    if (_state_value.ch2flameonoff > 0) {
                        //有火
                        return '#f44336';
                    } else {
                        return '#8BC34A';
                    }
                }
            }
        }
    },

    renderText(_status) {
        switch (_status) {
            case 0: {
                //无火
                return 'FlameOff';
            }
            case 1: {
                //有火
                return 'FlameOn';
            }
            case 2: {
                //报警
                return 'Fault';
            }
            case 3: {
                //disable
                return 'Disabled';
            }
            case 4: {
                //离线
                return 'Offline';
            }
            case 5: {
                //未设地址
                return 'N/A';
            }
        }
    }

}