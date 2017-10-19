export default {
    fetch: function (url, _opt, _then) {
        _opt.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };

        fetch(url, _opt)
            .then(function (response) {
                //ok 范围 200-299  
                if (response.ok) {
                    response.json().then(function (data) {
                        // console.log(data);
                        if (_then) {
                            _then(data);
                        }
                    });
                } else {
                    return new Error(response.statusText);
                }

            }).catch(function (err) {
                console.warn(err);
                return new Error(err);
            });
    },

    fetchUpdateFile: function (url, _opt, _then) {

        fetch(url, _opt)
            .then(function (response) {
                //ok 范围 200-299  
                if (response.ok) {
                    response.json().then(function (data) {
                        // console.log(data);
                        _then(data);
                    });
                } else {
                    return new Error(response.statusText);
                }

            }).catch(function (err) {
                console.warn(err);
                return new Error(err);
            });
    },

    download_file: undefined,

    downloadFile: function (url) {
        if (this.download_file == undefined) {
            var iframe = document.createElement("iframe");
            this.download_file = iframe;
            document.body.appendChild(this.download_file);
        }
        // alert(download_file.iframe);
        this.download_file.src = url;
        this.download_file.style.display = "none";
    }
}