/* eslint-disable prettier/prettier */
import { useTheme } from 'next-themes'

export const Logo = () => {
  // const [name, toggleName] = useCycle(false, true);
  const { theme } = useTheme();
  return (
    <div className="flex flex-row">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 458 458"
        key="logo"
        width="70px"
        overflow="visible"
        // whileHover={{ x: 10}}
        // initial={{ x: 100, opacity: 0}}
        // animate={{ x: 0, opacity: 1 }}
        // transition={{ type: "spring", stiffness: 50 }}
        // onMouseDown={() => toggleName()}
        // onMouseUp={() => toggleName()}
        // onMouseEnter={() => toggleName()}
        // onMouseLeave={() => toggleName()}
      >
        {/* dark */}*
        {theme === "light"  ? (
                                  
          <><path
          fill="#1A202C"
          d="M115.17 231.45L143.64 206.1L311.08 394.16L282.61 419.51L115.17 231.45Z" id="bSDweug76" /><path
            fill="#1A202C"
            d="M302.75 290.88L333.91 325.1L303.59 352.71L272.43 318.49L302.75 290.88Z" id="d5VAZoVnp8" /><path
            fill="#1A202C"
            d="M89.69 173.29L129.69 173.29L129.69 213.29L89.69 213.29L89.69 173.29Z" id="e28Bqg0Qj" /><path
            fill="#1A202C"
            d="M333.91 259.95L365.57 259.95L365.57 290.88L333.91 290.88L333.91 259.95Z" id="b1pLj0wSAi" /></>
            
            ) : (
                          <>
                            <path
                                    fill="#ffffff"
                                    d="M115.17 231.45L143.64 206.1L311.08 394.16L282.61 419.51L115.17 231.45Z" id="bSDweug76" /><path
                                      fill="#ffffff"
                                      d="M302.75 290.88L333.91 325.1L303.59 352.71L272.43 318.49L302.75 290.88Z" id="d5VAZoVnp8" /><path
                                      fill="#ffffff"
                                      d="M89.69 173.29L129.69 173.29L129.69 213.29L89.69 213.29L89.69 173.29Z" id="e28Bqg0Qj" /><path
                                      fill=" #ffffff"
                                      d="M333.91 259.95L365.57 259.95L365.57 290.88L333.91 290.88L333.91 259.95Z" id="b1pLj0wSAi" /></>

            )}
     
      </svg>

      
    </div>
  );
};


