import { useState } from "react";
import { FaUser } from 'react-icons/fa';
import { useMutation } from "@apollo/client";

export default function AddCrewModal() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [experience, setExperience] = useState('');
    const [weapon, setWeapon] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("useState", name, gender, speciality, experience, weapon)
    };


    return (
        <>

            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addCrewModal">
                <div className='d-flex align-items-center'>
                    <FaUser className='icon' />
                    <div>Add Crew member</div>
                </div>
            </button>


            <div className="modal fade" id="addCrewModal" aria-labelledby="addCrewModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addCrewModalLabel">Add Crew member</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmit}>
                                <div className='mb-3'>
                                    <label className="form-label">Name</label>
                                    <input type="text"
                                        className="form-control" id='name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <label className="form-label">Gender</label>
                                    <input type="text"
                                        className="form-control" id='gender'
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <label className="form-label">Speciality</label>
                                    <input type="text"
                                        className="form-control" id='speciality'
                                        value={speciality}
                                        onChange={(e) => setSpeciality(e.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <label className="form-label">Experience</label>
                                    <input type="text"
                                        className="form-control" id='experience'
                                        value={experience}
                                        onChange={(e) => setExperience(e.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <label className="form-label">Weapon</label>
                                    <input type="text"
                                        className="form-control" id='weapon'
                                        value={weapon}
                                        onChange={(e) => setWeapon(e.target.value)} />
                                </div>
                                <button type="submit"
                                    data-bs-dismiss="modal"
                                    className="btn btn-secondary">
                                    Create Crew
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div></>
    )
}
