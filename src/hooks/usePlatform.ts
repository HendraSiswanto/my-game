import platform from "../data/platform";


interface Platform {
    id: number;
    name:string;
    slug: string;
}

const usePlatform = () => ({error: null,data: platform})

export default usePlatform