import React, { useState } from 'react'
import { SlLocationPin } from 'react-icons/sl'
import clearsun from '../assets/gifsun.gif'
import rain from '../assets/gifrain.gif'
import cloud from '../assets/cloudgif.gif'
import sunup from '../assets/sunrise.gif'
import sundown from '../assets/sunset.gif'
import { format, fromUnixTime } from 'date-fns'
import { RiArrowDropDownLine } from 'react-icons/ri'
function WeatherDetail({ weather, setCountry, countries }: any) {
  const [inputValue, setInputValue] = useState('')

  const temperature = weather?.main?.temp
  const humidity = weather?.main?.humidity
  const sunRise = weather?.sys?.sunrise
  const sunSet = weather?.sys?.sunset

  // Convert the Unix timestamp to a readable time format
  const sunriseTime = sunRise ? format(fromUnixTime(sunRise), 'p') : 'N/A'
  const sunsetTime = sunSet ? format(fromUnixTime(sunSet), 'p') : 'N/A'

  const handleButtonClick = () => {
    setCountry(inputValue)
  }

  const backgroundMain = () => {
    const sky = weather?.weather?.map((item: any) => item.main)
    console.log(sky)
    if (sky && sky[0] === 'Clouds') {
      // Check if sky has data and the first item is 'Clear'
      return cloud
    }
    if (sky && sky[0] === 'Rain') {
      // Check if sky has data and the first item is 'Clear'
      return rain
    }
    return clearsun
  }
  return (
    <div className="flex flex-col justify-between">
      <div id="location" className="flex gap-3 justify-between ">
        <label
          className="block font-poppins  bg-clip-text  font-extrabold text-transparent bg-gradient-to-r from-violet-900 to-x to-slate-900 tracking-wide text-darkBlue text-sm my-3"
          htmlFor="store_id"
        >
          Country
        </label>
        <div className="relative ">
          <select
            className="block appearance-none font-roboto tracking-wide w-full text-sm bg-white/15 border text-darkBlue py-3 px-4 pr-8 rounded leading-tight focus:bg-white/10 focus:outline-none"
            id="store_id"
            onChange={event => setInputValue(event.target.value)}
          >
            <option className='text-center ' value="">Select Country</option>
            {countries.map((country: any, index: React.Key | null | undefined) => (
              <option className='text-center bg-blend-soft-light  backdrop-blur-sm border-0 font-poppins tracking-wider rounded-xl p-3 bg-white/10' key={index} value={country || ''}>
                {country || 'Unknown Country'}
              </option>
            ))}
          </select>

          {/* {errors.store_id && (
                    <p className="text-red-500 text-xs italic">
                      {errors.store_id.message}
                    </p>
                  )} */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
            <RiArrowDropDownLine size={30} className="fill-current" />
          </div>
        </div>
        <button
          onClick={handleButtonClick}
          className="ml-2 p-2 hover:bg-white/5 bg-blend-soft-light backdrop-blur-sm border-0 font-poppins tracking-wider rounded-xl  bg-white/30"
        >
          Check Weather
        </button>
        <SlLocationPin size={30} className="mt-2 animate-bounce" />
      </div>
      <div
        id="detail"
        className=" mt-[2vh]  mb-40 flex flex-col bg-cover bg-blend-soft-light  backdrop-blur-sm border-0 font-poppins tracking-wider rounded-xl p-3 bg-white/10"
      >
        <div className="flex justify-center">
          <h1 className="bg-clip-text text-3xl text-transparent bg-gradient-to-r from-violet-900 to-x to-slate-900">
            {weather.name}
          </h1>
        </div>

        <div className="flex justify-between ">
          <div>
            <img
              src={backgroundMain()}
              className="rounded-full w-[60vh] h-[30vh] bg-blend-darken"
              alt="Clear Sun"
            />
          </div>
          <div className="flex text-left mt-6 flex-col items-end mr-16">
            <h2 className="font-medium bg-clip-text text-xl text-transparent bg-gradient-to-r from-slate-900 to-violet-900">
              <label
                htmlFor="Temp"
                className="font-poppins text-pretty tracking-widest"
              >
                Temp:
              </label>
              {temperature}C
            </h2>
            <h2 className="font-medium text-pretty text-left bg-clip-text text-xl text-transparent bg-gradient-to-r from-slate-900 to-violet-900">
              <label htmlFor="Temp" className="font-poppins tracking-widest">
                Humidity:
              </label>
              {humidity}
            </h2>
          </div>
        </div>

        <div className="flex justify-between     ">
          <div>
            <h1 className="mt-[20%] text-pretty  font-medium text-left bg-clip-text text-xl text-transparent bg-gradient-to-r from-slate-900 to-violet-900">
              <span>Sun Rises: </span>
              {sunriseTime}
            </h1>
            <img
              src={sunup}
              className=" w-[30vh] h-[20vh] rounded-full"
              alt="Clear Sun"
            />
          </div>
          <div>
            <h1 className="mt-[20%] text-pretty  font-medium text-left bg-clip-text text-xl text-transparent bg-gradient-to-r from-slate-900 to-violet-900">
              <span>Sun Set: </span>
              {sunsetTime}
            </h1>
            <img
              src={sundown}
              className="    w-[30vh] h-[20vh] rounded-full"
              alt="Clear Sun"
            />
          </div>
        </div>
      </div>
      <div id="for extra wait"></div>
    </div>
  )
}

export default WeatherDetail
