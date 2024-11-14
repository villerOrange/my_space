import s from './PersonalCard.module.css'

function PersonalCard({ fullName, quali, about, img }) {
    return (
        <div className={s.personalInfoContainer}>
            <div className={s.leftSide}>
                <img src={img} alt={`${fullName} avatar`} />
                <p className={s.role}>{quali}</p>
            </div>
            <div className={s.verticalBr}></div>
            <div className={s.rightSide}>
                <h3>{fullName}</h3>
                <p>{about}</p>
            </div>


        </div >
    )
}

export default PersonalCard
