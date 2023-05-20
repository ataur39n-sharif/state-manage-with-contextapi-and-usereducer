import FormDataProvider from '../context/formDataProvider'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <FormDataProvider>
    
    <Component {...pageProps} />
  </FormDataProvider>
}
