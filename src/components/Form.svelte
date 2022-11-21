<script>
  import { insertaStudent } from "../grpcRequest/crudReq";
  import { CreateStudentRequest } from "../generated/CrudFile_pb";

  let firstName = "";
  let lastName = "";
  let email = "";
  let rollNo = "";
  let faculty = "";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, rollNo, faculty);

    let req = new CreateStudentRequest();
    req.setFirstName(firstName);
    req.setLastName(lastName);
    req.setRollNumber(rollNo);
    req.setEmail(email);
    req.setFaculty(faculty);
    insertaStudent(req);
  };
</script>

<main>
  <form on:submit={handleSubmit}>
    <input bind:value={firstName} type="text" placeholder="First Name" />
    <input bind:value={lastName} type="text" placeholder="Last Name" />
    <input bind:value={email} type="email" placeholder="Email Name" />
    <input bind:value={rollNo} type="number" placeholder="Roll no" />
    <input bind:value={faculty} type="text" placeholder="Faculty Name" />
    <button>Submit</button>
  </form>

  <h1 class="text-red-400">hello</h1>
</main>
