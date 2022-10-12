import { useEffect, useState } from 'react';
import ShoesItem from './ShoesItem/ShoesItem'
import shoes from '../../apis/shoes'
import Card from '../UI/Card';
import Button from '../UI/Button'
import classes from './AvailableShoes.module.css'
import {useNavigate} from 'react-router-dom'

const AvailableShoes = () => {
    
    const [shoesList, setShoesList] = useState([]);
    const navigate=useNavigate();

    const getData = async () => {
        try {
            const response = await shoes.get('shoes.json');
            const data = response.data;

            let allShoes = [];

            for (const key in data) {
                allShoes.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                })
            }
            setShoesList(allShoes);
        } catch (error) {
            console.log(error);
        }
    }
    const addShoe=()=>{
        navigate('add-shoe')
    }

    useEffect(() => {

        getData();

    }, [])

    const ShoesList = shoesList.map((shoe) => (
        <ShoesItem
            key={shoe.id}
            id={shoe.id}
            name={shoe.name}
            description={shoe.description}
            price={shoe.price}
        />
    ))
    return (
        <section className={classes.shoes}>
            <Card>
                <ul>{ShoesList}</ul>
                <Button className='add-shoe' onClick={addShoe}>Add More</Button>
            </Card>
        </section>
    );
};
export default AvailableShoes;