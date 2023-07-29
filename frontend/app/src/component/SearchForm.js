import React, {useState} from "react";
import './SearchForm.css';

function SearchForm(props)
{

    const [enteredName, setEnteredName] = useState('');
    const [enteredColour, setEnteredColour] = useState('');

    const nameChangeHandler = (event) =>
    {
        setEnteredName(event.target.value);

        console.log(enteredName);
    };

    const colourChangeHandler = (event) =>
    {
        setEnteredColour(event.target.value);
        console.log(enteredColour);
    };

    const submitHandler = (event) =>
    {
        event.preventDefault();

        const searchData = {
            'n': enteredName,
            'colour': enteredColour,
        }

        console.log(searchData);
        setEnteredColour("")
        setEnteredName("");
        async function submitNow()
        {
        await fetch('http://cors-anywhere.localhost:8181/card?query='+ searchData['n'])
            .then(res=> res.json())
            .then(res => console.log(res));
        }
        submitNow();
    }


    return (
        <div>
            <form>
                <div>
                    <div className='form-control'>
                        <label>Name</label>
                        <input type="text" value={enteredName} onChange={nameChangeHandler}></input>
                        <label>Colour</label>
                        <select name="colour" onChange={colourChangeHandler}>
                        <option value ="">""</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Purple">Purple</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        </select>
                    </div>
                    <div>
                        <button type="button" onClick={submitHandler}>Search</button>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default SearchForm;