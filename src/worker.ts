import { expose } from "comlink";
import { simulate } from "./logic/simulate";

const worker = {
  simulate,
};

export type SimulateWorker = typeof worker;

expose(worker);
