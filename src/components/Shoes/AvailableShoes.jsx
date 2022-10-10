import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import ShoesItem from './ShoesItem/ShoesItem'
import shoes from '../../apis/shoes'
import classes from './AvailableShoes.module.css'

const AvailableShoes = () => {
    const [shoesList, setShoesList] = useState([]);

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
            console.log(allShoes);
            setShoesList(allShoes);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
        // shoesList.map((shoe) => (
        // ))
    }, [])
    const MealsList = shoesList.map((shoe) => (
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
                <ul>{MealsList}</ul>
            </Card>
        </section>
    );
};
export default AvailableShoes;