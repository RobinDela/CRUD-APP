const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql');
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
        // Query all crews member
        crews: {
            type: new GraphQLList(CrewsType),
            resolve(parent, args) {
                return Crews.find();
            }
        },
        // Query a specific crew member by id
        crewById: {
            type: CrewsType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Crews.findById(args.id)
            }
        }
    }
});
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // Add crew member
        addCrew: {
            type: CrewsType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                gender: { type: GraphQLNonNull(GraphQLString) },
                speciality: { type: GraphQLNonNull(GraphQLString) },
                experience: { type: GraphQLNonNull(GraphQLString) },
                weapon: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const crew = new Crews({
                    name: args.name,
                    gender: args.gender,
                    speciality: args.speciality,
                    experience: args.experience,
                    weapon: args.weapon,
                });
                return crew.save();

            },
        },
        // Delete crew member
        deleteCrew: {
            type: CrewsType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                return Crews.findByIdAndRemove(args.id)
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});