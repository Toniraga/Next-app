import React from 'react'
import headerStyles from '../styles/Header.module.css';

const Header: React.FC = () => {
    return (
        <div>
            <h1 className={`title ${headerStyles.title}`}><span>NextDev</span> Starter </h1>
            <p> Getting Started with Next Js, the best way to write React Js code. </p>
            {/* css in js */}
            <style jsx>
                {`
                  .title {
                    color: #555;
                  }
                `}
            </style>
        </div>
    )
}

export default Header
