import { useState } from "react";

export const AddCategory = ( { onNewCategory } ) => {

    const [ inputValue, setinputValue ] = useState();

    const onInputChange = ( event ) => {
        setinputValue( event.target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( inputValue.trim().length < 1 ) return;
        
        setinputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type = "text"
                placeholder="Buscar GIFs"
                value={ inputValue }
                onChange = { onInputChange }
            />
        </form>
    )
}
