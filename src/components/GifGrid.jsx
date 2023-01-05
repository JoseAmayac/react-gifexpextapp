import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h2>{ category }</h2>

            { isLoading && ( <h4>Cargando imagenes...</h4> ) }

            <div className="card-grid">
                {  
                    images.map(image => (
                        <GifGridItem 
                            key={image.id} 
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}