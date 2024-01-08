import React from 'react';
import Page from "../../layouts/Page/Page";
import {Stories} from "../../components/sections";
import Container from "../../components/Container/Container";

const Main = () => {
    return (
        <Page>
            <section>
                <Container>
                    <Stories/>
                </Container>
            </section>
        </Page>
    );
};

export default Main;