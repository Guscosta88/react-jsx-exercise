import React from 'react'

const defaultAvatar = 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'

const Comment = ({ avatar, name, date, comment, children }) => {
    console.log('children')
  return (
    <div>
        <article>
    <header>
      {avatar ? <img width={30} src={avatar} alt={`Avatar Image of ${name ? `of ${name}` : ''}`} /> : ''}
      <p>{name || 'Unknown'}</p>
      <time>{date}</time>
    </header>
    <p>{comment}</p>
    <div>{children}</div>
  </article>
  </div>
  )
}

export default Comment