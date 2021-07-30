/*
This is the HQ for our back-end routes. This project is set up
so that react-router handles page resources for the end user. These
routes share athlete data with our end users that renders within the
pages that react-router serves.
*/

const express = require('express');
const cors = require('cors');
const teamPageRouter = require('./routes/teamPageRouter');

// Create a new backend app
const app = express();

// Middleware
app.use(cors());  /* makes server accessible to any domain requesting resources via a browser
                  https://stackoverflow.com/questions/46024363/what-does-app-usecors-do#46024491 */
app.use(express.json()); // instructs app to parse all incoming requests with JSON payloads. Parsed object saved at req.body.

// ROUTES //
//========//

// Create/POST a practice session
/*
app.post('/practice'
  (req, res, next) => {
    try {
      // set up async query
      const { teamId, athleteId } = req.body; // not 100% confident this is constructed correctly
      
      const addPractice = await pool.query(
        `INSERT INTO practices (team_id, athlete_id)
         VALUES ($1, $2)
         RETURNING *`,
        [teamId, athleteId]
      )
      
      // res.json(addPractice) // .json() converts to json and calls res.send()
    } catch (err) {
      console.error(err.message);
    }
  });
*/

// Read/GET athlete names and technique list
app.use('/', teamPageRouter);


// Read/GET practice data
    // For a single athlete
    // For entire team
//app.use('/athlete', athletePageRoute)


// Update/PUT ...

// Delete/DELETE ...


// Start server
app.listen(5000, () => {console.log('wrestlytics server has started on port 5000')});
// note: use `nodemon index` rather than `node index` to auto restart server on every change