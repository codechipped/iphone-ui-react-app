import { TbMessageCircle2 } from 'react-icons/tb'
const Message = ({ from, message }) => {
  function getRandomDate() {
    const maxDate = Date.now()
    const timestamp = Math.floor(Math.random() * maxDate)
    return new Date(timestamp)
  }
  const today = getRandomDate()
  let hours = today.getHours()
  if (hours > 12) hours = hours - 12
  console.log(hours)

  const time = String(hours) + ':' + String(today.getMinutes()).padStart(2, '0')

  const day = today.toLocaleDateString('en-US', { weekday: 'short' })

  return (
    <div class="dialog-box">
      <div class="background-blur"></div>
      <div class="header">
        <div class="background-blur"></div>
        <div class="contents">
          <div class="left inline-flex align-middle">
            <TbMessageCircle2 size={'1.5em'} />
            <i className="">{from}</i>
          </div>
          <div class="right">
            {day} {time} pm
          </div>
        </div>
      </div>
      <div class="main-content leading-none text-black text-xs">{message}</div>
    </div>
  )
}

Message.defaultProps = {
  from: '',
  message: '',
}
export default Message
