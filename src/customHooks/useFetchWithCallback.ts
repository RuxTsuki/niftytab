import { SupabaseCommonResponse } from '@/models';
import { abortController } from '@/utils/abortController';
import { useCallback, useEffect, useRef } from 'react';

type CallApi = {
    fetchFunc: (controller: AbortController) => Promise<SupabaseCommonResponse>
}

/**
 * Custom hook that returns a function to call the fetch (callback that receive the fetch func)
 * @returns callApi `function`.
 */
export const useFetchWithCallback = () => {
    const refAbortController = useRef<AbortController>();

    // func that make the fetch call
    const callApi = useCallback(async ({ fetchFunc }: CallApi) => {
        refAbortController.current = abortController();

        let result: SupabaseCommonResponse = {
            data: [],
            error: null
        };

        try {
            result = await fetchFunc(refAbortController.current);

            if (result.error) {
                console.error(result.error.message);
            }
        } catch (error) {
            console.error(error);
        }

        return result.data;
    }, []);

    useEffect(() => {
        return () => {
            const abortApiCall = () => {
                refAbortController.current?.abort();
            };
            abortApiCall();
        };
    }, [callApi]);

    return { callApi };
};