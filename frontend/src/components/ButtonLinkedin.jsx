import Button from "./Button";
import ProfileData from '../data/ProfileInfo.json'

export default
function ButtonLinkedin()
{
    return(
        <Button
            Type={'a'}
            ClassName={'Profilelinkedin'}
            Href={ProfileData.Social[0]}
            Target={'_blank'}
            Rel={'noopener noreferrer'}
            ClassImage={'PhoneImage'}
            Image={'images/ico/LogoLinkedin.png'}
            VerticalDiviser={'Divider'}
            Text={'LinkedIn'}
        />
    );
}