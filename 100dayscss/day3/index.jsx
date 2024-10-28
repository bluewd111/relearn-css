
function App() {
    return (
        <div className="frame">
            <div className="center">
                <div className="circle">
                    <div className="sky"></div>
                    <div className="sun"></div>
                    <div className="side-left"></div>
                    <div className="side-right"></div>
                    <div className="shadow"></div>
                    <div className="ground"></div>
                </div>
            </div>
        </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);