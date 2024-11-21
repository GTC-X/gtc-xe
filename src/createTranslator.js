export function createTranslator({ locale, messages }) {
    return (key) => {
        const keys = key.split(".");
        let result = messages;

        for (const k of keys) {
            result = result[k];
            if (!result) {
                console.warn(`Translation key "${key}" not found for locale "${locale}"`);
                return key;
            }
        }

        return result;
    };
}
