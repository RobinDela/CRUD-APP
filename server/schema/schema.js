const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');
const { crews } = require('../mockData.js');

// const { GraphQLObjectType } = require('graphql');

const CrewsType = new GraphQLObjectType({
    name: 'Crew',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        gender: { type: GraphQLString },
        speciality: { type: GraphQLString },
        experience: { type: GraphQLString },
        weapon: { type: GraphQLString },
    })
});