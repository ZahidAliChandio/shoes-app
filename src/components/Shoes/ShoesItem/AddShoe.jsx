import { useState } from 'react';
import shoes from '../../../apis/shoes'
import Card from '../../UI/Card'
import Input from '../../UI/Input'
import Button from '../../UI/Button'

const AddShoe = () => {

    // const [shoe, setShoe] = useState([]);

    const [shoeId, setShoeId] = useState('');
    const [shoeName, setShoeName] = useState('');
    const [shoeDescription, setShoeDescription] = useState('');
    const [shoePrice, setShoePrice] = useState('');

    const addShoe = (shoe) => {
        try {
            const response = shoes.post('shoes.json', JSON.stringify(shoe));
        } catch (error) {
            console.log(error);
        }
    }
    const idChangeHandler = (e) => {
        setShoeId(e.target.value);
    }
    const nameChangeHandler = (e) => {
        setShoeName(e.target.value);
    }
    const descriptionChangeHandler = (e) => {
        setShoeDescription(e.target.value)
    }
    const priceChangeHandler = (e) => {
        setShoePrice(e.target.value)
    }

    const submitFormHandler = (event) => {
        event.preventDefault();

        const shoe = {
            id: shoeId,
            name: shoeName,
            description: shoeDescription,
            price: shoePrice
        }

        addShoe(shoe);

        setShoeId('');
        setShoeName('');
        setShoeDescription('');
        setShoePrice('');
    }
    return (
        <Card>
            <form method='post' onSubmit={submitFormHandler}>
                <Input input={{
                    id: 'shoe-id',
                    type: 'text',
                    placeholder:'Shoe ID'
                    
                }} onChange={(e) => idChangeHandler(e)} value={shoeId} />
                <Input input={{
                    id: 'shoe-name',
                    type: 'text',
                    placeholder:'Shoe Name'

                }} onChange={(e) => nameChangeHandler(e)} value={shoeName} />
                <Input input={{
                    id: 'shoe-description',
                    type: 'text',
                    placeholder:'Description'

                }} onChange={(e) => descriptionChangeHandler(e)} value={shoeDescription} />
                <Input input={{
                    id: 'shoe-price',
                    type: 'text',
                    placeholder:'Price'

                }} onChange={(e) => priceChangeHandler(e)} value={shoePrice} />
                <Button type='submit'>Add</Button>
            </form>
        </Card>
    );
}

export default AddShoe;