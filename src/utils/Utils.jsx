export default {
    getCharForNumber(i) {
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".substring(i, i + 1);
    },

    renderColor(_status) {
        switch (_status) {
            case 0: {
                //无火
                return '#8BC34A';
            }
            case 1: {
                //有火
                return '#f44336';
            }
            case 2: {
                //报警
                return '#FFEB3B';
            }
            case 3: {
                //disable
                return '#9E9E9E';
            }
            case 4: {
                //离线
                return '#9E9E9E';
            }
            case 5: {
                //未设地址
                return '#9E9E9E';
            }
        }
    },

    renderText(_status) {
        switch (_status) {
            case 0: {
                //无火
                return 'Off';
            }
            case 1: {
                //有火
                return 'On';
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