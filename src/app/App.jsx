import Gallery from "@/widgets/Gallery/Gallery"
import { ImageProvider } from "@/entities/gallery"

import './styles/reset.css'
import './styles/variables.css'

const App = () => {

  return (
    <ImageProvider>
      <Gallery />
    </ImageProvider>
  )
}

export default App
