// import React from 'react'

// function getCurrentTime() {
//   return new Date().toTimeString()
// }

// const styles = {
//   color: 'yellow',
//   fontSize: '30px'
// }

// const App = ({ stock }) => {
//   if (stock < 1){
//     styles.color = 'red'
//   }
//   return (
//     <>
//     <div style={styles}>App is running!</div>
//     <p>Current Time is {getCurrentTime()}</p>
//   </>
//   )
// }

// export default App

// _______________________


import React from 'react'
import Card from './Card'
import Comment from './Comment'

const App = () => {
  return (
    <section>
      <Comment 
        name="Sue Smith" 
        date="5/12/2022" 
        comment="React is Cool" 
        avatar="https://i.pravatar.cc/60?1"
      >
        <Comment name="Foo Bar" comment="reply to this" avatar="https://i.pravatar.cc/60?4/"/>
      </Comment>
      <Card>
      <Comment 
        name="Joe Bloggs" 
        date="12/08/2020" 
        comment="Dont know what to say" 
        avatar="https://i.pravatar.cc/60?2/" 
      />
      </Card>
      <Comment 
        name="Jonas Wharol" 
        date="30/5/2018" 
        comment="lol" 
        avatar="https://i.pravatar.cc/60?3/" 
      />
    </section>
  )
}

export default App