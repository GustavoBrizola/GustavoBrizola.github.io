import Button from "./Button";
import ProfileData from '../data/ProfileInfo.json'

export default
function ButtonEmail()
{
    return(
        <Button 
            Type={'a'} 
            ClassName={'ProfileEmail'} 
            Href={`mailto:${ProfileData.Contact[0]}`} 
            ClassImage={'PhoneImage'} 
            Image={'images/ico/LogoGmail.png'} 
            VerticalDiviser={'Divider'} 
            Text={'Email'}
        />                    
    )
}