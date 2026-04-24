import Button from "./Button"
import ProfileData from '../data/ProfileInfo.json'


export default
function ButtonGithub()
{
    return(
        <Button
            Type={'a'}
            ClassName={'ProfileGithub'}
            Href={ProfileData.Social[1]}
            Target={'_blank'}
            Rel={'noopener noreferrer'}
            ClassImage={'PhoneImage'}
            Image={'images/ico/LogoGithub.png'}
            VerticalDiviser={'Divider'}
            Text={'GitHub'}
        />
    )
}