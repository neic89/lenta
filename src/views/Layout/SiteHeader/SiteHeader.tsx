import React from 'react';
import './SiteHeader.scss';

const SiteHeader: React.FC = () => {
    return (
        <header className="site-header">
            <div className="container site-header__container">
                <div>Номенклатурный справочник</div>
            </div>
        </header>
    );
};

export default SiteHeader;
