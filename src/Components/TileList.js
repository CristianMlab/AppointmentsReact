

const TileList = (props) => {

    const getProperties = dataObj => {
        const values = []
        for(const property in dataObj){
            values.push(dataObj[property])
            console.log(property, dataObj[property])
        }                        
        return values.map((val, i) => <p className={'prop' + i} key={'prop' + i}>{ val }</p>)
    }

    return (
        <>
            { props.data.map((dataObj, i) => (
                <div className='tile' key={i}>
                    {getProperties(dataObj)}
                </div>
            )) }
        </>
    );
}

export default TileList;