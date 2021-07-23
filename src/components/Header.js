

export default function Header(props) {
    return (
        <div className="Header">
            <h1>{props.title}</h1>
            {props.children /* reason for this is for BurgerMenu or Stopwatch inclusion */}
        </div>
    )
}