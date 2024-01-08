import React from 'react';
import {Header} from "../../components/sections";

const Page = ({children}) => {
    return (
        <div>
            <Header />
            <section>
                {children}
            </section>
        </div>
    );
};

export default Page;