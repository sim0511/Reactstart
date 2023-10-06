import './index.css'
export default function Card({name,description,imgLink}){
    return(
        <div className="card">
            <div>
                <div className="sub">
                    <img src={imgLink} alt="" />
                    <h2>{name}</h2>
                </div>
                <p>{description}</p>
                <button>View Product</button>
            </div>
        </div>
    )
}