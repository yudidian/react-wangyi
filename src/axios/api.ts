import server from "./index";

export const homepageInfo = () =>{
    return server.get('/homepage/block/page')
}