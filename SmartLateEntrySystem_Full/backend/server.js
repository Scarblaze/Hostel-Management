const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');
const studentRoutes = require('./routes/students');
const lateEntryRoutes = require('./routes/lateEntries');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Backend running'));
app.use('/api/students', studentRoutes);
app.use('/api/entries', lateEntryRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
