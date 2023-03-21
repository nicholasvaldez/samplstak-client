import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Main } from "../components/auth/Main"
import { Register } from "../components/auth/Register"
import { CollectionList } from "../components/collection/CollectionList"
import { DrumkitDetails } from "../components/drumkits/DrumkitDetails"
import { DrumkitForm } from "../components/drumkits/DrumkitForm"
import { DrumkitsList } from "../components/drumkits/DrumkitList"
import { Drumkits } from "../components/drumkits/Drumkits"
import { SampleForm } from "../components/mysounds/EditMySounds"
import { MySoundsList } from "../components/mysounds/MySoundsList"
import { NavBar } from "../components/nav/NavBar"
import { SampleList } from "../components/sample/SampleList"
import { CreatePage } from "../components/utils/CreatePage"
import { Authorized } from "./Authorized"

export const ApplicationViews = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Authorized />}>
          {/* Add Routes here */}
          <Route path="/browse" element={<SampleList />} />
          <Route path="collection" element={<CollectionList />} />
          <Route path="mysounds" element={<MySoundsList />} />
          <Route path="mysounds/new" element={<SampleForm />} />
          <Route path="mysounds/edit/:sampleId" element={<SampleForm />} />
          <Route path="mysounds/create" element={<CreatePage />} />
          <Route path="mysounds/drumkits/new" element={<DrumkitForm />} />
          <Route path="drumkits" element={<DrumkitsList />} />
          <Route
            path="drumkits/detail/:drumkitId"
            element={<DrumkitDetails />}
          />
        </Route>
      </Routes>
    </>
  )
}
