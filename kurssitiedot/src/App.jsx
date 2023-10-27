

const Header = ({header}) => {
  return (
    
      <h1> {header}  </h1>
    
  );
};
const Part = (props) => {
  console.log(props.osat)
  
  return <>
      <p>{props.osat.name} {props.osat.exercises}</p>    
  </>
};

const Content = (props) => {
  console.log(props.sisalto);
  return (
    <>
      <Part  osat={props.sisalto[0]} />
      <Part osat={props.sisalto[1]} />
      <Part osat={props.sisalto[2]} />
      <Part osat={props.sisalto[3]} />
    </>
  );
};
const Course = (props) => {
  console.log(props);
  return (
    <>
      <Header header={props.kurssi.name} />
      <Content  sisalto= {props.kurssi.parts}/>
      <Total    sum={props.kurssi.parts} />
    </>
  );
};

const Total =(props) =>{
 const summa = props.sum.reduce((sum , lukumaara) => sum + lukumaara.exercises, 0)

  return(
    <>
     <p>total of {summa} exercises </p>
    </>
  )

}

const App = () => {
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },

      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return (
    <>
      <Course kurssi={course} />
      
      
    </>
  );
};
export default App;
