// import Navbar from './Navbar'
import { FaSignal, FaBatteryFull, FaWifi } from 'react-icons/fa'

import Content from './Content'
import Footer from './Footer'
import TimeDate from './TimeDate'

const Window = () => {
  const strokeColor = 'black'
  return (
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1 justify-start bg-animated  min-h-[500px] max-h-screen">
          <div className="flex self-end mt-1 mr-6 flex-row">
            <div className="pr-1">
              <FaSignal color={strokeColor} />
            </div>
            <div className="pr-1">
              <FaWifi color={strokeColor} />
            </div>
            <FaBatteryFull color={strokeColor} />
          </div>
          <div className="container grid grid-cols-1 grid-rows-3 items-stretch overflow-auto min-h-full">
            <div>
              <TimeDate />
            </div>
            <div>
              <Content />
            </div>
            <div className="container relative">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Window
