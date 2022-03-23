function Main(props, { children }) {

    function enterHandler() { }
    return (

        <article className="Main">
            <input className="posting" type="search" placeholder="Post Something..." onKeyDown={enterHandler} />
            {props.faIcons}

        </article>

    )
}

export default Main