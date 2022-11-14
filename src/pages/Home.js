import ExportImport from '../Components/ExportImport'

const Home = (props) => {
    return (
        <>
            <h1>Contacts & Appointments App</h1>
            <ExportImport data={props.data} fileImportChange={props.fileImportChange}/>
        </>
    )
}

export default Home;