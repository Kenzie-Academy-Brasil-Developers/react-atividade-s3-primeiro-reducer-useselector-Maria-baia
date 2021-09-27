import { useSelector } from "react-redux";
import { useState } from "react";

const FruitsPage = () => {
    const fruits = useSelector((state) => state.fruits);
    const [imgs, setImgs] = useState([
        'https://i.pinimg.com/474x/8d/b3/10/8db3105d5344c819508bc530329c4060.jpg',
        'https://st.depositphotos.com/1507819/4858/v/600/depositphotos_48584837-stock-illustration-red-apple-on-white-background.jpg',
        'https://i.pinimg.com/474x/7b/3d/b0/7b3db00453d9de29600adb77f36084cd.jpg'
    ])

    return (
        <div>
            <div className="fruitsName">
                {fruits.map((fruit, img) => (
                    <p key={fruit}>{fruit}</p>
                ))}
            </div>
            <div className="fruitsImgs">
                {imgs.map((img) => (
                    <img src={img}/>
                ))}
            </div>
        </div>
    )
}

export default FruitsPage