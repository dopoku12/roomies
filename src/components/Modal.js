import { useState } from "react";
import Main from "./Main"

function Modal({ closeModal }) {

    const [cardTitle, setCardTitle] = useState(null)
    const [mainCardContent, setMainCardContent] = useState(null)
    const [print, setPrint] = useState(false)
    const inputVal = [
        {
            idName: "post-title",
            type: 'text',
            holderText: "Enter title...",
            func: function cardGen(e) {
                setMainCardContent(e.target.value)
                console.log('title:', e.target.value)
            }
        },

        {
            idName: "post-content",
            type: 'text',
            holderText: "Share with us...",
            func: function cardGen(e) {
                setCardTitle(e.target.value)
                console.log('Paragraph:', e.target.value)
            }
        },

        {
            idName: 'postBtn',
            type: "button",
            value: "Post",
            func: function postContent() {
                setPrint(true)
                closeModal(false)
            }
        },


    ]

    console.log('useState:', mainCardContent);
    console.log('title', cardTitle);
    const btn = inputVal.filter((items) => items.value)
    console.log('button:', btn);

    return (<div>
        <div id="modal-backdrop" onClick={() => closeModal(false)} >
        </div>
        <section id="modal-content" >

            <div id="modal-card" >
                <button onClick={() => closeModal(false)}>X</button>
                {inputVal.map((items) => (
                    <div key={items.idName}>
                        <input id={items.idName} type={items.type} value={items.value} placeholder={items.holderText} onChange={items.func} />
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