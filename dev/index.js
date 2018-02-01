const React = require("react");
const ReactDOM = require("react-dom");

class Content extends React.Component {
    render() {

        return (
            <div>
                4564564
            </div>
        )
    }
}
var el = (
    <div>
        <Content />
    </div>
)
ReactDOM.render(el, document.getElementById("index"));