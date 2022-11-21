generate:
	protoc --proto_path=src/proto src/proto/CrudFile.proto --js_out=import_style=commonjs:./src/generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src/generated
		