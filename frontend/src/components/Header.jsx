import { GiAnchor, GiCook, GiWoodenSign, GiPirateCannon } from 'react-icons/gi';
import { AiFillCompass } from 'react-icons/ai';
import { BiPlusMedical } from 'react-icons/bi';


export default function Header({ data }) {

    const sailor = data.crews.filter((x) => {
        return (x.speciality === 'Sailor')
    })
    const medic = data.crews.filter((x) => {
        return (x.speciality === 'Medic')
    })
    const cook = data.crews.filter((x) => {
        return (x.speciality === 'Cook')
    })
    const carpenter = data.crews.filter((x) => {
        return (x.speciality === 'Carpenter')
    })
    const navigator = data.crews.filter((x) => {
        return (x.speciality === 'Navigator')
    })
    const cannoner = data.crews.filter((x) => {
        return (x.speciality === 'Cannoner')
    })
    console.log("cannoner", cannoner.length)

    return (
        <>
            <div className='header-text'>You have {data.crews.length}{data.crews.length >= 2 ? " Crew members" : " Crew member"}:
                <li><GiAnchor /> {sailor.length} {sailor.length >= 2 ? "Sailors" : "Sailor"}</li>
                <li><BiPlusMedical />{medic.length} {medic.length >= 2 ? "Medics" : "Medic"}</li>
                <li><GiCook /> {cook.length} {cook.length >= 2 ? "Cooks" : "Cook"}</li>
                <li><GiWoodenSign /> {carpenter.length} {carpenter.length >= 2 ? "Carpenters" : "Carpenter"}</li>
                <li><AiFillCompass /> {navigator.length} {navigator.length >= 2 ? "Navigators" : "Navigator"}</li>
                <li><GiPirateCannon /> {cannoner.length} {cannoner.length >= 2 ? "Cannoners" : "Cannoner"} </li>

            </div>
        </>
    )
}
