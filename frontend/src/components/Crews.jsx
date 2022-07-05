import { gql, useQuery } from '@apollo/client'
// import WomanSvg from './assets/WomanAvatar.svg';
// import ManSvg from './assets/ManAvatar.svg';
import WomanImg from './assets/WomanPng.png';
import ManImg from './assets/ManPng.png';



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


export default function Crews() {
    const { loading, error, data } = useQuery(GET_CREWS)

    console.log(data)
    if (loading) return <p>Loading...</p>
    if (error) return <p>ERROR couldn't load data</p>
    return (
        <>
            {!loading && !error && (
                <div className="crews-gallery">
                    {data.crews.map((x) => {
                        return (
                            <>
                                <div className="crews-container">
                                    <h1>{x.name}</h1>
                                    <div className="crews-container-img">
                                        {x.gender === "female" ? <img src={WomanImg}></img> : <img src={ManImg}></img>
                                        }
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>)}
        </>

    )
}
