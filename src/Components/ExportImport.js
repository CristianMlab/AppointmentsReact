

const ExportImport = (props) => {
    return (
    <>  
        <h3>Export Current Contacts and Appointments</h3>
        <a id="export" href={'data:application/json;charset=utf-8,' + JSON.stringify(props.data)} download='appointments.json'>Export to JSON</a>
        <br/>
        <h3>Import Contacts and Appointments Data</h3>
        <input id="file-import" type='file' accept=".json" onChange={props.fileImportChange}></input>
    </>
    )
}

export default ExportImport;