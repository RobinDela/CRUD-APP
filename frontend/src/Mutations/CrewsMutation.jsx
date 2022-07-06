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

export { DELETE_CREW };