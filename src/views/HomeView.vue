<template>
  <SocialIcons />

  <ScrollItem :sections="sectionsArray" />

  <ScrollCheck />

  <section class="hero0 scroll lazyload" v-bind:class="{ active: activeSection === 'section-1' }" id="section-1">
    <div></div>
  </section>

  <section class="row-container scroll subtitle" v-bind:class="{ active: activeSection === 'section-2' }" id="section-2">
    <div class="scroll-scale">
      <div class="row-container" id="enlarge">
        <router-link id="softbtn" to="/web-design">web</router-link>
        <router-link id="softbtn" to="/task-automation">automation</router-link>
        <router-link id="softbtn" to="/content-creation">creation</router-link>
        <router-link id="softbtn" to="/graphic-design">graphic</router-link>
      </div>
      <div class="scroll-scale row-container">
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 980"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xml:space="preserve"
          xmlns:serif="http://www.serif.com/"
          style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2">
          <g id="nms-logo.svg" transform="matrix(3.48501,0,0,3.48501,725.42,477.725)">
            <g transform="matrix(1,0,0,1,-250,-250)">
              <g transform="matrix(0.1,0,0,-0.1,0,500)">
                <path
                  d="M2040,3033C1900,2898 1724,2727 1649,2654L1512,2520L1554,2520C1594,2521 1601,2526 1943,2855C2134,3039 2294,3190 2298,3190C2302,3190 2357,3138 2420,3075L2534,2960L2480,2905C2450,2875 2421,2850 2416,2850C2410,2850 2378,2877 2345,2909L2285,2968L1825,2520L1866,2520C1905,2520 1913,2526 2094,2700C2197,2799 2285,2880 2288,2880C2292,2880 2358,2817 2434,2741L2574,2601L2613,2646C2634,2670 2655,2690 2658,2690C2662,2690 2708,2652 2760,2605C2845,2529 2859,2521 2895,2521L2935,2521L2895,2558C2873,2578 2819,2627 2775,2667L2695,2739L2738,2780C2761,2802 2783,2820 2788,2820C2792,2820 2869,2753 2959,2670C3114,2528 3124,2520 3163,2520C3187,2520 3200,2524 3195,2529C3189,2534 3095,2622 2986,2724L2786,2911L2675,2800L2564,2690L2517,2738C2491,2764 2470,2790 2470,2795C2470,2801 2543,2878 2633,2967L2795,3129L3101,2825C3390,2537 3410,2520 3444,2520C3464,2520 3480,2523 3480,2527C3480,2530 3326,2688 3138,2877L2796,3220L2688,3113L2580,3005L2442,3143C2367,3218 2303,3280 2300,3280C2297,3279 2180,3169 2040,3033Z"
                  style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                <path
                  d="M2175,2623L2068,2525L2109,2522C2147,2519 2156,2524 2215,2576L2280,2632L2349,2576C2408,2528 2423,2520 2459,2520L2501,2520L2438,2578C2404,2609 2354,2654 2329,2678L2283,2720L2175,2623Z"
                  style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                <path
                  d="M700,2495C700,2482 906,2480 2490,2480C4074,2480 4280,2482 4280,2495C4280,2508 4074,2510 2490,2510C906,2510 700,2508 700,2495Z"
                  style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                <g>
                  <path
                    d="M920,2160C920,2100 924,2060 930,2060C936,2060 940,2086 940,2118L941,2175L971,2118C987,2086 1005,2060 1010,2060C1016,2060 1020,2101 1020,2160C1020,2242 1017,2260 1005,2260C993,2260 990,2247 989,2203L989,2145L963,2203C949,2234 934,2260 929,2260C924,2260 920,2215 920,2160Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M1102,2248C1095,2241 1090,2207 1090,2164C1090,2087 1103,2060 1140,2060C1177,2060 1190,2087 1190,2164C1190,2243 1181,2260 1140,2260C1126,2260 1109,2255 1102,2248ZM1168,2170C1170,2109 1160,2084 1136,2093C1124,2098 1120,2114 1120,2165C1120,2228 1121,2231 1143,2228C1162,2225 1165,2218 1168,2170Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M1260,2160C1260,2078 1263,2060 1275,2060C1287,2060 1290,2075 1290,2137C1290,2210 1291,2212 1308,2197C1325,2182 1327,2182 1343,2197C1359,2213 1360,2210 1360,2137C1360,2075 1363,2060 1375,2060C1387,2060 1390,2078 1390,2160C1390,2253 1389,2260 1370,2260C1360,2260 1345,2250 1339,2238L1327,2216L1312,2238C1304,2250 1289,2260 1279,2260C1262,2260 1260,2251 1260,2160Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M1485,2248C1483,2241 1476,2206 1470,2170C1464,2134 1456,2095 1453,2083C1449,2066 1452,2060 1464,2060C1473,2060 1480,2067 1480,2075C1480,2084 1489,2090 1505,2090C1521,2090 1530,2084 1530,2075C1530,2067 1537,2060 1546,2060C1558,2060 1561,2066 1557,2083C1554,2095 1546,2140 1539,2183C1528,2246 1523,2260 1508,2260C1498,2260 1487,2254 1485,2248ZM1519,2138C1520,2119 1515,2110 1505,2110C1488,2110 1487,2122 1497,2171C1502,2199 1504,2201 1511,2185C1515,2174 1519,2153 1519,2138Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M1620,2260L1620,2057L1662,2063C1717,2070 1730,2090 1730,2165C1730,2238 1713,2260 1657,2260L1620,2260ZM1695,2160C1695,2100 1693,2095 1673,2092C1651,2089 1650,2092 1650,2160C1650,2228 1651,2231 1673,2228C1693,2225 1695,2220 1695,2160Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M1800,2160C1800,2078 1803,2060 1815,2060C1827,2060 1830,2078 1830,2160C1830,2242 1827,2260 1815,2260C1803,2260 1800,2242 1800,2160Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M1910,2241C1905,2230 1900,2192 1900,2157C1900,2090 1916,2060 1953,2060C1974,2060 2010,2095 2010,2115C2010,2138 1983,2133 1977,2109C1973,2096 1965,2089 1953,2092C1938,2095 1934,2107 1932,2161C1930,2214 1932,2229 1945,2233C1954,2237 1965,2232 1972,2220C1985,2200 2010,2192 2010,2208C2010,2212 2003,2226 1994,2238C1974,2266 1925,2268 1910,2241Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M2160,2160C2160,2100 2164,2060 2170,2060C2176,2060 2180,2092 2180,2135C2180,2176 2183,2210 2186,2210C2190,2210 2199,2202 2206,2193C2218,2176 2220,2176 2234,2195C2248,2213 2249,2209 2250,2138C2250,2075 2253,2060 2265,2060C2277,2060 2280,2078 2280,2160C2280,2249 2278,2260 2262,2260C2253,2260 2239,2250 2232,2239L2218,2218L2204,2239C2196,2250 2182,2260 2174,2260C2163,2260 2160,2240 2160,2160Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M2350,2260L2350,2060L2395,2060C2428,2060 2440,2064 2440,2075C2440,2085 2430,2090 2410,2090C2383,2090 2380,2093 2380,2120C2380,2147 2383,2150 2410,2150C2430,2150 2440,2155 2440,2165C2440,2175 2430,2180 2410,2180C2385,2180 2380,2184 2380,2205C2380,2226 2385,2230 2410,2230C2430,2230 2440,2235 2440,2245C2440,2256 2428,2260 2395,2260L2350,2260Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M2520,2260L2520,2057L2556,2063C2612,2072 2620,2084 2620,2161C2620,2240 2607,2260 2554,2260L2520,2260ZM2594,2214C2614,2161 2589,2080 2556,2093C2544,2098 2540,2113 2540,2165C2540,2227 2541,2230 2564,2230C2577,2230 2591,2223 2594,2214Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M2690,2160C2690,2078 2693,2060 2705,2060C2717,2060 2720,2078 2720,2160C2720,2242 2717,2260 2705,2260C2693,2260 2690,2242 2690,2160Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M2815,2238C2791,2127 2783,2060 2795,2060C2802,2060 2810,2067 2814,2075C2817,2083 2829,2090 2840,2090C2851,2090 2860,2083 2860,2075C2860,2067 2867,2060 2876,2060C2889,2060 2891,2067 2886,2093C2883,2110 2876,2155 2869,2193C2860,2248 2855,2260 2839,2260C2828,2260 2818,2251 2815,2238ZM2850,2149C2850,2120 2846,2110 2834,2110C2821,2110 2819,2117 2824,2141C2827,2158 2830,2179 2830,2187C2830,2195 2835,2198 2840,2195C2846,2192 2850,2171 2850,2149Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M3044,2235C3023,2203 3033,2176 3076,2149C3113,2126 3118,2098 3087,2092C3075,2089 3067,2096 3063,2109C3057,2133 3030,2138 3030,2115C3030,2094 3066,2060 3088,2060C3115,2060 3142,2094 3138,2121C3136,2134 3119,2155 3100,2168C3059,2195 3054,2205 3070,2225C3085,2243 3110,2233 3110,2209C3110,2199 3117,2190 3125,2190C3145,2190 3144,2224 3124,2244C3101,2268 3063,2264 3044,2235Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M3190,2245C3190,2237 3199,2230 3210,2230C3228,2230 3230,2223 3230,2145C3230,2076 3233,2060 3245,2060C3257,2060 3260,2076 3260,2145C3260,2223 3262,2230 3280,2230C3291,2230 3300,2237 3300,2245C3300,2257 3287,2260 3245,2260C3203,2260 3190,2257 3190,2245Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M3360,2177C3360,2108 3363,2090 3378,2077C3403,2055 3426,2056 3450,2080C3467,2097 3470,2113 3470,2180C3470,2243 3467,2260 3455,2260C3444,2260 3440,2242 3438,2178C3435,2103 3433,2095 3415,2095C3397,2095 3395,2103 3392,2178C3390,2242 3386,2260 3375,2260C3363,2260 3360,2243 3360,2177Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M3540,2260L3540,2057L3578,2063C3634,2072 3653,2102 3648,2174C3643,2241 3626,2260 3573,2260L3540,2260ZM3618,2172C3621,2118 3610,2090 3584,2090C3573,2090 3570,2107 3570,2161C3570,2228 3571,2231 3593,2228C3612,2225 3615,2218 3618,2172Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M3710,2160C3710,2078 3713,2060 3725,2060C3737,2060 3740,2078 3740,2160C3740,2242 3737,2260 3725,2260C3713,2260 3710,2242 3710,2160Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M3827,2242C3801,2214 3804,2106 3830,2080C3855,2055 3882,2054 3903,2078C3926,2103 3927,2222 3904,2244C3883,2265 3847,2264 3827,2242ZM3888,2161C3885,2103 3883,2095 3865,2095C3848,2095 3845,2103 3842,2153C3839,2214 3851,2243 3876,2233C3887,2229 3890,2212 3888,2161Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M3996,2244C3965,2214 3985,2168 4045,2134C4057,2128 4061,2118 4057,2107C4048,2084 4019,2086 4013,2110C4006,2135 3980,2136 3980,2112C3980,2062 4056,2046 4080,2090C4096,2120 4084,2146 4045,2169C4009,2190 3998,2223 4024,2233C4040,2239 4060,2222 4060,2203C4060,2196 4067,2190 4075,2190C4096,2190 4094,2223 4072,2243C4049,2264 4016,2265 3996,2244Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                </g>
                <g transform="matrix(1.25204,0,0,1.25204,-629.369,-558.648)">
                  <g transform="matrix(1.11603,-1.42094e-17,-1.42094e-17,1,-217.186,0)">
                    <path
                      d="M1872,1908C1873,1847 1873,1846 1879,1890L1886,1935L1894,1891C1900,1860 1905,1851 1911,1861C1916,1869 1920,1884 1920,1895C1920,1910 1917,1911 1911,1902C1906,1893 1901,1902 1896,1929C1886,1992 1870,1978 1872,1908Z"
                      style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  </g>
                  <path d="M1926,1913C1935,1835 1940,1834 1940,1908C1940,1943 1936,1970 1930,1970C1924,1970 1922,1949 1926,1913Z" style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M1994,1957C1991,1949 1990,1923 1992,1899C1994,1863 1999,1855 2015,1855C2033,1855 2035,1862 2035,1910C2035,1954 2032,1965 2017,1968C2008,1970 1997,1965 1994,1957ZM2028,1913C2026,1886 2021,1865 2015,1865C2010,1865 2004,1886 2002,1913C1999,1951 2002,1960 2015,1960C2028,1960 2031,1951 2028,1913Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M2087,1920C2092,1869 2104,1840 2114,1851C2123,1860 2137,1969 2128,1964C2124,1961 2120,1944 2120,1925C2120,1884 2100,1867 2099,1907C2099,1922 2095,1944 2090,1955C2084,1968 2083,1956 2087,1920Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <g transform="matrix(3.02037,-2.2609e-16,-2.2609e-16,1.1742,-4415.03,-339.728)">
                    <path d="M2183,1910C2183,1874 2185,1860 2187,1878C2189,1895 2189,1925 2187,1943C2185,1960 2183,1946 2183,1910Z" style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  </g>
                  <g transform="matrix(3.02037,-2.2609e-16,-2.2609e-16,1.1742,-3994.13,-336.477)">
                    <path d="M2183,1910C2183,1874 2185,1860 2187,1878C2189,1895 2189,1925 2187,1943C2185,1960 2183,1946 2183,1910Z" style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  </g>
                  <path
                    d="M2242,1908C2243,1847 2243,1846 2250,1890L2256,1935L2264,1897C2277,1836 2290,1844 2289,1912C2287,1968 2286,1971 2281,1935L2274,1895L2266,1927C2253,1984 2240,1974 2242,1908Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M2337,1964C2333,1960 2330,1935 2330,1909C2330,1875 2334,1860 2347,1856C2369,1847 2383,1863 2377,1891C2376.03,1895.68 2373.19,1899.99 2371,1900.31C2352.95,1902.9 2364.75,1901.35 2371,1887C2369,1845 2346,1859 2342,1905C2338,1948 2355,1974 2371,1950C2380,1937 2381,1937 2377,1950C2373,1966 2348,1975 2337,1964Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <g transform="matrix(1.41038,-5.02572e-17,-5.02572e-17,1,-1018.45,0)">
                    <path
                      d="M2482,1935C2480,1888 2489,1850 2501,1850C2506,1850 2510,1859 2510,1871C2510,1882 2506,1889 2501,1885C2495,1882 2489,1901 2487,1927C2484,1973 2484,1973 2482,1935Z"
                      style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  </g>
                  <g transform="matrix(1.19868,-2.43316e-17,-2.43316e-17,1,-503.72,2.49712e-15)">
                    <path
                      d="M2517.93,1947.94C2513.57,1917.35 2525.19,1850.63 2542,1850C2546,1849.85 2550,1867 2549,1888C2548,1921 2547,1922 2540,1900C2533,1879 2532,1881 2531,1917C2530,1959 2523.71,1988.53 2517.93,1947.94Z"
                      style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  </g>
                  <g transform="matrix(1.00139,4.36385e-17,4.36385e-17,1.35773,-8.17661,-703.335)">
                    <path d="M2552,1950C2552,1936 2554,1931 2557,1938C2559,1944 2559,1956 2557,1963C2554,1969 2552,1964 2552,1950Z" style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  </g>
                  <g transform="matrix(1.05469,-6.69801e-18,-6.69801e-18,1,-147.443,0)">
                    <path
                      d="M2658,1963C2659.71,1962.83 2666.47,1961.68 2667.14,1958.82C2669.24,1949.85 2668.9,1919.29 2669.45,1901.89C2669.87,1888.48 2672.4,1861.68 2674,1860.54C2675.6,1859.39 2678.82,1891.4 2679.03,1895.04C2680.02,1912.1 2679.07,1955.31 2686.59,1958.82C2703.94,1966.92 2734.54,1969.2 2674,1969C2648.57,1969.04 2626.88,1966.04 2658,1963Z"
                      style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  </g>
                  <path
                    d="M2740,1908C2740,1874 2743,1850 2748,1854C2755,1862 2756,1867 2759,1896C2761,1922 2784,1906 2791,1874C2796,1854 2798,1864 2799,1908C2800,1949 2796,1969 2790,1965C2784,1961 2782,1955 2784,1951C2787,1947 2784,1938 2779,1930C2771,1917 2769,1917 2761,1929C2756,1937 2754,1949 2757,1957C2760,1964 2757,1970 2751,1970C2744,1970 2740,1947 2740,1908Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M2895,1954C2896.96,1946.15 2909.65,1932.51 2913.08,1916.26C2914.89,1907.66 2911.69,1896.73 2913.08,1888.78C2912.94,1879.95 2914.14,1872.97 2914.91,1868.35C2916.38,1859.52 2918.34,1858.78 2919,1866C2920,1878 2927,1906 2935,1929C2943,1951 2945,1970 2940,1970C2934,1970 2930,1962 2930,1952C2930,1920 2917,1918 2903,1947C2895,1965 2892,1967 2895,1954Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M2986,1954C2975,1926 2980,1884 2995,1864C3010,1845 3010,1845 3025,1864C3052,1899 3042,1970 3010,1970C3000,1970 2989,1963 2986,1954ZM3020,1910C3020,1883 3016,1860 3010,1860C3005,1860 3000,1883 3000,1910C3000,1938 3005,1960 3010,1960C3016,1960 3020,1938 3020,1910Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                  <path
                    d="M3084,1915C3085,1862 3087,1855 3105,1855C3123,1855 3125,1862 3126,1915L3127,1975L3121,1920C3118,1890 3111,1865 3105,1865C3100,1865 3092,1890 3089,1920L3083,1975L3084,1915Z"
                    style="fill: rgb(41, 41, 41); fill-rule: nonzero" />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </section>

  <section class="hero1 lazyload">
    <div></div>
  </section>

  <section class="scroll" id="section-3" v-bind:class="{ active: activeSection === 'section-3' }">
    <div class="scroll-scale column-container">
      <h2 class="scroll-scale">Our Mission</h2>
      <h4 class="scroll-scale" id="enlarge">
        At NMS our mission is to elevate small businesses, artisans and entrepreneurs by creating innovative solutions to help with managing online assets. We understand that the requirements to keep
        up with the latest trends or digital demands can be overwhelming for small businesses and artisans.
      </h4>
      <h4 class="scroll-scale" id="enlarge">
        Our dedicated team provides personalized support and practical tools tailored to meet the unique needs of each client. By offering accessible resources and guidance, we ensure that our clients
        can navigate the digital landscape with confidence and ease.
      </h4>
      <h4 class="scroll-scale" id="enlarge">
        We believe in the potential of every entrepreneur and craftsman, and our goal is to make it easier for them to focus on their passion while we take care of the digital complexities. Together,
        we build a brighter, more profitable future.
      </h4>
    </div>
  </section>

  <section class="hero2 lazyload">
    <div></div>
  </section>

  <section class="column-container scroll" id="section-4" v-bind:class="{ active: activeSection === 'section-4' }">
    <section class="scroll-scale">
      <h2>Our Services</h2>
      <h4>
        We know that a standout brand starts with getting to the heart of what makes your business unique. Our journey together kicks off with a deep dive into your goals, values, and style
        preferences. By working closely with you, we make sure every part of your brand reflects your vision perfectly. So, let's create something amazing together!
      </h4>
    </section>
    <section class="row-container">
      <section class="flip-container scroll-scale">
        <div class="flipper">
          <div class="front">
            <h3>Web Design</h3>
            <img src="../../public/images/img1.webp" alt="written Web design" id="round" />
          </div>
          <div class="back">
            <h4>Unique website</h4>
            <p>
              Every website is fully responsive, optimized for performance, and easy to manage. Whether you need a sleek portfolio, a dynamic e-commerce platform, or an interactive business site, we
              bring your vision to life with precision and creativity. Partner with us to elevate your online presence and stand out in the digital landscape.
            </p>
          </div>
        </div>
      </section>
      <section class="flip-container scroll-scale">
        <div class="flipper">
          <div class="front">
            <h3>Task Automation</h3>
            <img src="../../public/images/code.webp" alt="written Web design" id="round" />
          </div>
          <div class="back">
            <h4>Automate the mundane</h4>
            <p>
              Every automation solution we build is designed to be efficient, reliable, and user-friendly. Whether you need to streamline your workflows, automate repetitive tasks, or integrate
              multiple systems seamlessly, we bring your vision to life with precision and creativity. Partner with us to enhance your productivity and stand out in your industry with cutting-edge
              automation. Let's transform the way you work and achieve your business goals more effectively.
            </p>
          </div>
        </div>
      </section>
      <section class="flip-container scroll-scale">
        <div class="flipper">
          <div class="front">
            <h3>Content creation</h3>
            <img src="../../public/images/img3.webp" alt="written Web design" id="round" />
          </div>
          <div class="back">
            <h4>Captivating content</h4>
            <p>
              Every piece of content we create is crafted to be engaging, impactful, and true to your brand's voice. Whether you need compelling blog posts, eye-catching social media updates, or
              persuasive marketing copy, we bring your vision to life with precision and creativity. Partner with us to enhance your content strategy and captivate your audience. Let’s tell your story
              in a way that stands out and drives results.
            </p>
          </div>
        </div>
      </section>
      <section class="flip-container scroll-scale">
        <div class="flipper">
          <div class="front">
            <h3>Graphic Design</h3>
            <img src="../../public/images/img2.webp" alt="written Web design" id="round" />
          </div>
          <div class="back">
            <h4>Graphics to match you brand</h4>
            <p>
              Every graphic design project we undertake is tailored to be visually stunning, brand-aligned, and memorable. Whether you need eye-catching logos, captivating marketing materials, or
              sleek digital assets, we bring your vision to life with precision and creativity. Partner with us to elevate your brand’s visual identity and stand out in a crowded market. Let's create
              designs that leave a lasting impression.
            </p>
          </div>
        </div>
      </section>
    </section>
  </section>

  <section class="hero3 lazyload">
    <div></div>
  </section>

  <section class="column-container scroll" id="section-5" v-bind:class="{ active: activeSection === 'section-5' }">
    <section class="scroll-scale">
      <h2>Our Team</h2>
      <h4>
        We're a dynamic pair of creative pros who wear many hats. From mastering code to crafting designs to capturing stunning photos, we bring a blend of skills and expertise to every project. We're
        all about making your vision a reality and having a good time while doing it. Let's create something incredible together!
      </h4>
    </section>
    <section class="row-container">
      <section class="flip-container scroll-scale">
        <div class="flipper">
          <div class="front">
            <h4>Robbie Jameson</h4>
            <img src="../../public/images/robbie.webp" alt="Robbie Jameson" id="round" />
          </div>
          <div class="back">
            <p>
              Robbie is a self-taught software developer and design enthusiast with a rich background in hospitality. Robbie leverages his experience in successfully hospitality ventures to bring a
              unique perspective to building a brand and a business. He specializes in creating intuitive solutions that optimize business operations and enhance customer experiences. Whether you're
              aiming to streamline processes or strengthen your online presence, Robbie is committed to delivering innovative solutions that drive growth and maximize profitability.
            </p>
          </div>
        </div>
      </section>
      <section class="flip-container scroll-scale">
        <div class="flipper">
          <div class="front">
            <h4>AJ Carrick</h4>
            <img src="../../public/images/aj-portrait.webp" alt="AJ Carrick" id="round" />
          </div>
          <div class="back">
            <p>
              AJ is a talented photographer with a keen eye for detail and a passion for creating captivating visuals. With 18 years of experience in tourism, AJ has captured breathtaking landscapes
              worldwide. Throughout AJ's journey, from iconic landmarks to remote destinations, AJ has mastered the art of visual storytelling. AJ specializes in crafting compelling visual identities
              that resonate deeply with their target audience. Whether you're shaping a distinctive brand image or refining your visual storytelling, AJ's expertise ensures your vision stands out.
            </p>
          </div>
        </div>
      </section>
    </section>
  </section>

  <section class="hero4 lazyload">
    <div></div>
  </section>

  <section class="row-container scroll" id="section-6" v-bind:class="{ active: activeSection === 'section-6' }">
    <AddUser />
  </section>
</template>

<script>
import ScrollCheck from "@/components/ScrollCheck.vue";
import SocialIcons from "@/components/SocialIcons.vue";
import ScrollItem from "@/components/ScrollItem.vue";
import AddUser from "@/components/AddUser.vue";
export default {
  data() {
    return {
      activeSection: "",
      sectionsArray: [
        { id: "section-1", title: "Landing" },
        { id: "section-2", title: "Hero" },
        { id: "section-3", title: "Our Mission" },
        { id: "section-4", title: "Our Services" },
        { id: "section-5", title: "Our Team" },
        { id: "section-6", title: "Hire Us" },
      ],
    };
  },
  components: {
    ScrollCheck,
    SocialIcons,
    ScrollItem,
    AddUser,
  },
};
</script>

<style>
.hero0,
.hero1,
.hero2,
.hero3,
.hero4 {
  display: flex;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  perspective: 1px;
  transform-style: preserve-3d;
  scroll-behavior: smooth;
}
.hero0 {
  background-image: url("../../public/images/nms-bg3.webp");
}
.hero1 {
  background-image: url("../../public/images/nms-bg7.webp");
}
.hero2 {
  background-image: url("../../public/images/nms-bg6.webp");
}
.hero3 {
  background-image: url("../../public/images/nms-bg2.webp");
}
.hero4 {
  background-image: url("../../public/images/nms-bg4.webp");
}

.subtitle {
  display: flex;
  color: var(--text-colour);
  font-size: 2rem;
  font-weight: 700;
  z-index: 1000;
  p {
    margin: 1rem;
    text-wrap: nowrap;
    font-weight: lighter;
  }
}

#enlarge {
  height: 10rem;
}

#softbtn {
  height: 4rem;
  width: 9rem;
  padding: 1rem 7rem 1rem 0.5rem;
  box-shadow: var(--box-shadow);
  border-radius: 5px;
  background-color: var(--primary-colour);
}

.svg {
  width: 20rem;
  height: 20rem;
  border-radius: 5px;
  object-fit: cover;
  object-position: center;
  svg {
    width: 20rem;
    height: 20rem;
  }
}

.row-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  flex-wrap: wrap;
}

.column-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
}

.flip-container {
  width: 25rem;
  height: 25rem;
  margin: 20px;
}

.scroll-scale {
  opacity: 0;
  scale: 0.5;
  perspective: 1000px;
  animation: fade-in 3000ms cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
  animation-timeline: view(1000px 50px);
  animation-range: cover;
}

#section-3 {
  display: flex;
  flex-direction: column;
}

#round {
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
}
.portrait-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

@keyframes fade-in {
  to {
    opacity: 1;
    transform: scale(2);
  }
}

.flipper {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 2000ms;
}

.flip-container:hover .flipper {
  transform: rotateY(180deg);
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.front {
  color: var(--text-colour);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    object-fit: cover;
    object-position: top;
  }
}

.back {
  color: var(--text-colour);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
}

@media only screen and (orientation: portrait) {
  .hero0,
  .hero1,
  .hero2,
  .hero3,
  .hero4 {
    display: flex;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-attachment: fixed;
    perspective: 1px;
    transform-style: preserve-3d;
    scroll-behavior: smooth;
  }
 
  .svg {
    width: 20rem;
    height: 20rem;
  }

  .subtitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .row-container,
  .column-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 100%;
  }

  .flip-container {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
  .flipper {
    width: 70%;
    height: 70%;
  }
  #round {
    width: 15rem;
    height: 15rem;
  }
  .back {
    margin: 1rem 0;
  }
}
</style>
