function Tours(props) {
    return (
        <>
            <h2>Tours List</h2>
            {
                props.arrayData.map((item, i) => {
                    return (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <img src={item.image} alt={item.name} />
                        </div>
                    )
                })
            }
        </>
    )
}
export default Tours;