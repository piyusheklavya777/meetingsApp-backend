const passport = require('passport')
const express  = require('express')
const cors     = require('cors')

const uri = "mongodb+srv://mongoUsername:mongoPassword@meetingsapp-cluster.wj1r3.mongodb.net/meetingsApp?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3003;

const app = express();
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true });

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());


client.connect(err => {
  const collection = client.db("meetingsApp").collection("users");
  // perform actions on the collection object
  collection.find().count().then(res=>console.log(res))

  client.close();
});


// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/api/teams', teamsRouter);
// app.use('/api/meetings', meetingsRouter);
// app.use('/api/calendar', calendarRouter);

app.get('/', (req, res) => {
    res.send('hello, world!');
  });


var database, usersCollection, meetingsCollection, teamsCollection

function connect() {

}

app.listen( PORT, () => {
    // tslint:disable-next-line: no-console
    console.log( `Server started at http://localhost:${ PORT }` );
});
