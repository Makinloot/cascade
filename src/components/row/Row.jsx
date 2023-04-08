
import './Row.scss'

const Row = ({ data, title }) => {
  return (
    <div>
      <h3 className='row-title'>{title}</h3>
      <div className="row flex-row">
        {data && data.map(item => (
          <div className="row-item flex-col" key={item.id}>
            <img src={item.cover} />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Row