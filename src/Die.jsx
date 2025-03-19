export default function Die(props) {
    const { value, isHeld, id, hold } = props

    const style = { backgroundColor: isHeld ? "#59E391" : ''}

    return(
        <button className="die-btn" style={style} onClick={()=> hold(id)}>
            {value}
        </button>
    )
}