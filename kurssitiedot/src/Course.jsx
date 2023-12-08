

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
        {props.sisalto.map((osa, tunniste)=> (
          <Part key={tunniste} pala={osa} />
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


   export default Course;