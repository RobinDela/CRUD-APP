import { useMutation } from '@apollo/client';
import { DELETE_CREW } from '../Mutations/CrewsMutation';
import { FaTrash } from 'react-icons/fa';
import { GET_CREWS } from '../Queries/GetAllCrewsQueries';


export default function Crew({ crew }) {
    const [deleteCrew] = useMutation(DELETE_CREW, {
        variables: { id: crew.id },
        refetchQueries: [{ query: GET_CREWS }]
    });

    return (
        <div>
            <p>{crew.speciality}</p>
            <p>{crew.experience} years</p>
            <p>{crew.weapon}</p>
            <button className='btn btn-danger btn-sm' onClick={deleteCrew}>
                <FaTrash />
            </button>

        </div>
    )
}
