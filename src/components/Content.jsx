import Message from './Message'
// import laptop from '../assets/laptop.png'

const Content = () => {
  return (
    <div className="mx-2 p-0 text-white">
      <Message
        from="Sample Message"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere corporis optio similique hic earum!"
        dest="/about"
      ></Message>
      <Message
        from="Sample Message"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere corporis optio similique hic earum!"
        dest="/about"
      ></Message>
      <Message
        from="Sample Message"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere corporis optio similique hic earum!"
        dest="/about"
      ></Message>
    </div>
  )
}
export default Content
