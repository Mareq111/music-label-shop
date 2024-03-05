/* eslint-disable react/prop-types */


export default function TextCompositionItem({composition}) {
  return (
    <div className="compositionItem-div">
    <h3 className="detailedInfo-h">Composition:</h3>
    <p className="detailedInfo-p">{composition}</p>
  </div>
  )
}
