function TodoCounter(props) {
  return(
    <h1>
      Has completado {props.completed} de {props.total} ToDo's
    </h1>
  );
}

export { TodoCounter };