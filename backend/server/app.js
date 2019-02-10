const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const {PythonShell} = require('python-shell');
const fs = require('fs');

//Loading dependencies
require('./config/config');
//const passport = require('./config/passport').passport;
const transporter = require('./config/nodemailer');

//Initializing app
const app = express();

//Setting middlewares
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, './')));

app.get('/mail', (req, res) => {
  transporter.sendMail({
        from: `Traffic Department <${process.env.EMAIL}>`,
        to: 'gagan2oct1998@gmail.com',
        subject: 'Overspeeding',
        template: 'overspeeding',
        attachments: [{
          filename: 'vehicle.jpg',
          content: fs.createReadStream('./server/vehicle.jpg')
        }],
        context: {
          number: 'DL 9C 4253',
        }
      }, (err, response) => {
        if (err) {
          console.log(err);
          res.send();
        } else {
          console.log(response);
          res.send();
        }
      });
});

app.listen(process.env.port, err => {
  if (!err) {
    console.log('App running on port '+process.env.PORT);
  } else {
    console.log(err);
  }
});

