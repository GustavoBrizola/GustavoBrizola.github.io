import List from "../../abstractions/List"
import ProfileData from '../../../data/ProfileInfo.json'

export default
function ListPersonalInfo()
{
    return (
        <div className="ListPersonalInfo">
            <List
                Info={ProfileData.Age}    
            />
            <div className='ListPersonalInfo_Diviser'/>
            <List
                ClassName={'ListPersonalInfo_Local'}
                Info={ProfileData.Local}
            />
            <div className='ListPersonalInfo_Diviser'/>
            <List
                Info={ProfileData.Work}
            />
        </div>
    )
}