const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');
const { crews } = require('../mockData.js');
const Crews = require('../models/Crews');


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

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        crews: {
            type: new GraphQLList(CrewsType),
            resolve(parent, args) {
                return Crews.find();
            }
        },
        crew: {
            type: CrewsType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Crews.findById(args.id)
            }
        }
    }
});
module.exports = new GraphQLSchema({
    query: RootQuery,
})