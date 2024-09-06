import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Mason Davis
            </header>
            <h1>This is my second header</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <img
                src="https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721"
                alt="The best Star Wars Character"
            />
            Best Drinks:
            <ul>
                <li>Water</li>
                <li>Chocolate Milk</li>
                <li>Dr. Pepper</li>
                <li>Cherry Pepsi</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "100px",
                                width: "200px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: "100px",
                                width: "200px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
