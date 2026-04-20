
function Fruit() {
  const students = [
    { id: 1, name: "John" },
    { id: 2, name: "Emma" },
    { id: 3, name: "Alex" }
  ];

  return (
    <div>
      <h2>Student List</h2>
      <ul style={{liststyletype :"square"}}>
        {students.map(student => (
          <li key={student.id}>
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fruit;
//list by key id//
/*function Fruits(){
    const Fruits=["ban","ora"];
    return(
        <ul style={{liststyletype="square"}}>
            {Fruits.map((fruit,index)=>(
            <li key={index}>{fruit}</li>
            ))}
        </ul>

    );
}
export default Fruits;*/
// list by index//
/* Full page container */

}
class counter