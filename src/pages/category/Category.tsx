import Single from '../../components/single/Single'
import { singleService } from '../../data'
import './category.scss'

const Category = () => {
    return (
        <div className='category'>
            <Single {...singleService} />
        </div>
    )
}

export default Category