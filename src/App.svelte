<script>
  import { onMount } from "svelte";
  import {getStudents} from "./grpcRequest/crudReq"
  import {GetStudentRequest} from "./generated/CrudFile_pb"
  import Form from "./components/Form.svelte";
  import '../public/global.css'
  let allStudents;
	onMount(()=>{
        
        let insReq= new GetStudentRequest()
        getStudents(insReq).then((res)=>{
            allStudents = res;
        })
    })
</script>

<main>
    <Form/>

</main>