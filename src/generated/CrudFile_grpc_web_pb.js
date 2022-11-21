/**
 * @fileoverview gRPC-Web generated client stub for com.example
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.14.0
// source: CrudFile.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.com = {};
proto.com.example = require('./CrudFile_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.com.example.grpcServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.com.example.grpcServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.example.CreateStudentRequest,
 *   !proto.com.example.GetStudentData>}
 */
const methodDescriptor_grpcService_insertStudent = new grpc.web.MethodDescriptor(
  '/com.example.grpcService/insertStudent',
  grpc.web.MethodType.UNARY,
  proto.com.example.CreateStudentRequest,
  proto.com.example.GetStudentData,
  /**
   * @param {!proto.com.example.CreateStudentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.example.GetStudentData.deserializeBinary
);


/**
 * @param {!proto.com.example.CreateStudentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.com.example.GetStudentData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.example.GetStudentData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.example.grpcServiceClient.prototype.insertStudent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.example.grpcService/insertStudent',
      request,
      metadata || {},
      methodDescriptor_grpcService_insertStudent,
      callback);
};


/**
 * @param {!proto.com.example.CreateStudentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.example.GetStudentData>}
 *     Promise that resolves to the response
 */
proto.com.example.grpcServicePromiseClient.prototype.insertStudent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.example.grpcService/insertStudent',
      request,
      metadata || {},
      methodDescriptor_grpcService_insertStudent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.example.GetStudentRequest,
 *   !proto.com.example.AllStudents>}
 */
const methodDescriptor_grpcService_getStudent = new grpc.web.MethodDescriptor(
  '/com.example.grpcService/getStudent',
  grpc.web.MethodType.UNARY,
  proto.com.example.GetStudentRequest,
  proto.com.example.AllStudents,
  /**
   * @param {!proto.com.example.GetStudentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.example.AllStudents.deserializeBinary
);


/**
 * @param {!proto.com.example.GetStudentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.com.example.AllStudents)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.example.AllStudents>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.example.grpcServiceClient.prototype.getStudent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.example.grpcService/getStudent',
      request,
      metadata || {},
      methodDescriptor_grpcService_getStudent,
      callback);
};


/**
 * @param {!proto.com.example.GetStudentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.example.AllStudents>}
 *     Promise that resolves to the response
 */
proto.com.example.grpcServicePromiseClient.prototype.getStudent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.example.grpcService/getStudent',
      request,
      metadata || {},
      methodDescriptor_grpcService_getStudent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.example.UpdateStudentRequest,
 *   !proto.com.example.GetStudentData>}
 */
const methodDescriptor_grpcService_updateStudent = new grpc.web.MethodDescriptor(
  '/com.example.grpcService/updateStudent',
  grpc.web.MethodType.UNARY,
  proto.com.example.UpdateStudentRequest,
  proto.com.example.GetStudentData,
  /**
   * @param {!proto.com.example.UpdateStudentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.example.GetStudentData.deserializeBinary
);


/**
 * @param {!proto.com.example.UpdateStudentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.com.example.GetStudentData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.example.GetStudentData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.example.grpcServiceClient.prototype.updateStudent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.example.grpcService/updateStudent',
      request,
      metadata || {},
      methodDescriptor_grpcService_updateStudent,
      callback);
};


/**
 * @param {!proto.com.example.UpdateStudentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.example.GetStudentData>}
 *     Promise that resolves to the response
 */
proto.com.example.grpcServicePromiseClient.prototype.updateStudent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.example.grpcService/updateStudent',
      request,
      metadata || {},
      methodDescriptor_grpcService_updateStudent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.example.StudentById,
 *   !proto.com.example.SuccessMessage>}
 */
const methodDescriptor_grpcService_deleteStudent = new grpc.web.MethodDescriptor(
  '/com.example.grpcService/deleteStudent',
  grpc.web.MethodType.UNARY,
  proto.com.example.StudentById,
  proto.com.example.SuccessMessage,
  /**
   * @param {!proto.com.example.StudentById} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.example.SuccessMessage.deserializeBinary
);


/**
 * @param {!proto.com.example.StudentById} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.com.example.SuccessMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.example.SuccessMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.example.grpcServiceClient.prototype.deleteStudent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.example.grpcService/deleteStudent',
      request,
      metadata || {},
      methodDescriptor_grpcService_deleteStudent,
      callback);
};


/**
 * @param {!proto.com.example.StudentById} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.example.SuccessMessage>}
 *     Promise that resolves to the response
 */
proto.com.example.grpcServicePromiseClient.prototype.deleteStudent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.example.grpcService/deleteStudent',
      request,
      metadata || {},
      methodDescriptor_grpcService_deleteStudent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.example.StudentById,
 *   !proto.com.example.GetStudentData>}
 */
const methodDescriptor_grpcService_findStudentById = new grpc.web.MethodDescriptor(
  '/com.example.grpcService/findStudentById',
  grpc.web.MethodType.UNARY,
  proto.com.example.StudentById,
  proto.com.example.GetStudentData,
  /**
   * @param {!proto.com.example.StudentById} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.example.GetStudentData.deserializeBinary
);


/**
 * @param {!proto.com.example.StudentById} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.com.example.GetStudentData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.example.GetStudentData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.example.grpcServiceClient.prototype.findStudentById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.example.grpcService/findStudentById',
      request,
      metadata || {},
      methodDescriptor_grpcService_findStudentById,
      callback);
};


/**
 * @param {!proto.com.example.StudentById} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.example.GetStudentData>}
 *     Promise that resolves to the response
 */
proto.com.example.grpcServicePromiseClient.prototype.findStudentById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.example.grpcService/findStudentById',
      request,
      metadata || {},
      methodDescriptor_grpcService_findStudentById);
};


module.exports = proto.com.example;
