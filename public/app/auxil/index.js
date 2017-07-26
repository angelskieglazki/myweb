const {spawn} = require('child_process');

module.exports.test = function (url) {
    spawn("cmd.exe", ["/c", "start", url], {}, function(err, data) {  
        console.log(err)
        console.log(data.toString());                       
    }); 
};
