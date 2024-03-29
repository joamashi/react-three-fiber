import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import App from 'Pages/App'

import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'Style/tailwind.css'
import 'Style/App.scss'

import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider value={{}}>
        <App />
      </PrimeReactProvider>
    </QueryClientProvider>
  </BrowserRouter>
)

// primereact/resources/themes/bootstrap4-light-blue/theme.css
// primereact/resources/themes/bootstrap4-light-purple/theme.css
// primereact/resources/themes/bootstrap4-dark-blue/theme.css
// primereact/resources/themes/bootstrap4-dark-purple/theme.css
// primereact/resources/themes/md-light-indigo/theme.css
// primereact/resources/themes/md-light-deeppurple/theme.css
// primereact/resources/themes/md-dark-indigo/theme.css
// primereact/resources/themes/md-dark-deeppurple/theme.css
// primereact/resources/themes/mdc-light-indigo/theme.css
// primereact/resources/themes/mdc-light-deeppurple/theme.css
// primereact/resources/themes/mdc-dark-indigo/theme.css
// primereact/resources/themes/mdc-dark-deeppurple/theme.css
// primereact/resources/themes/tailwind-light/theme.css
// primereact/resources/themes/fluent-light/theme.css
// primereact/resources/themes/lara-light-blue/theme.css
// primereact/resources/themes/lara-light-indigo/theme.css
// primereact/resources/themes/lara-light-purple/theme.css
// primereact/resources/themes/lara-light-teal/theme.css
// primereact/resources/themes/lara-dark-blue/theme.css
// primereact/resources/themes/lara-dark-indigo/theme.css
// primereact/resources/themes/lara-dark-purple/theme.css
// primereact/resources/themes/lara-dark-teal/theme.css
// primereact/resources/themes/soho-light/theme.css
// primereact/resources/themes/soho-dark/theme.css
// primereact/resources/themes/viva-light/theme.css
// primereact/resources/themes/viva-dark/theme.css
// primereact/resources/themes/mira/theme.css
// primereact/resources/themes/nano/theme.css
// primereact/resources/themes/saga-blue/theme.css
// primereact/resources/themes/saga-green/theme.css
// primereact/resources/themes/saga-orange/theme.css
// primereact/resources/themes/saga-purple/theme.css
// primereact/resources/themes/vela-blue/theme.css
// primereact/resources/themes/vela-green/theme.css
// primereact/resources/themes/vela-orange/theme.css
// primereact/resources/themes/vela-purple/theme.css
// primereact/resources/themes/arya-blue/theme.css
// primereact/resources/themes/arya-green/theme.css
// primereact/resources/themes/arya-orange/theme.css
// primereact/resources/themes/arya-purple/theme.css
