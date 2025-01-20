const Card = (props) => {
    return (
        <>
            <div className="card">
                <h1 className="title">{props.name}</h1>
                <p className="email">{props.email}</p>
                <p className="age">{props.age}</p>
            </div>
        </>
    )
}
// https://github.com/Olabode-cmd/react-class
export default Card;

// .card {
//   padding: 15px 25px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   background: white;
// }