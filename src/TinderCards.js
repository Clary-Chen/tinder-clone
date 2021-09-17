import React, { useState, useEffect } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import axios from './axios'

const TinderCards = () => {
  const [people, setPeople] = useState([])
  // 透過 後端開好的api 去 後端資料庫 抓資料
  useEffect(() => {
    const fetchData = async ()=>{
      const res = await axios.get('/tinder/cards')
      setPeople(res.data)
    }
    fetchData()
  }, [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div className='tinderCards'>
      <div className='tinderCards__cardContainer'>
        {console.log("people",people)}
        {people.map((person) => {
          return (
            <TinderCard
              className='swipe'
              key={person.name}
              preventSwipe={['up', 'down']}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.imgUrl})` }}
                className='card'
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          )
        })}
      </div>
    </div>
  )
}

export default TinderCards
