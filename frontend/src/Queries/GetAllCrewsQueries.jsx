import { gql } from '@apollo/client';


const GET_CREWS = gql`
query getCrews {
    crews {
        id
        name
        gender
        speciality
        experience
        weapon
    }
}
`

export { GET_CREWS };