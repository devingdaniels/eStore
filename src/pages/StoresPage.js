import React from "react"
import StoreTable from '../components/StoreTable'
import ZipSearch from '../components/ZipSearch'

function StoresPage({stores} ){
    return (
        <>
        <h2>Welcome to the Store Page</h2>
        <p>Use the search to see if there is a store near you.</p>
        <StoreTable stores={stores}/>
        <ZipSearch stores={stores}/>
        </>
    )
}


export default StoresPage