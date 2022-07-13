import WomanImg from './assets/WomanPng.png';
import ManImg from './assets/ManPng.png';
import Crew from './Crew';


export default function Crews({ data }) {

    return (
        <>

            <div className="crews-gallery">
                {data.crews.map((crew) => {
                    return (
                        <>
                            <div className="crews-container">
                                <h1>{crew.name}</h1>
                                <div className="crews-container-img">
                                    {crew.gender === "female" ? <img alt='female-img' src={WomanImg}></img> : <img alt='male-img' src={ManImg}></img>
                                    }
                                </div>
                                <Crew key={crew.id} crew={crew} />
                            </div>
                        </>
                    )
                })}
            </div>
        </>

    )
}
