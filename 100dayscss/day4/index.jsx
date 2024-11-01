function App() {
    return (
        <div className="frame">
            <div className="dot-1"></div>
            <div className="dot-2"></div>
            <div className="dot-3"></div>
        </div>
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
