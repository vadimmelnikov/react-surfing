import React from "react";
import styles from "./App.scss";
import Header from "./Header/Header";
import SliderSlick from "./SliderSlick/SliderSlick";
import Sidebar from "./Sidebar/Sidebar";
import PaypalButton from "./PaypalButton/PaypalButton";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Sidebar/>
                <div className="wrapper-bgr">
                    <span>
                        <i></i>
                    </span>
                </div>
                <div className="container">
                    <Header/>
                    <SliderSlick/>
                </div>
                <div className="container">
                    <div className={styles.center}>
                        <PaypalButton/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default App;
