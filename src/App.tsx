import TopolEditor, { TopolPlugin, IReactTopolOptions} from "@topol.io/editor-react"

function App() {

  const topolOptions: IReactTopolOptions = {
    authorize: {
      apiKey: 'YOUR_TOKEN',
      userId: 1
    },
    callbacks: {

    }
  }

    return (
      <div className="App">
        <TopolEditor options={topolOptions}/>
      </div>
    )
  
}

export default App
