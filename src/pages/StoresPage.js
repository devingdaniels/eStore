import React from "react"
import StoreTable from '../components/StoreTable'
import ZipSearch from '../components/ZipSearch'

function StoresPage({stores} ){
    return (
        <>
        <h2>Welcome to the Store Page</h2>
        <p>Here is a list of available stores. Use the  </p>
        <StoreTable stores={stores}/>
        <ZipSearch stores={stores}/>
        </>
    )
}


export default StoresPage