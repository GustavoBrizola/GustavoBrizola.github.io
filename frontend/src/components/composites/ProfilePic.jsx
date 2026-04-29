import './styles/ProfilePic.css'
import ProfileData from '../../data/ProfileInfo.json'

// Elements
import ListPersonalInfo from '../elements/list/ListPersonalInfo';
import '../elements/list/styles/ListPersonalInfo.css';


export default
function ProfilePic()
{
  return (
    <div className='ProfilePic'>
      <img className='ProfilePicWallpaper'
        src='Portfolio/images/photos/Wallpaper.jpg'
        alt='Wallpaper'
      />
      <div className='ProfilePicContent'>
        <img className='ProfilePicPhoto'
          src='Portfolioimages/photos/ProfilePicPhoto.png'
          alt='Pic'
        />
        {ProfileData.Name}
        <ListPersonalInfo/>
      </div>
    </div>
  )
}