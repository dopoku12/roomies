// const sideImgOne = 'public/connections (1).svg'
// const sideImgTwo = 'public/home.svg'


function Main(props) {

    console.log("header Main.js:", props.cardHeader)
    console.log("body Main.js", props.cardMain)
    return (
        <div>
            <article className="Main">
                <input className="search" type="search" placeholder="Post Something..." />
                {props.faIcons}
            </article>
            <div className='post-Card'>
                <h1>
                    {props.cardHeader}
                </h1>
                <p>
                    {props.cardMain}
                </p>
            </div>

            {
                //    <img className="phoneImg" src={sideImgOne} alt="friends-on-phone" />
            }
            {
                // <img className="laptopImg" src={sideImgTwo} alt="friends-on-laptop" />
            }
        </div>

    )
}

export default Main