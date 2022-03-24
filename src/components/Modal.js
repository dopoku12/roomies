import { useState } from "react";
import Main from "./Main"

function Modal({ closeModal }) {

    const [cardTitle, setCardTitle] = useState(null)
    const [mainCardContent, setMainCardContent] = useState(null)
    const [print, setPrint] = useState(false)
    const inputVal = [
        {
            className: "post-title",
            type: 'text',
            holderText: "Enter title...",
            func: function cardGen(e) {
                setMainCardContent(e.target.value)
                console.log('title:', e.target.value)
            }
        },

        {
            className: "post-content",
            type: 'text',
            holderText: "Share with us...",
            func: function cardGen(e) {
                setCardTitle(e.target.value)
                console.log('Paragraph:', e.target.value)
            }
        },

        {
            className: 'postBtn',
            type: "button",
            value: "Post",
            func: function postContent() {
                setPrint(true)
                closeModal(false)
            }
        },


    ]

    console.log('useState:', mainCardContent);

    inputVal.filter((items))


    return (<div>
        <div className="modal-backdrop" onClick={() => closeModal(false)} >
        </div>
        <section className="modal-card">

            <div className="modal-content">
                <button onClick={() => closeModal(false)}>X</button>
                {inputVal.map((items) => (
                    <div key={items.className}>
                        <input className={items.className} type={items.type} value={items.value} placeholder={items.holderText} onChange={items.func} />
                    </div>
                )


                )
                }

            </div>
        </section>
        {print && <Main cardMain={mainCardContent} />}

        {print && <Main cardHeader={cardTitle} />}

    </div>
    )
}

export default Modal