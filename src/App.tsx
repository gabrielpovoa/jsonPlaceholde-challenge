import style from './App.module.css'
import { Header } from './components/header'
import { MainRoutes } from './routes/MainRoutes'

const App = () => {
  return <>
    <div className={style.Hero}>
      <Header />
    </div>
    <div className={style.HeroAlbum}>
      <MainRoutes />
    </div>
  </>
}

export default App
