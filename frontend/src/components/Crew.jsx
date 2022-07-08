import { useMutation } from '@apollo/client';
import { DELETE_CREW } from '../Mutations/CrewsMutation';
import { FaTrash } from 'react-icons/fa';
import { GET_CREWS } from '../Queries/GetAllCrewsQueries';
import { GiArmoredBoomerang, GiBowieKnife, GiCrossedSabres, GiCrystalWand, GiHighShot, GiMusket } from 'react-icons/gi'



export default function Crew({ crew }) {
    const [deleteCrew] = useMutation(DELETE_CREW, {
        variables: { id: crew.id },
        refetchQueries: [{ query: GET_CREWS }]
    });

    const getCrewWeaponIcon = (weapon) => {
        if (weapon === "Boomerang") {
            return (<p>Weapon: <GiArmoredBoomerang /> {crew.weapon}</p>)
        }
        else if (weapon === "Knife") {
            return (<p>Weapon: <GiBowieKnife /> {crew.weapon}</p>)
        }
        else if (weapon === "Wand") {
            return (<p>Weapon: <GiCrystalWand /> {crew.weapon}</p>)
        }
        else if (weapon === "Sabres") {
            return (<p>Weapon: <GiCrossedSabres /> {crew.weapon}</p>)
        }
        else if (weapon === "Bow") {
            return (<p>Weapon: <GiHighShot /> {crew.weapon}</p>)
        }
        else if (weapon === "Musket") {
            return (<p>Weapon: <GiMusket /> {crew.weapon}</p>)
        }
    };

    return (
        <>
            <div className='card-text'>
                <p>Speciality: {crew.speciality}</p>
                <p>Experience: {crew.experience} years</p>
                {getCrewWeaponIcon(crew.weapon)}
            </div>
            <button className='btn btn-sm' onClick={deleteCrew}>
                <FaTrash />
            </button>
        </>
    )
}
