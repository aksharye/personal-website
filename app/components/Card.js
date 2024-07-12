'use client'

import { FaGithub } from 'react-icons/fa'

let iconStyle = {'color': '#bae6fd'}
const URI = "https://aksharyeccherla.com/"

const Card = (props) => {
    return (
        <div class="group">
        <div class="overflow-hidden transition duration-1000 group-hover:scale-105 flex rounded-3xl w-[40vh] h-[56vh] object-cover object-center group-hover:opacity-100 opacity-50">
          <div class="absolute top-[28vh] md:top-[28vh] rounded-b-3xl p-5 opacity-80 bg-gray-950 w-[40vh] h-[28vh] object-cover object-center">
            <div class="absolute group-hover:cursor-pointer text-4xl bottom-[2vh] right-[2vh] " onClick={() => window.open(props.github, '_blank')}><FaGithub style={iconStyle}/></div>
            <h2 class="text-sky-100 flex justify-center font-bold text-xl">{props.title}</h2>
            <div class="mt-2 md:mt-5 text-lg text-sky-100 text-center">
              {props.desc}
              <div class="w-3/4 text-center absolute left-5 bottom-[3vh] flex justify-start">
                {props.tags.map((entry) => {
                  return <div key={entry} class="inline text-sm text-gray-950 bg-sky-200 font px-2 md:px-3 rounded-md md:rounded-xl mr-2">{entry}</div>
                })}
              </div>
            </div>
          </div>
          <img class="image rounded-3xl w-[40vh] h-[56vh] object-cover object-center" src={URI + props.image} draggable="false" />

        </div>
        </div>
    )
}

export default Card