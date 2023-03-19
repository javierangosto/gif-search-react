import { useState } from "react";
import { AddCategory, GifGrid } from './components'

export const GifApp = () => {

    const [categories, setCategories] = useState([ 'SMITE' ]);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes( newCategory ) ) return; //Evita insertar duplicados

        //Ambas formas son correctas
        setCategories( [newCategory, ...categories] );
        //setCategories ( cat => [...categories, value] );
    }

    return (
        <>
            <h1>GifApp</h1>

            <AddCategory 
                onNewCategory = { ( value ) => onAddCategory( value ) }
            />
            
            {
                categories.map ( category =>
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                )
            }
        </>
    )
}
