import React from 'react'

export default function Footer(props) {
    return (
        <div className="footer">
            <div className="" style={{ color: "white",  height: "2rem", backgroundColor: props.bgColor, borderTop: "1px solid black", textAlign: "center", width: "100%" }}>
                Made with love by {props.author}
            </div>

            <div className="" style={{ color: "white", backgroundColor: "black", width: "100%", borderTop: "1px solid black", textAlign: "center" }}>
                {/* column 1 */}
                <div className="row">
                <div className="col-md-4">
                    <h4>Sản phẩm</h4>
                    <ul>
                        <li>Thịt heo</li>
                        <li>Thịt bò</li>
                        <li>Thịt gà</li>

                    </ul>
                </div>
                {/* column 2 */}
                <div className="col-md-4">
                    <h4>lorem ipsum</h4>
                    <ul>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>

                    </ul>
                </div>
                {/* column 3 */}
                <div className="col-md-4">
                    <h4>lorem ipsum</h4>
                    <ul>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>

                    </ul></div>
                </div>
                <p className="text-sx-center">
                    &copy;{new Date().getFullYear()} Meat delivery - On Start
                        </p>
            </div>
            {/* footer bottom */}
         
        </div>
    )
}
