import React from "react";
import Slider from "react-slick";
import styles from "./SliderSlick.scss";
import picture from "../../../img/img.jpg";
import picture2 from "../../../img/img2.jpg";
import picture3 from "../../../img/img3.jpg";

class SliderSlick extends React.Component {
    constructor() {
        super();
        this.state = {
            slideIndex: 0,
        };
        this.settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            beforeChange: (current, next) => {
                this.setState({
                    slideIndex: next,
                })
            },
        };
    }


    render() {

        const slides = [
            {
                picture: picture,
                btitle: "Your",
                title: "Beautiful Escape",
                descr: "One of&nbsp;the greatest things about the sport of&nbsp;surfing is&nbsp;that you <br/> need only three things: your body, <br/>a&nbsp;surfboard, and a&nbsp;wave."
            },
            {
                picture: picture2,
                btitle: "Your",
                title: "Beautiful Escape2",
                descr: "One of&nbsp;the greatest things about the sport of&nbsp;surfing is&nbsp;that you <br/> need only three things: your body, <br/>a&nbsp;surfboard, and a&nbsp;wave."
            },
            {
                picture: picture3,
                btitle: "Your",
                title: "Beautiful Escape3",
                descr: "One of&nbsp;the greatest things about the sport of&nbsp;surfing is&nbsp;that you <br/> need only three things: your body, <br/>a&nbsp;surfboard, and a&nbsp;wave."
            },
        ];

        const sliedeItems = slides.map((slide, i) =>
            <div key={i}>
                <ul className={styles.grid}>
                    <li className={styles.gridItem}>
                        <div className={styles.wrap}>
                            <div className={styles.btitle}>{slide.btitle}</div>
                            <h2 className={styles.title}>{slide.title}</h2>
                            <p className={styles.descr} dangerouslySetInnerHTML={{__html: slide.descr}}>
                            </p>
                        </div>
                    </li>
                    <li className={styles.gridItem} style={{backgroundImage: `url(${slide.picture})`}}>
                    </li>
                </ul>
            </div>
        );

        return (
            <React.Fragment>
                <div className={styles.sliderwrap}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <span className={styles.listActive}>{this.state.slideIndex + 1}</span>
                        </li>
                        <li className={styles.listItem}>
                            <span className={styles.listLast}>{slides.length}</span>
                        </li>
                    </ul>
                    <Slider {...this.settings}>
                        {sliedeItems}
                    </Slider>
                </div>
            </React.Fragment>
        )
    }
}

export default SliderSlick;
