import { Typewriter } from "react-simple-typewriter";
import "./App.scss";
import Card from "./components/Card";
import { useState } from "react";
import FormContainer from "./components/FormContainer";

function App() {
  const [view, setView] = useState("home");
  const [searchMode, setSearchMode] = useState("");

  return (
    <div className="App">
      {view === "home" ? (
        <main>
          <header>
            <h3>Sidekick</h3>
          </header>
          <div className="main-column-container">
            <div className="main-left">
              <h1>
                <Typewriter
                  words={[
                    "Let's begin sourcing and pricing to find your perfect part.",
                    "I can see you’re looking for 5 parts for enquiry EA1894.",
                  ]}
                  deleteSpeed={15}
                  typeSpeed={35}
                />
              </h1>
              <p>Start by selecting your search mode and I’ll get to work.</p>

              <div className="glow"></div>
            </div>
            <aside className="main-right">
              <h2>Choose your search mode</h2>
             {/* <Card
                cardNumber="card-1"
                title="Quick search"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis vel nulla et vestibulum."
                isActive={searchMode === "quick" ? "active" : null}
                onClick={() => setSearchMode("quick")}
              />
              <Card
                cardNumber="card-2"
                title="Advanced search"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis vel nulla et vestibulum."
                isActive={searchMode === "advanced" ? "active" : null}
                onClick={() => setSearchMode("advanced")}
                />*/}

              <button
                onClick={() => setView("form")}
              >
                Begin
              </button>
            </aside>
          </div>
        </main>
      ) : (
        <FormContainer />
      )}
    </div>
  );
}

export default App;
