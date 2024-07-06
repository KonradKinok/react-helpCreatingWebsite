import { useState, useEffect, useRef } from "react";
import style from "./ReactHooks.module.scss";
import toast, { Toaster } from "react-hot-toast";

export const ReactHooks = () => {

    return (
        <div className={style.container}>
            <h2>React Hooks</h2>
            <ReactUseEffect />
            <ListaZaleznosci />
            <ComponentWillUnmount />
            <EfektPodKonkretneZadania />
            <ZadanieZFilmu />
            <Toaster />
            <ComponentA />
            <ComponentB />
            <ComponentC />
        </div>
    );
};

export const ReactUseEffect = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${value} times`;
    });

    // Analogia do componentDidMount
    useEffect(() => {
        console.log("ReactUseEffect: Mounting phase");
    }, []);

    return (
        <div >
            <h3>UseEffect</h3>
            <p>You clicked {value} times</p>
            <button onClick={() => setValue(value + 1)}>Click me</button>
        </div>
    );
};

export const ListaZaleznosci = () => {
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);

    useEffect(() => {
        console.log(firstValue + secondValue);
    }, [firstValue, secondValue]);

    return (
        <>
            <h3>Lista Zależności</h3>
            <button onClick={() => setFirstValue(value => value + 1)}>
                First: {firstValue}
            </button>
            <button onClick={() => setSecondValue(value => value + 1)}>
                Second: {secondValue}
            </button>
        </>
    );
};

export const ComponentWillUnmount = () => {
    useEffect(() => {
        console.log("ComponentWillUnmount: Mounting phase");

        return () => {
            console.log("ComponentWillUnmount: Unmounting phase");
        };
    }, []);

    return null;
};

export function EfektPodKonkretneZadania() {
    const [username, setUsername] = useState("KonradPoczatkowy");
    const [value, setValue] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // 1. Run effect only on mount to init some library
    useEffect(() => {
        initThirdPartyLibrary();
    }, []);

    // 2. Run effect only when username prop changes
    useEffect(() => {
        fetchUser(username);
    }, [username]);

    // 3. Run effect on value prop change
    useEffect(() => {
        // Do stuff when value prop changes
    }, [value]);

    // 4. Run effect on isLoggedIn state change
    useEffect(() => {
        // Do stuff when isLoggedIn state changes
    }, [isLoggedIn]);

    // 5. Run effect on mount and clean up on unmount
    useEffect(() => {
        const handleKeyDown = e => console.log("keydown event: ", e);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    function initThirdPartyLibrary() {
        setUsername("Konik");
    };

    function fetchUser(username) {

    }
    return (
        <div >
            <h3>EfektPodKonkretneZadania</h3>
            <p>You clicked {value} times</p>
            <button onClick={() => setValue(value + 1)}>Click me</button>
            <p>Your name: {username} </p>
            <button onClick={() => setUsername(value + 1)}>UserName: Click me</button>
        </div>
    );
};

function ZadanieZFilmu() {
    const [formState, setFormState] = useState();
    const [forms, updateForm] = useState({
        login: "",
        password: "",
    });
    const formRef = useRef(null);

    function handleChange(ev) {
        const { value, name } = ev.currentTarget;
        updateForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        setFormState("wysłany");
    }

    function handleReset() {
        updateForm({
            login: "",
            password: "",
        });
        setFormState("wyczyszczony");
    }

    useEffect(() => {
        if (forms.login || forms.password) {
            console.log('Uruchamianie zmiany stanu na "wypełniany"');
            setFormState("wypełniany");
        } else {
            console.log('Uruchamianie zmiany stanu na "pusty"');
            setFormState("pusty");
        }
    }, [forms.login, forms.password]);

    useEffect(() => {
        if (!formState) {
            setFormState("pusty");
        } else {
            toast(`ZadanieZFilmu: Formularz jest ${formState}`, {
                position: "top-center",
                duration: 2500,
            });
        }
    }, [formState]);

    useEffect(() => {
        if (forms.login === "Konik") {
            toast(`ZadanieZFilmu: Witaj ${forms.login}`, {
                position: "top-center",
                duration: 2500,
            });
        }
    }, [forms.login]);
    useEffect(() => {
        const reportClick = () => {
            console.log("ZadanieZFilmu: click!");
        };
        const formElement = formRef.current;
        formElement.addEventListener("click", reportClick);

        return () => {
            formElement.removeEventListener("click", reportClick);
        };
    }, []);

    return (
        <>
            <h3>ZadanieZFilmu</h3>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                onReset={handleReset}
                style={{ height: "10vh" }}>
                <div>
                    <input
                        placeholder="login"
                        type="text"
                        name="login"
                        value={forms.login}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <input
                        placeholder="password"
                        type="password"
                        name="password"
                        value={forms.password}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <button type="submit">Zaloguj</button>
                    <button type="reset">Wyczyść</button>
                </div>
            </form>
        </>
    );
}

// Własne hooki
// ComponentA.jsx
const ComponentA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <h3>Własne hooki: ComponentA</h3>
            <button onClick={openModal}>Open modal</button>
            <ModalA isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};
function ModalA({ isOpen, onClose }) {
    return (
        <>
            <button onClick={onClose}>ModalA: Close modal</button>
            {isOpen && <h3>Modal A open</h3>}
        </>
    );
};

// ComponentB.jsx
const ComponentB = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <h3>Własne hooki: ComponentB</h3>
            <button onClick={openModal}>ComponentB: Open modal</button>
            <ModalB isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

function ModalB({ isOpen, onClose }) {
    return (
        <>
            <button onClick={onClose}>ModalB: Close modal</button>
            {isOpen && <h3>Modal B open</h3>}
        </>
    );
};

// src/hooks/useToggle.js
export const useToggle = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen(isOpen => !isOpen);

    return { isOpen, open, close, toggle };
};

// MyComponent.jsx
const ComponentC = () => {
    const { isOpen, open, close, toggle } = useToggle(true);

    return (
        <>
            <h3>Własne hooki: ComponentC</h3>
            <button onClick={open}>ModalC: Open modal</button>
            <button onClick={toggle}>ModalC: Open/close modal</button>
            <ModalC isOpen={isOpen} onClose={close} />
        </>
    );
};

function ModalC({ isOpen, onClose }) {
    return (
        <>
            {isOpen &&
                <div>
                    <button onClick={onClose}>ModalC: Close modal</button>
                    <h3>Modal C open</h3>
                </div>
            }
        </>
    );
};