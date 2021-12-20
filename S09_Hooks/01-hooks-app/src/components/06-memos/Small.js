// 116
import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('small llamado')
    return (
        <small>
            {value}
        </small>
    )
})
