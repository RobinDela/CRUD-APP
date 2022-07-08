import { gql } from '@apollo/client';

const DELETE_CREW = gql`
    mutation deleteCrew($id: ID!) {
        deleteCrew(id: $id) {
            id
            name
            gender
            speciality
            experience
            weapon
        }
    }

`

const ADD_CREW = gql`
    mutation addCrew($name: String!, $gender: String!, $speciality: String!, $experience: String!, $weapon: String!) {
        addCrew(name: $name, gender: $gender, speciality: $speciality, experience: $experience, weapon: $weapon) {
            id
            name
            gender
            speciality
            experience
            weapon
        }
    }
    `

export { DELETE_CREW, ADD_CREW };