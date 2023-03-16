import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { SamplStak } from "./SamplStak"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <SamplStak />
  </BrowserRouter>
)
