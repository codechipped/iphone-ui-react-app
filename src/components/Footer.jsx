import { MdEmail } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
const Footer = () => {
  return (
    <>
      <button
        className="btn btn-circle btn-ghost btn-active absolute bottom-[2.75em] right-[17.5em]"
        onClick={(e) => {
          window.location.href = 'mailto:contact@samueldavidson.dev'
          e.preventDefault()
        }}
      >
        <MdEmail color="white" size={'2em'} />
      </button>
      <button className="btn btn-circle btn-ghost btn-active absolute bottom-[2.75em] right-[1.85em]">
        <a href="https://github.com/codechipped" target="_new">
          <FaGithub color="white" size={'2em'} />
        </a>
      </button>
    </>
  )
}
export default Footer
