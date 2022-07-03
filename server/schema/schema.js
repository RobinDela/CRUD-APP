const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');
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

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        crews: {
            type: new GraphQLList(CrewsType),
            resolve(parent, args) {
                return crews;
            }
        },
        crew: {
            type: CrewsType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return crews.find(crew => crew.id === args.id);
            }
        }
    }
});
module.exports = new GraphQLSchema({
    query: RootQuery,
})