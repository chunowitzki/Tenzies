export default function Die(props) {
    const { value } = props
    return(
        <button className="die-btn">
            {value}
        </button>
    )
}