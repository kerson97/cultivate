import './LeftBar.scss'
import Friends from '../../assets/1.png'
import Groups from '../../assets/2.png'
import Market from '../../assets/3.png'
import Watch from '../../assets/4.png'
import Memories from '../../assets/5.png'
import Events from '../../assets/6.png'
import Gaming from '../../assets/7.png'
import Gallery from '../../assets/8.png'
import Videos from '../../assets/9.png'
import Messages from '../../assets/10.png'
import Tutorials from '../../assets/11.png'
import Courses from '../../assets/12.png'
import Fund from '../../assets/13.png'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import { BookmarkAddTwoTone } from '@mui/icons-material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import { AuthContext } from '../../context/authContext'
import { useContext } from 'react'

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className='leftBar'>
      <div className='container'>
        <div className='menu'>
          <div className='user'>
            <img src={currentUser.profilePic} alt='' />
            <span>{currentUser.name}</span>
          </div>
          <div className='item'>
            <HomeOutlinedIcon />
            <span>Home</span>
          </div>

          <div className='item'>
            <Diversity3OutlinedIcon />
            <span>Friends</span>
          </div>
          <div className='item'>
            <ForumOutlinedIcon />
            <span>Messages</span>
          </div>
          <div className='item'>
            <NotificationsOutlinedIcon />
            <span>Notifications</span>
          </div>
          <div className='item'>
            <Person2OutlinedIcon />
            <span>Profile</span>
          </div>
        </div>
        <hr />
        <div className='menu'>
          <span>Your Lab</span>
          <div className='item'>
            <StorefrontOutlinedIcon />
            <span>Vendors</span>
          </div>
          <div className='item'>
            <MenuBookOutlinedIcon />
            <span>Guides</span>
          </div>
          <div className='item'>
            <CatchingPokemonIcon />
            <span>Species</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar
