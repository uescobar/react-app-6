import useGames from "./useGames";

type Props = {};

function Games({}: Props) {
  const { data, isLoading } = useGames();

  return <div>Games</div>;
}

export default Games;
