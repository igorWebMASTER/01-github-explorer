export function RepositoryItem(props){
  return (
      <li>
        <strong>{props.repository?.name}</strong>
        <p>{props.repository.description}</p>

        <p>{props.item}</p>

        <a href={props.repository.html_link}>
          Adicionar repositório
        </a>
      </li>
  );

}