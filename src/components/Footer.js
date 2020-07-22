import React from 'react'

export default function Footer(props) {
    return (
        <div>
            <div style={{ color: "white", display: "absolute", bottom: 0, height: "2rem", backgroundColor: props.bgColor, borderTop: "1px solid black", textAlign: "center", width: "100%" }}>
                Made with love by {props.author}
            </div>
            <div className="main-footer">
                <div className="container d-flex footer-box" style={{ justifyContent: "space-between" }}>
                    <div className="row ">
                        {/* column 1 */}
                        <div className="col-md-4 col-sm-5">
                            <h4>lorem ipsum</h4>
                            <ul>
                                <li>Thịt heo</li>
                                <li>Thịt bò</li>
                                <li>Thịt gà</li>

                            </ul>
                        </div>
                        {/* column 2 */}
                        <div className="col-md-4 col-sm-5">
                            <h4>lorem ipsum</h4>
                            <ul>
                                <li>lorem ipsum</li>
                                <li>lorem ipsum</li>
                                <li>lorem ipsum</li>

                            </ul>
                        </div>
                    </div>
                    {/* footer bottom */}
                    <div className="footer-bottom">
                        <p className="text-sx-center">
                            &copy;{new Date().getFullYear()} Meat delivery - On Start
                </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
