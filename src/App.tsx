import { Suspense } from "react"

import PublicRoutes from 'routes/PublicRoutes'
import Header from 'features/Header'
import { AppStyles, Footer } from 'App.styled'
//import PrivateRoutes from "routes/PrivateRoutes"

export const App = () => {
    return <>
        <AppStyles />

        <Header /> 

        <Suspense fallback={'loading...'}>
            <PublicRoutes/>
            {/*<PrivateRoutes />*/}
        </Suspense>

        <Footer>
            <div>Marketplace</div>
        </Footer>
    </>
}

export default App