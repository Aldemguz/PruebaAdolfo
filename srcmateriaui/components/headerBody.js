import React from 'react';




const headerBody = ({subtittle,content}) => (
            <div className = "node">
                <header><h2>{subtittle}</h2></header> 
                <div><a>{content} </a> </div>
            </div>
)

export default headerBody;