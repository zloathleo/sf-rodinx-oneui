export default {
    fetch: function (url, _method, _then) {
        fetch(url, { method: _method })
            .then(function (response) { 
                //ok 范围 200-299  
                if (response.ok) {
                    response.json().then(function (data) {
                        console.log(data);
                        _then(data);
                    });
                } else {
                    return new Error(response.statusText);
                }

            }).catch(function (err) {
                console.warn(err);
                return new Error(err);
            });
    }
}