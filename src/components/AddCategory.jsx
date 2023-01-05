import { useState } from "react"

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        const { value } = e.target;

        setInputValue(value)
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if (!inputValue.trim()) return;

        onAddCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}
