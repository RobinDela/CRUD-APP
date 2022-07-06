import { gql, useQuery } from '@apollo/client';

import WomanImg from './assets/WomanPng.png';
import ManImg from './assets/ManPng.png';
import { GET_CREWS } from '../Queries/GetAllCrewsQueries';
import Crew from './Crew';


export default function Crews() {
    const { loading, error, data } = useQuery(GET_CREWS)


    console.log(data)
    if (loading) return <p>Loading...</p>
    if (error) return <p>ERROR couldn't load data</p>
    return (
        <>
            {!loading && !error && (
                <div className="crews-gallery">
                    {data.crews.map((crew) => {
                        return (
                            <>
                                <div className="crews-container">
                                    <h1>{crew.name}</h1>
                                    <div className="crews-container-img">
                                        {crew.gender === "female" ? <img src={WomanImg}></img> : <img src={ManImg}></img>
                                        }
                                    </div>
                                    <Crew key={crew.id} crew={crew} />
                                </div>
                            </>
                        )
                    })}

                </div>)}
        </>

    )
}
