'use client'

import { Button } from "@/app/components/button";

interface GlobalErrorProps{
error: Error,
reset: () => void 
}

 const GlobalError = ({error, reset}: GlobalErrorProps) =>{


    return(
       <html>
        <body>
        <div>
            <p>`Something global went wrong ${error.message}`</p>
            <Button onClick={reset}>Try again</Button>
        </div>
        </body>
       </html>
    )
}

export default GlobalError;