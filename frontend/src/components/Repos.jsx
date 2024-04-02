import Repo from "./Repo";

const Repos = ({ repos, fullWidth = false }) => {
  const repoWidth = fullWidth ? "w-full" : "lg:w-2/3 w-full";
  return (
    <div className={`${repoWidth} w-full bg-glass rounded-lg px-8 py-6`}>
      <ol className="relative border-s border-gray-200">
        {repos.map((repo) => (
          <Repo key={repo.id} repo={repo} />
        ))}
        {repos.length === 0 && (
          <p className="flex items-center justify-center h-32">
            No Repos Found!
          </p>
        )}
      </ol>
    </div>
  );
};

export default Repos;
