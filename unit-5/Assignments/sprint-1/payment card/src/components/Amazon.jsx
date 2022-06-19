import React from 'react'

const Amazon = (props) => {
    const st = { theme_color: props.color };
  return (
    <>
      <div className="card" style={{ backgroundColor: st.theme_color }}>
        <div className="frst">
          <div>
            <p className="dt">{props.date}</p>
          </div>
          <div className="imdv">
            <img className="img" src={props.logo} alt="" />
          </div>
        </div>
        <div className='cs'>{props.cs}</div>
        <div className='nm'>{props.nm}</div>
        <div className='os'>{props.os}</div>
      </div>
    </>
  );
}

export default Amazon;