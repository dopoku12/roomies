function Modal({ closeModal }) {
    return (<div>
        <div className="modal-backdrop" onClick={() => closeModal(false)} >
        </div>
        <section className="modal-card">

            <div className="modal-content">
                <button onClick={() => closeModal(false)}>X</button>
                <input type="text" placeholder="Enter title..." className="post-title" />
                <input type="text" placeholder="Share with us..." className="post-content" />
                <input type="submit" value="Post" className="postBtn" onClick={() => closeModal(false)} />
            </div>

        </section>
    </div>

    )
}

export default Modal