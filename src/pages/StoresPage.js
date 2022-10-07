import React from "react"
import StoreTable from '../components/StoreTable'
import ZipSearch from '../components/ZipSearch'

function StoresPage({stores} ){
    return (
        <>
        <h2>Hello from test in Store pages</h2>
        <p>Some paragrpah info here...</p>
        <StoreTable stores={stores}/>
        <ZipSearch/>
        </>
    )
}


export default StoresPage