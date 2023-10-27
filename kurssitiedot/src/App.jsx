
const Header = ({header}) => {
  return (
      <h2> {header}  </h2> 
  );
};
const Part = (props) => {
  console.log('propsin osat:', props);

  return <>
  <p>{props.pala.name} {props.pala.exercises}</p>
     
  </>
};

const Content = (props) => {
  console.log('sisalto:', props.sisalto);

  return (
    <>
      {props.sisalto.map((osa, indeksi)=> (
        <Part key={indeksi} pala={osa} />
      ))}

    </>
  );
};
const Course = (props) => {
  console.log(props);
  return (
    <>
      <Header header={props.kurssi.name} />
      <Content sisalto= {props.kurssi.parts}/>
      <Total   sum={props.kurssi.parts} />
    </>
  );
};

const Total =(props) =>{

 const summa = props.sum.reduce((sum , lukumaara) => sum + lukumaara.exercises, 0)
  return(
    <>
     <strong>total of </strong> {summa} <strong>exercises </strong>
    </>
  )

}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
  
  return (
    <>
    <h1>Web development curriculum</h1>
      {courses.map((course) => (
        <Course key={course.id} kurssi={course} />
        
      ))}
    </>
  );
};


export default App;
