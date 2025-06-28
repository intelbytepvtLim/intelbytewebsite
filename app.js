require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8080;

const methodOverride = require('method-override');
// const session = require('express-session');
// const passport = require('passport');
// const passportLocal = require('passport-local');
const flash = require('connect-flash');
const path = require('path');
const ejsMate = require('ejs-mate');
const nodemailer = require('nodemailer')


//DataBase Part
// const mongoose = require('mongoose');
// const DBURL = process.env.ATLASDB_URL;
// MongoDB Connection
// mongoose.connect(DBURL)
//     .then(() => console.log('DB Connected...'))
//     .catch(err => console.log(err));


  // App Configuration
app.use(express.static('aset'));
app.engine('ejs', ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


// Session Configuration


// Passport Authentication
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new passportLocal(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// Flash Messages
// app.use(flash());
// app.use((req, res, next) => {
//     res.locals.success = req.flash('success');
//     res.locals.error = req.flash('error');
//     res.locals.currUser = req.user || null;
//     next();
// });


// Routing 
app.get('/intelbyte', (req, res) => {
   res.render("index.ejs");
});

app.get('/intelbyte/:page', (req,res) =>{
  const page = req.params.page;

  const allPage = ['about' , 'package' , 'contact' ,'career' ,  'portfolio' , 'blog' , 'contact' , 'package', 'App Developmentl' , 'Web Development' , 'Software Development' , 'Digital Marketing' , 'Graphic Designing' , 'Blockchain Developmente' ,'Blockchain Development', 'Game Development' ];
  console.log(page);

  if(allPage.includes(page)){
    res.render(`${page}.ejs`)
  }else{
    res.status(404).send('Page not found ! ')
  };
  
})


app.post('/quote', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    mobile,
    service,
    startTime,
    budget,
    projectDetails
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'info@intelbyte.in', // or 'Outlook', 'Yahoo', etc.
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.COMPANY_EMAIL,
    subject: `New Demo Request from ${firstName} ${lastName}`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Mobile: ${mobile}
      Service: ${service}
      Start Time: ${startTime}
      Budget: ${budget}
      Project Details:
      ${projectDetails}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Demo request sent successfully!");
  } catch (err) {
    console.error(err);
    res.send("Failed to send demo request.");
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/intelbyte`);
});
