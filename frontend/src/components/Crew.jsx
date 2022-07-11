import { useMutation } from '@apollo/client';
import { DELETE_CREW } from '../Mutations/CrewsMutation';
import { TiDeleteOutline } from 'react-icons/ti';
import { GET_CREWS } from '../Queries/GetAllCrewsQueries';
import { GiArmoredBoomerang, GiBowieKnife, GiCrossedSabres, GiCrystalWand, GiHighShot, GiMusket } from 'react-icons/gi'
import { GiAnchor, GiCook, GiWoodenSign, GiPirateCannon } from 'react-icons/gi';
import { AiFillCompass } from 'react-icons/ai';
import { BiPlusMedical } from 'react-icons/bi';



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

    const getSpecialityIcon = (speciality) => {
        if (speciality === "Sailor") {
            return (<p>Speciality: <GiAnchor /> {crew.speciality}</p>)
        }
        else if (speciality === "Medic") {
            return (<p>Speciality: <BiPlusMedical /> {crew.speciality}</p>)
        }
        else if (speciality === "Cook") {
            return (<p>Speciality: <GiCook /> {crew.speciality}</p>)
        }
        else if (speciality === "Carpenter") {
            return (<p>Speciality: <GiWoodenSign /> {crew.speciality}</p>)
        }
        else if (speciality === "Navigator") {
            return (<p>Speciality: <AiFillCompass /> {crew.speciality}</p>)
        }
        else if (speciality === "Cannoner") {
            return (<p>Speciality: <GiPirateCannon /> {crew.speciality}</p>)
        }
    };


    return (
        <>
            <div className='card-text'>
                {getSpecialityIcon(crew.speciality)}
                <p>Experience: {crew.experience} years</p>
                {getCrewWeaponIcon(crew.weapon)}
            </div>
            <button className='button-delete ' onClick={deleteCrew}>
                <TiDeleteOutline size={30} color="white" />
            </button>
        </>
    )
}
