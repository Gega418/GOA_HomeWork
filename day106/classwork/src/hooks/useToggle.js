import { useState } from "react";

function useToggle(iniValue) {
    const [dark, setDark] = useState(iniValue)

    const handleDark = () => {
        setDark(!dark)
        console.log(dark);
    }
    return [dark, handleDark]
}

export default useToggle