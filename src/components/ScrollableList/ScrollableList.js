import React from 'react'

function ScrollableList({ items }) {
    return (
        <div className="list">
            {items.length !== 0 ?
                items.map((item) => {
                    return item
                }) : <h1>The list is empty.</h1>}
        </div>
    )
}

export default ScrollableList;