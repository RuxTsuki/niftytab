import { Themes } from "@/theme/theme.types";

export const chrome = {
    storage: {
        sync: {
            set: (a: any, b: any) => { },
            get: async (a: any): Promise<{
                theme: '' | Themes
            }> => {
                return { 
                    then(onfulfilled, onrejected) {
                        
                    },
                }
            }
        }
    }
}

export default chrome;