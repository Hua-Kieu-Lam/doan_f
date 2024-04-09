import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './global.css'
import AppRoutes from './AppRoutes'
import Auth0ProviderNavigate from './auth/Auth0ProviderNavigate'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux';
import { store } from './redux/redux'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Auth0ProviderNavigate>
            <AppRoutes />
          </Auth0ProviderNavigate>
        </QueryClientProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
)
