var time = require('time');

exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("America/Los_Angeles");
    callback(null, {
        statusCode: '200',
        body: { 
            articles: [ 
                { title: 'Article 1', dateAdded: currentTime.toString() }, 
                { title: 'Article 2', dateAdded: currentTime.toString() },
                { title: 'Article 3', dateAdded: currentTime.toString() } 
            ] 
         }
    });
};