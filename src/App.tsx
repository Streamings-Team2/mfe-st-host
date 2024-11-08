import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Common from 'mfe_st_common/Common';
import Utils from 'mfe_st_utils/Utils';
import Errors from 'mfe_st_errors/Errors';

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Utils />
    <Common />
    <Errors />
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(<App />)