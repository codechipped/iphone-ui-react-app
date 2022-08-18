const TimeDate = () => {
  const today = new Date()
  let hour = today.getHours()
  if (hour > 12) hour -= 12
  const time = hour + ':' + String(today.getMinutes()).padStart(2, '0')
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }

  const date = today.toLocaleDateString('en-US', options)
  return (
    <div className="grid grid-cols-1 grid-rows-2 mt-4 text-white font-sans">
      <h1 className="text-6xl text-center font-light">{time}</h1>
      <p className="text-md text-center font-thin">{date}</p>
    </div>
  )
}
export default TimeDate
