import { useState } from "react";

export function useLoading(initialValue: boolean) {
    const [isLoading, setIsLoading] = useState(initialValue);

    return {
        isLoading,
        setIsLoading
    }
}