import Card from "../card";
import './index.css';

export default function Product(){
const products = [{
    id:1,
    productname:"Product 1",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    imgLink:"https://picsum.photos/20/20"
},
{
    id:2,
    productname:"Product 2",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    imgLink:"https://picsum.photos/20/20"
},
{
    id:3,
    productname:"Product 3",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    imgLink:"https://picsum.photos/20/20"
},
{
    id:4,
    productname:"Product 4",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    imgLink:"https://picsum.photos/20/20"
}
];
    return(
        <div className="productcard">
            {products.map( (p)=> <Card
                key={p.id}
                name={p.productname}
                description={p.description}
                imgLink = {p.imgLink}
            />)}
        </div>
    )
}