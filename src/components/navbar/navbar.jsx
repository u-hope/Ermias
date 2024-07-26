import './navbar.css'

function Navbar(props) {
  return (
        <div className='main_nav'>

            <div className='left'>
              <ul>
                    <li className='nav_list'>Home</li>
                </ul>
            </div>

            {/* <div className='middle'>
              <ul>
                  <li className='nav_list'>Home</li>
                  <li className='nav_list'>About</li>
                  <li className='nav_list'>Prvious Works</li>
                  <li className='nav_list'>Skills & Experiences</li>
                  <li className='nav_list'>Contact</li>
              </ul>
            </div> */}


            <div className='right'>
              <ul>
                    <li className='nav_list'>{props.phone}</li>
                    <li className='nav_list'>{props.phoneTwo}</li>
              </ul>
            </div>
        </div>
  )
}

export default Navbar
