// Styles
import './ProfileCard.css';

// Scripts
import TruncateText from '../../scripts/TruncateText';

// Json
import ProfileData from '../../data/ProfileInfo.json'

// Abstractions
import List from                    '../abstractions/List';

// Buttons
import ButtonDownloadResume from    '../elements/buttons/ButtonDownloadResume';
import ButtonLinkedin from          '../elements/buttons/ButtonLinkedin';
import ButtonGithub from            '../elements/buttons/ButtonGithub';
import ButtonEmail from             '../elements/buttons/ButtonEmail';
import ButtonWhatsApp from          '../elements/buttons/ButtonWhatsApp';
// CSS
import                              '../elements/buttons/ButtonDownloadResume.css';
import                              '../elements/buttons/ButtonEmail.css';
import                              '../elements/buttons/ButtonGithub.css';
import                              '../elements/buttons/ButtonLinkedin.css';
import                              '../elements/buttons/ButtonWhatsApp.css';

import ListPersonalInfo from '../elements/list/ListPersonalInfo';
import '../elements/list/ListPersonalInfo.css';

/**
 * Structural profile
 * 
 * @returns The complete Profile Card
 */
export default
function ProfileCard()
{
    // Profile Card Format on HTML
    return (
        <div className='ProfileCard'>
            <div className='ProfileHeader'>
                <div className='ProfileName'>{TruncateText(ProfileData.Name, 50)}</div>
                <div className='ProfilePhrase'>{TruncateText(ProfileData.Phrase, 30)}</div>
            </div>
            <ListPersonalInfo/>
            <div className='ProfileDescription'>{TruncateText(ProfileData.Description, 300)}</div>            
            <hr className='HorizontalDiviser'/>
            <div className='ProfileContacts'>
                {/* Contacs and links of various kinds of social*/}
                <ButtonEmail/>
                <ButtonWhatsApp/>
                <ButtonLinkedin/>
                <ButtonGithub/>
            </div>
            <hr className='HorizontalDiviser'/>
            <ButtonDownloadResume/>
        </div>
    );

}