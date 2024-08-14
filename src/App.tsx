import TopolEditor, {
  TopolPlugin,
  IReactTopolOptions,
} from "@topol.io/editor-react";

function App() {
  const topolOptions: IReactTopolOptions = {
    authorize: {
      apiKey: import.meta.env.VITE_TOPOL_EDITOR_API_KEY as string,
      userId: 1,
    },
    callbacks: {},
  };

  function loadTemplate() {
    fetch("https://tlapi.github.io/topol-editor/templates/1.json")
      .then((response) => response.text())
      .then((template) => {
        TopolPlugin.load(template);
      });
  }

  return (
    <div className="App">
      <TopolEditor options={topolOptions} onInit={loadTemplate} />
    </div>
  );
}

export default App;
