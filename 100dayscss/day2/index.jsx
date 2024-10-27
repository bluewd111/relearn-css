const activeCss = (isOpen) => isOpen ? 'active' : '';

function App() {
    const [noAnimationCss, setNoAnimationCss] = React.useState('no-animation');
    const [isOpen, setIsOpen] = React.useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
        setNoAnimationCss(''); // 最初だけ no-animation がついていればいいので、常に空にする動き
    }

    return (
        <div className="frame">
            <div className="center">
                <button className={"menu-icon " + activeCss(isOpen)} onClick={handleClick}>
                    <div className={"line-1 " + noAnimationCss}></div>
                    <div className={"line-2 " + noAnimationCss}></div>
                    <div className={"line-3 " + noAnimationCss}></div>
                </button>
            </div>
        </div>
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
