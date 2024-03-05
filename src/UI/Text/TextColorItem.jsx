/* eslint-disable react/prop-types */

export default function TextColorItem({color}) {
  return (
    <div className='colorItem-div'>
    <h3 className="detailedInfo-h">Color:</h3>
    <p className="detailedInfo-p">{color}</p>
  </div>
  )
}
