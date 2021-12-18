import './Heroes.css'


function Heroes(props) {
    return (
   <div className='hero-card' >
  <img src={props.img} alt="" />
  <div className='hero-name'>{props.name} </div>
  <div className='hero-text'>{props.powers}</div>
  <div className='hero-text'>{props.universe}</div>
  <div className='hero-text'>{props.alterego}</div>
  <div className='hero-text'>{props.occupation}</div>
  <div className='hero-text'>{props.friends}</div>
  <button>Узнать больше</button>
  </div>
      );
}

export default Heroes; 