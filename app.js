// Utility: Create an element
function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    for (const [key, value] of Object.entries(attributes)) {
        if (key.startsWith("on")) {
            element.addEventListener(key.substring(2).toLowerCase(), value);
        } else if (key === "className") {
            element.className = value;
        } else {
            element.setAttribute(key, value);
        }
    }
    children.forEach(child => {
        if (typeof child === "string") {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });
    return element;
}

// Windows98Popup Component
function Windows98Popup(imageSrc, onClose) {
    const popup = createElement("div", { className: "windows98-popup" }, [
        createElement("div", { className: "windows98-header" }, [
            createElement("span", {}, []),
            createElement("button", { className: "close-btn", onClick: onClose }, ["X"])
        ]),
        createElement("div", { className: "windows98-body" }, [
            createElement("img", { src: imageSrc, alt: "Popup Image" }, [])
        ])
    ]);
    return popup;
}

// Alert Component
function Alert(open, setPopup) {
    if (!open) return null;

    const alertContainer = createElement("div", { className: "alert-container" }, [
        createElement("div", { className: "alert" }, [
            createElement("div", { className: "button-group" }, [
                "This website has been developed and implemented in conjunction with the KGT. By clicking ACCEPT below, you agree to being subject to interminable surveillance, behavioral modification, remote dream transmissions, coercive persuasion, and undisclosed psychological experimentation.",
                createElement("div", { className: "butonlar" }, [
                    createElement("button", {
                        className: "close-btn1",
                        onClick: () => setPopup(false)
                    }, ["ACCEPT"]),
                    createElement("button", {
                        className: "close-btn2",
                        onClick: () => {
                            setPopup(false);
                            const popup = Windows98Popup("tm10vaoxbq6b1.jpg", () => {
                                document.body.removeChild(popup);
                            });
                            document.body.appendChild(popup);
                        }
                    }, ["REJECT"])
                ])
            ])
        ])
    ]);
    return alertContainer;
}

// App Component
function App() {
    let popupOpen = true;

    const setPopup = (state) => {
        popupOpen = state;
        renderApp();
    };

    function renderApp() {
        const root = document.getElementById("alert-root");
        root.innerHTML = ""; // Clear the root
        const alertComponent = Alert(popupOpen, setPopup);
        if (alertComponent) root.appendChild(alertComponent);
    }

    renderApp();
}

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
    App();
});
