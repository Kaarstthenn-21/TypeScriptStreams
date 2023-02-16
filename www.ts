import cluster from "cluster";
import { cpus } from "os";
if (cluster.isMaster) {
    /* create multiple workers here cpus().length will give me number of   cores available
    */
    cluster.on("online", (worker) => { /*logic when worker becomes online*/ });
    cluster.on("exit", (worker) => { /*logic when worker becomes online*/ });
} else {
    //our app intialization logic 
}