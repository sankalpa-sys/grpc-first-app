import {grpcServiceClient} from "../generated/CrudFile_grpc_web_pb"

const grpcServiceServer = new grpcServiceClient("http://192.168.10.98:8082") 

// ! proto file ma xa name

export{
    grpcServiceServer
}

const enableDevTools=window.__GRPCWEB_DEVTOOLS__ || (()=>{})

enableDevTools([
    grpcServiceServer
])

