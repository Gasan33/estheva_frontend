import Single from "../../components/single/Single"
import { singleService } from "../../data"

const Service = () => {
    // Fetch data and send to single component
    return (
        <div className="service">
            <Single {...singleService} />
        </div>
    )
}

export default Service