import { useFetchImages } from '../hooks/useFetchImages';
import Card from './Card'
import Loading from './Loading';
import Search from './Search';

const Cards = () => {

    const [images, loading, handleSubmit] = useFetchImages();

    return (
        <div className='row'>
            <Search handleSubmit={handleSubmit} />
            <div>
                {loading && <Loading />}
            </div>
            {images.map((img) => {
                return <Card key={img.id}
                    img={img.urls.regular}
                />
            })}
        </div>
    )
}

export default Cards