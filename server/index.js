const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const port = process.env.PORT || 6000;

const app = express();

app.listen(port, console.log(`Server running on port ${port}`));