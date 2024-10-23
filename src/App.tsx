
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from "@/pages/Home"
import {AboutPage} from "@/pages/AboutPage.tsx"
import {ServicesPage} from "@/pages/ServicesPage.tsx";
import {ContactPage} from "@/pages/ContactPage.tsx";
import {GalleryPage} from "@/pages/GalleryPage.tsx"

function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route index element={<Home />} />
              <Route path={"About"} element={<AboutPage />} />
              <Route path={"Services"} element={<ServicesPage />} />
              <Route path={"Contact"} element={<ContactPage />} />
              <Route path={"Gallery"} element={<GalleryPage />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
