import React from 'react'
// Icons
import SmileOutlined from '@ant-design/icons/SmileOutlined';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> Live a Happy life  <SmileOutlined /></p>
        </div>
    )
}

export default Footer
