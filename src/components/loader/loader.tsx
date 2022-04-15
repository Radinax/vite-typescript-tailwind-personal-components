import RippleLoader from "~/ui/Loaders/ripple";

const Loader = () => {
  return (
    <div className="bg-primary dark:bg-dark-primary flex justify-center items-center h-screen">
      <RippleLoader />
    </div>
  );
};

export default Loader;
