import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Process from './pages/Process'
import BusinessCase from './pages/BusinessCase'
import Knowledge from './pages/Knowledge'
import Solutions from './pages/Solutions'
import Templates from './pages/Templates'
import Assistant from './pages/Assistant'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="process" element={<Process />} />
        <Route path="business-case" element={<BusinessCase />} />
        <Route path="knowledge" element={<Knowledge />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="templates" element={<Templates />} />
        <Route path="assistant" element={<Assistant />} />
      </Route>
    </Routes>
  )
}
