import React from 'react'
import propTypes from 'prop-types'

const Search = ({ handleSubmit }) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className='w-100'>{""}
                    Buscar: <input type="text" name="inputText" placeholder="" />
                    <span>  <button className='btn'>&</button></span>
                </label> {""}
                <hr />
            </form>
        </>
    )
}

Search.propTypes = {
    handleSubmit : propTypes.func
}
export default Search