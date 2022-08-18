import { FiMail } from 'react-icons/fi'

const Navbar = () => {
  const strokeColor = 'black'

  return (
    <div className="navbar bg-inherit">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke={strokeColor}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple-400 rounded-box w-52 text-white"
          >
            <li>
              <span className="a">Homepage</span>
            </li>
            <li>
              <span className="a">Portfolio</span>
            </li>
            <li>
              <span className="a">About</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <div className="normal-case text-xl text-black">DAVIDSON</div>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke={strokeColor}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button
          className="btn btn-ghost btn-circle"
          onClick={(e) => {
            window.location.href = 'mailto:contact@samueldavidson.dev'
            e.preventDefault()
          }}
        >
          <FiMail stroke={strokeColor} size="20px" />
        </button>
      </div>
    </div>
  )
}
export default Navbar
