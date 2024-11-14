import s from './CardTitleInfo.module.css'

function CardTitleInfo({ title, text }) {
    return (
        <div className={s.card}>
            <h3>{title}</h3>
            <hr />
            <p>{text}</p>
        </div>
    )
}

export default CardTitleInfo
