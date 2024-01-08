import React from 'react';
import {Footer, Header} from "../../components/sections";
import Container from "../../components/Container/Container";

const Page = ({children}) => {
    return (
        <div>
            <Header />
            <section>
                {children}
            </section>
            <Footer />
        </div>
    );
};

export default Page;