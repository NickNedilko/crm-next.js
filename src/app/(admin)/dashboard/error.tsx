'use client'

import { Button } from "@/app/components/button";

interface ErorComponentProps{
error: Error,
reset: () => void 
}

 const ErrorComponent = ({error, reset}: ErorComponentProps) =>{


    return(
        <div>
            <p>`Something went wrong ${error.message}`</p>
            <Button onClick={reset}>Try again</Button>
        </div>
    )
}

export default ErrorComponent;