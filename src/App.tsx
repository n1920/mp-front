import { Suspense } from "react"

import PublicRoutes from 'routes/PublicRoutes'
import PrivateRoutes from "routes/PrivateRoutes"

export const App = () => {
    return (
        <Suspense>
            <PublicRoutes />
            {/*<PrivateRoutes />*/}
        </Suspense>
    )
}

export default App