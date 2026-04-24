import Button from "./Button";
import ProfileData from '../data/ProfileInfo.json'

export default
function ButtonWhatsApp()
{
    return(
        <Button 
            Type={'a'} 
            ClassName={'ProfilePhone'} 
            Href={`https://wa.me/${ProfileData.Contact[1].replace(/\s/g, '').replace('+', '')}`} 
            Target={'_blank'} 
            Rel={'noopener noreferrer'} 
            ClassImage={'PhoneImage'} 
            Image={'images/ico/LogoWhatsApp.png'} 
            VerticalDiviser={'Divider'} 
            Text={'WhatsApp'}
        />
    )
}